import {
  getPostBySlug,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";

import { Section, Container, Article, } from "@/components/craft";
import { Metadata } from "next";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Header from "@/app/_components/Header";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const featuredMedia = await getFeaturedMediaById(post.featured_media);
  const author = await getAuthorById(post.author);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await getCategoryById(post.categories[0]);

  return (
    <div>
      <section className="soon section_bg" style={{
        backgroundImage: `url(${featuredMedia.source_url !== undefined ? featuredMedia.source_url : "/publications.webp"})`,
      }}>
        <div style={{
          backgroundColor: 'rgba(19, 19, 19, 0.7)'
        }}>
          <Header />
          <div className="xl:px-20 pt-28 px-5 md:px-10 min-h-[400px] flex items-center justify-center">
            <div className='py-32 relative z-10'>
              <h1 className='text-center'>
                <Balancer>
                  <span
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  ></span>
                </Balancer>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Section className="bg-foreground">
        <Container>
          <div className="flex justify-between gap-4 text-normal items-center mb-4">
            <h5 className="text-background">
              Published {date} by{" "}
              {author.name && (
                <span>
                  <a href={`./?author=${author.id}`} className="underline">{author.name}</a>{" "}
                </span>
              )}
            </h5>
            <Link
              href={`./?category=${category.id}`}
              className={cn(badgeVariants({ variant: "outline" }), "not-prose text-nowrap hover:border-gold text-background text-[14px] border-background")}
            >
              {category.name}
            </Link>
          </div>

          <Article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <a className='button about-btn my-20 text-background' href="https://dash.nbaylfabuja.org" target="_blank">
            <div className='flex items-center btn hover:translate-x-2 gap-3.5'>
              <span className='text-center'>Publish with us</span>
              <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
            </div>
          </a>
        </Container>
      </Section>
    </div>
  );
}