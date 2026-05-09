import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import UserMetaCard from "./UserProfile/UserMetaCard";
import UserInfoCard from "./UserProfile/UserInfoCard";
import UserAddressCard from "./UserProfile/UserAddressCard";
import PageMeta from "./common/PageMeta";

export default function UserProfiles() {
  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Profile" />
        <PageIntro
          eyebrow="Profile"
          title="Customer and account details"
          description="Profile content is grouped into a clearer account surface so identity, contact information, and address details feel like one system."
        />
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 lg:p-7">
        <h3 className="mb-5 text-lg font-semibold tracking-tight text-slate-900 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
        </div>
      </div>
      </div>
    </>
  );
}
