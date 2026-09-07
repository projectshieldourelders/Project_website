import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { getAllPosts } from "@/utils/markdown";

const BlogList = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <section id="articles" className="site-paper scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-[#c6d3cb] pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,.9fr)] lg:items-end">
          <h2 className="font-display text-5xl leading-none text-[#193832] sm:text-6xl">
            Useful reading, without the alarm
          </h2>
          <p className="text-lg leading-8 text-[#52645d] sm:text-xl">
            Short explainers on the tactics people are seeing, what they mean, and the next step worth taking.
          </p>
        </div>
        <div className="mt-5 divide-y divide-[#c6d3cb]">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid gap-6 py-8 transition-colors duration-200 hover:bg-[#e8eee9] sm:grid-cols-[minmax(0,1fr)_13rem] sm:items-center sm:px-4"
              data-aos="fade-up"
              data-aos-delay={`${Math.min(index * 80, 300)}`}
            >
              <div>
                <p className="text-sm font-bold text-[#3f6d60]">{format(new Date(post.date), "MMMM d, yyyy")}</p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-[#193832] sm:text-4xl">{post.title}</h3>
                {post.excerpt ? <p className="mt-3 max-w-3xl text-base leading-7 text-[#52645d]">{post.excerpt}</p> : null}
                <p className="mt-4 text-sm font-bold text-[#193832]">Read the article</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-[#c6d3cb] bg-[#e8eee9]">
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 13rem"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
