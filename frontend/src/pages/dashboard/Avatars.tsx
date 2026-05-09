import PageBreadcrumb from "./common/PageBreadCrumb";
import ComponentCard from "./common/ComponentCard";
import PageIntro from "./common/PageIntro";
import Avatar from "./ui/avatar/Avatar";
import PageMeta from "./common/PageMeta";
import { dashboardAssets } from "./assets";

export default function Avatars() {
  const avatarSrc = dashboardAssets.users.user01;

  return (
    <>
      <PageMeta
        title="React.js Avatars Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Avatars Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Avatars" />
        <PageIntro
          eyebrow="UI Elements"
          title="Profile identity samples"
          description="Review avatar sizes and presence indicators in a calmer presentation that matches the rest of the dashboard."
        />
        <ComponentCard
          title="Default Avatar"
          desc="Standard circular avatars across the supported size scale."
        >
          {/* Default Avatar (No Status) */}
          <div className="flex flex-wrap items-end justify-center gap-5 sm:gap-6">
            <Avatar src={avatarSrc} size="xsmall" />
            <Avatar src={avatarSrc} size="small" />
            <Avatar src={avatarSrc} size="medium" />
            <Avatar src={avatarSrc} size="large" />
            <Avatar src={avatarSrc} size="xlarge" />
            <Avatar src={avatarSrc} size="xxlarge" />
          </div>
        </ComponentCard>
        <ComponentCard
          title="Avatar with online indicator"
          desc="Use green presence dots for actively available users."
        >
          <div className="flex flex-wrap items-end justify-center gap-5 sm:gap-6">
            <Avatar src={avatarSrc} size="xsmall" status="online" />
            <Avatar src={avatarSrc} size="small" status="online" />
            <Avatar src={avatarSrc} size="medium" status="online" />
            <Avatar src={avatarSrc} size="large" status="online" />
            <Avatar src={avatarSrc} size="xlarge" status="online" />
            <Avatar src={avatarSrc} size="xxlarge" status="online" />
          </div>
        </ComponentCard>
        <ComponentCard
          title="Avatar with offline indicator"
          desc="Muted red states for contacts who are unavailable right now."
        >
          <div className="flex flex-wrap items-end justify-center gap-5 sm:gap-6">
            <Avatar src={avatarSrc} size="xsmall" status="offline" />
            <Avatar src={avatarSrc} size="small" status="offline" />
            <Avatar src={avatarSrc} size="medium" status="offline" />
            <Avatar src={avatarSrc} size="large" status="offline" />
            <Avatar src={avatarSrc} size="xlarge" status="offline" />
            <Avatar src={avatarSrc} size="xxlarge" status="offline" />
          </div>
        </ComponentCard>{" "}
        <ComponentCard
          title="Avatar with busy indicator"
          desc="Amber status badges for teammates who are active but occupied."
        >
          <div className="flex flex-wrap items-end justify-center gap-5 sm:gap-6">
            <Avatar src={avatarSrc} size="xsmall" status="busy" />
            <Avatar src={avatarSrc} size="small" status="busy" />
            <Avatar src={avatarSrc} size="medium" status="busy" />
            <Avatar src={avatarSrc} size="large" status="busy" />
            <Avatar src={avatarSrc} size="xlarge" status="busy" />
            <Avatar src={avatarSrc} size="xxlarge" status="busy" />
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
