// insynkstudios.com/blog
import { Fragment } from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function blog({ posts }) {
  return (
    <Fragment>
    <div className="flex flex-col text-white items-center justify-center h-screen">
        <div className="container mx-auto xl:max-w-screen-lg">
          <section>
            <div className="text-4xl lg:text-5xl sm:text-left md:text-left lg:text-left xl:text-left selection:bg-teal-300 selection:text-fuchsia-900">
              <h1 className="max-w-xl lg:max-w-7xl mx-auto py-10 px-4 sm:py-12 text-indigo-500">
                Welcome to the Blog
              </h1>
            </div>
            <div className="max-w-sm lg:max-w-4xl mx-auto text-lime-600 selection:bg-none">
              <div className="pb-5 text-2xl ">
                <ul>
                  <div className="divide-y-2 divide-stone-300">
                    {posts.map((post, index) => (
                      <Link href={"/blog/" + post.slug} passHref key={index}>
                        <div className="mb-5">
                          <div className="underline hover:decoration-wavy hover:cursor-pointer inline-block">
                            {/* Taking title name and date from the markdown file */}
                            <h5 className="mt-5">{post.frontMatter.title}</h5>
                            <h5 className="text-sm">{post.frontMatter.date}</h5>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
