const ProjectFilters = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="border-t border-slate-200 py-4">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const active = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-[#315fcf] text-white"
                  : "bg-white text-[#475569] hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectFilters;