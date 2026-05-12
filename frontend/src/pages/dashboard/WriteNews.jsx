import CreateBlog from "./CreateBlog";

const WriteNews = () => (
  <CreateBlog
    returnTo="/Dashboard/news"
    initialValues={{
      category: "News",
      section: "latest",
      schemaType: "NewsArticle",
    }}
  />
);

export default WriteNews;
