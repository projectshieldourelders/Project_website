import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import { format } from "date-fns";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "content",
    "metadata",
  ]);

  const siteName = process.env.SITE_NAME || "Shield Our Elders";
  const authorName = process.env.AUTHOR_NAME || "Shield Our Elders";

  if (post) {
    const metadata = {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };

    return metadata;
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
}

export default async function BlogHead({ params }: Props) {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <section className="pt-44">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row">
                <span className="text-base text-midnight_text pr-7 border-r border-solid border-white w-fit">
                  {format(new Date(post.date), "dd MMM yyyy")}
                </span>
                <span className="text-base text-midnight_text sm:pl-7 pl-0 w-fit">
                  Scam safety note
                </span>
              </div>
              <h2 className="text-midnight_text pt-7 text-[40px] leading-tight font-bold">
                {post.title}
              </h2>
            </div>
            <div className="flex shrink-0 gap-6 pt-4 md:pt-0">
              <Image
                src={post.authorImage}
                alt="image"
                className="rounded-full"
                width={84}
                height={84}
                quality={100}
                style={{ width: "auto", height: "auto" }}
              />
              <div>
                <span className="text-[22px] leading-tight text-midnight_text">
                  Shield Our Elders
                </span>
                <p className="text-xl text-midnight_text">Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
