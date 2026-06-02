import ContentEditor from "./ContentEditor";
import ContentListPage from "./ContentListPage";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";

export default function PortfolioPages() {
  return (
    <>
      <PageMeta
        title="Portfolio | Blucom Technologies Dashboard"
        description="Create, edit, publish, review, and manage portfolio pages from one dashboard page."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Portfolio" />
        <PageIntro
          eyebrow="Content Library"
          title="Portfolio"
          description="Create portfolio pages, manage status and SEO fields, connect JSX case-study files, and review existing portfolio entries from one page."
        />
        <ContentEditor type="portfolio" embedded />
        <ContentListPage type="portfolio" embedded />
      </div>
    </>
  );
}
