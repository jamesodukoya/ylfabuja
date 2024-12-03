import Image from "next/image";
import Link from "next/link";

import { Post } from "@/lib/wordpress.d";
import { cn } from "@/lib/utils";

import {
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";

export default async function PostCard({ post }: { post: Post }) {
  const media = await getFeaturedMediaById(post.featured_media);
  const author = await getAuthorById(post.author);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await getCategoryById(post.categories[0]);

  return (
    <div
      // href={`/publications/${post.slug}`}
      className={cn(
        " p-4 bg-accent/30 group flex justify-between flex-col not-prose gap-14",
        "hover:bg-accent/75 transition-all bg-background"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="h-48 w-full overflow-hidden relative border flex items-center justify-center">
          <a href={`/publications/${post.slug}`}>
            <Image
              className="h-full w-full object-cover"
              src={`${media.source_url !== undefined ? media.source_url : "/ylf-abuja-executives.webp"}`}
              alt={post.title.rendered}
              width={400}
              height={200}
            />
          </a>
        </div>
        <h2><a href={`/publications/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></a></h2>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html:
              post.excerpt.rendered.split(" ").slice(0, 12).join(" ").trim() +
              "...",
          }}
        ></div>
      </div>

      <div className="flex flex-col gap-4">
        <hr />
        <div className="flex justify-between items-center text-xs">
          <a href={`/publications/?category=${category.id}`}><p>{category.name}</p></a>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}