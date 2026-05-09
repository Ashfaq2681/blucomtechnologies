import { useSidebar } from "../context/SidebarContext";

const Backdrop: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-[88px] z-20 bg-slate-900/45 lg:hidden"
      onClick={toggleMobileSidebar}
    />
  );
};

export default Backdrop;
