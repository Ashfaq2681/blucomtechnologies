import ContentDashboard from "./ContentDashboard";

export default function Ideas() {
  return (
    <ContentDashboard
      contentType="Ideas"
      routeBase="/ideas"
      writePath="/Dashboard/write-ideas"
      editPathBase="/Dashboard/edit-ideas"
      title="Manage ideas output from one dashboard space"
      description="Track ideas, reports, and strategic thinking from draft through publication."
      metaTitle="Ideas Dashboard | Blucom Technologies"
      metaDescription="Ideas management overview for the dashboard."
      emptyMessage="No ideas posts have been created yet."
    />
  );
}
