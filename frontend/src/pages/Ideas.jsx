import ContentHub from "../Components/ContentHub";

const Ideas = () => (
  <ContentHub
    contentType="Ideas"
    path="/ideas"
    eyebrow="Ideas"
    title="Ideas for Modern Brands"
    description="Explore practical ideas, reports, and creative thinking for brand, marketing, and digital growth teams."
    showManagement={false}
    editorInitialValues={{
      category: "Ideas",
      section: "insights",
      schemaType: "Article",
    }}
  />
);

export default Ideas;
