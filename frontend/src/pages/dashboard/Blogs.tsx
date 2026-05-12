import ContentDashboard from "./ContentDashboard";

export default function Blogs() {
  return (
    <ContentDashboard
      contentType="Blog"
      routeBase="/blog"
      writePath="/Dashboard/write-blog"
      editPathBase="/Dashboard/edit-blog"
      title="Manage blog output from one dashboard space"
      description="Track what is published, what is queued, and what still needs writing without leaving the admin area."
      metaTitle="Blog Dashboard | Blucom Technologies"
      metaDescription="Blog management overview for the dashboard."
      emptyMessage="No blog posts have been created yet."
    />
  );
}
