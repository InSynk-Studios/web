// insynkstudios.com/why-we-build/
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function build({ posts }) {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
      <div className="mt-24 text-4xl lg:text-5xl sm:text-left md:text-left lg:text-left xl:text-left">
        <h1 className="max-w-xl lg:max-w-7xl mx-auto py-10 px-4 sm:py-12 text-purple-500">
          Our Work
        </h1>
      </div>

      <div className="space-y-10">
        {posts.map((post, index) => (
          <Link href={"/work/" + post.slug} passHref key={index}>
            <div className="relative flex flex-col md:flex-row md:space-x-5 rounded-xl shadow-lg p-3 max-w-lg md:max-w-3xl mx-auto cursor-pointer border border-gray-900 bg-gray-900">
              <div className="w-full md:w-2/6 grid place-items-center">
                <img
                  src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="tailwind logo"
                  className="rounded-2xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-gray-900  flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">
                  <div className="bg-gray-500 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                    {post.frontMatter.date}
                  </div>
                </div>
                <h3 className="font-black text-white md:text-3xl text-xl">
                  {post.frontMatter.title}
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  {post.frontMatter.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
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
