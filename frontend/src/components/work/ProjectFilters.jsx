import Container from "../common/Container";

const ProjectFilters = ({ categories, activeCategory, onCategoryChange }) => {
  return (
      <section className="bg-[#0f1f45]">
        <Container>
          <div className="border-t border-white/10 pt-10">
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
                        ? "border-white bg-white text-[#0f1f45] shadow-sm"
                        : "border-white/15 bg-white/5 text-slate-300 hover:border-[#7ea3ff]/40 hover:bg-white/10 hover:text-[#7ea3ff]"
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
  );
};

export default ProjectFilters;
