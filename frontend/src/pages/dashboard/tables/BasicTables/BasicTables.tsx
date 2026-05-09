import PageBreadcrumb from "../../common/PageBreadCrumb";
import ComponentCard from "../../common/ComponentCard";
import PageMeta from "../../common/PageMeta";
import PageIntro from "../../common/PageIntro";
import BasicTableOne from "./BasicTableOne";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Basic Tables" />
        <PageIntro
          eyebrow="Tables"
          title="Structured data with a lighter reading rhythm"
          description="Table examples are wrapped in the same polished page shell so dense data feels more deliberate and easier to read."
        />
        <ComponentCard
          title="Basic Table 1"
          desc="A simple records table for operational lists, order management, and customer tracking."
        >
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
