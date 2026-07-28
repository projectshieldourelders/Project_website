import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { assetPath } from "./assets";

const postsDirectory = join(process.cwd(), "markdown/blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {  
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {};

  function processImages(content: string) {
    return content.replace(/!\[.*?\]\((.*?)\)/g, (_match, src) => `<img src="${assetPath(src)}" alt="" />`);
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      // You can modify the content here to include Images
      items[field] = processImages(content);
    }

    if (field === "metadata") {
      items[field] = {
        ...data,
        coverImage: typeof data.coverImage === "string" ? assetPath(data.coverImage) : data.coverImage || null,
      };
    }

    if (typeof data[field] !== "undefined") {
      items[field] = typeof data[field] === "string" && data[field].startsWith("/images/")
        ? assetPath(data[field])
        : data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
