import {
  getAllPosts,
  getAllAuthors,
  getAllTags,
  getAllCategories,
} from "@/lib/wordpress";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Section, Container } from "@/components/craft";
import PostCard from "@/components/post-card";
import FilterPosts from "./filter";
import Header from "../_components/Header";

export default async function Publications({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { author, tag, category, page: pageParam } = searchParams;
  const posts = await getAllPosts({ author, tag, category });

  const authors = await getAllAuthors();
  const tags = await getAllTags();
  const categories = await getAllCategories();

  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const postsPerPage = 9;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <div className="relative z-10">
      <section className="soon publications section_bg">
        <Header />
        <div className="xl:px-20 pt-28 px-5 md:px-10 min-h-[400px] flex items-center justify-center">
          <div className='py-32 relative z-10'>
            <h1 className='text-center'>Publications</h1>
          </div>
        </div>
      </section>
      <Section className="bg-foreground">
        <Container>
          <FilterPosts
            authors={authors}
            tags={tags}
            categories={categories}
            selectedAuthor={author}
            selectedTag={tag}
            selectedCategory={category}
          />

          {paginatedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 z-0">
              {paginatedPosts.map((post: any, index: number) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center">
              <p>No Results Found</p>
            </div>
          )}

          <div className="mt-8 not-prose">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={
                      `${page === totalPages ? "pointer-events-none text-muted" : ""} bg-background`
                    }
                    href={`?page=${Math.max(page - 1, 1)}${category ? `&category=${category}` : ""
                      }${author ? `&author=${author}` : ""}${tag ? `&tag=${tag}` : ""
                      }`}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href={`?page=${page}`}>
                    <span className="page-item text-background hover:text-gold">{page}</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className={
                      `${page === totalPages ? "pointer-events-none text-muted" : ""} bg-background`
                    }
                    href={`?page=${Math.min(page + 1, totalPages)}${category ? `&category=${category}` : ""
                      }${author ? `&author=${author}` : ""}${tag ? `&tag=${tag}` : ""
                      }`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </Container>
      </Section>
    </div>
  );
}