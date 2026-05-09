import PageBreadcrumb from "./common/PageBreadCrumb";
import ComponentCard from "./common/ComponentCard";
import PageIntro from "./common/PageIntro";
import Alert from "./ui/alert/Alert";
import PageMeta from "./common/PageMeta";

export default function Alerts() {
  return (
    <>
      <PageMeta
        title="React.js Alerts Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Alerts Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Alerts" />
        <PageIntro
          eyebrow="UI Elements"
          title="Feedback patterns and alert states"
          description="Status messages are grouped into calmer cards with more breathing room so warnings, success messages, and inline guidance read cleanly."
        />
        <ComponentCard title="Success Alert" desc="Positive confirmations for completed actions and healthy system events.">
          <Alert
            variant="success"
            title="Success Message"
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="success"
            title="Success Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>
        <ComponentCard title="Warning Alert" desc="Warning states for actions that need review or careful confirmation.">
          <Alert
            variant="warning"
            title="Warning Message"
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="warning"
            title="Warning Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title="Error Alert" desc="Critical states that need immediate attention or correction.">
          <Alert
            variant="error"
            title="Error Message"
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="error"
            title="Error Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title="Info Alert" desc="Neutral system messages and helpful supporting context.">
          <Alert
            variant="info"
            title="Info Message"
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="info"
            title="Info Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>
      </div>
    </>
  );
}
