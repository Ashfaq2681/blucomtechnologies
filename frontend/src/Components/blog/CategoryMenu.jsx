import { useEffect, useState } from "react";
import { getCategories } from "../../api/blogs";

const CategoryMenu = ({ className = "" }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadCategories = async () => {
      try {
        const data = await getCategories();
        if (mounted) {
          setCategories(data);
          setError("");
        }
      } catch (_error) {
        if (mounted) {
          setError("Categories unavailable");
        }
      }
    };

    loadCategories();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <div className={`text-[13px] font-semibold text-gray-900 ${className}`}>
        {error}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 lg:gap-6 ${className}`}>
      {categories.map((category) => (
        <div key={category.id} className="group relative">
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
          >
            {category.name}
          </button>
          {category.subcategories.length > 0 && (
            <div className="invisible absolute left-0 top-full z-20 mt-3 min-w-[220px] rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              {category.subcategories.map((subcategory) => (
                <div
                  key={subcategory.id}
                  className="rounded-xl px-3 py-2 text-sm text-gray-900 transition hover:bg-slate-50 hover:text-slate-950"
                >
                  {subcategory.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
