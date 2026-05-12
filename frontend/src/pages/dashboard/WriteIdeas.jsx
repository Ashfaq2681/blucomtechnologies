import CreateBlog from "./CreateBlog";

const WriteIdeas = () => (
  <CreateBlog
    returnTo="/Dashboard/ideas"
    initialValues={{
      category: "Ideas",
      section: "insights",
      schemaType: "Article",
    }}
  />
);

export default WriteIdeas;
