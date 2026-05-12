import ContentDashboard from "./ContentDashboard";

export default function News() {
  return (
    <ContentDashboard
      contentType="News"
      routeBase="/news"
      writePath="/Dashboard/write-news"
      editPathBase="/Dashboard/edit-news"
      title="Manage news output from one dashboard space"
      description="Track announcements, updates, and timely coverage from draft through publication."
      metaTitle="News Dashboard | Blucom Technologies"
      metaDescription="News management overview for the dashboard."
      emptyMessage="No news posts have been created yet."
    />
  );
}
