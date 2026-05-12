import ContentHub from "../Components/ContentHub";

const News = () => (
  <ContentHub
    contentType="News"
    path="/news"
    eyebrow="News"
    title="News and Updates"
    description="Follow Blucom Technologies updates, announcements, and timely marketing and technology coverage."
    accentClass="bg-slate-900"
    showManagement={false}
    editorInitialValues={{
      category: "News",
      section: "latest",
      schemaType: "NewsArticle",
    }}
  />
);

export default News;
