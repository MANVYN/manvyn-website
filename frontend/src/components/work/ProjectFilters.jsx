const ProjectFilters = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="border-t border-slate-200 py-4">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const active = activeCategory === category.name;
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              type="button"
              onClick={() => onCategoryChange(category.name)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "border-[#315fcf] bg-[#315fcf] text-white shadow-sm"
                  : "border-slate-200 bg-white text-[#475569] hover:border-[#315fcf]/20 hover:bg-[#f4f7fb] hover:text-[#315fcf]"
              }`}
            >
              <Icon size={16} strokeWidth={1.8} />
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectFilters;
