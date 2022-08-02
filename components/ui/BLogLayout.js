const BlogLayout = (props) => {
  return (
    <div className="grid place-items-center justify-center">
      <div className="container p-12 mt-32 lg:mt-48 overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};

export default BlogLayout;
// This component is for responsive blog
