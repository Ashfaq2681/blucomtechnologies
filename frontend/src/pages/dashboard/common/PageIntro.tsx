interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}

const PageIntro: React.FC<PageIntroProps> = ({ actions }) =>
  actions ? <div className="flex justify-end">{actions}</div> : null;

export default PageIntro;
