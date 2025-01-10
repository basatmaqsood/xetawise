import BlogShowcase from "@/components/BlogShowcase";
import PageIntro from "@/components/PageIntro";

const BlogPage = () => {
  return (
    <>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
        Stay informed with the latest industry insights as our marketing team shares innovative strategies and timeless design tips.
        </p>
      </PageIntro>
      <BlogShowcase/>
    </>
  );
};

export default BlogPage;
