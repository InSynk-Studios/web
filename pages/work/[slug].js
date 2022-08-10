// insynkstudios.com/work/[slug]

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogLayout from "../../components/ui/BLogLayout";
import SyntaxHighlighter from "react-syntax-highlighter";

const components = { SyntaxHighlighter };

const BuildPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <BlogLayout>
      {/* Rendering markdown from "posts" folder */}
      <div className="prose prose-sm lg:prose-base prose-h3:text-purple-600 prose-invert">
        <h1 className="opacity-75 text-teal-400 ">{title}</h1>
        <h6>{date}</h6>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </BlogLayout>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default BuildPage;
