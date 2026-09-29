import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";

import logo from "../../assets/images/manvyn-logo.png";
import Container from "../common/Container";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <Container className="flex h-full items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="MANVYN"
            className="h-18 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#315fcf]"
                    : "text-[#0b1220] hover:text-[#315fcf]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/start-project"
          className="hidden items-center gap-2 rounded-xl bg-[#14223d] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#162033] md:inline-flex"
        >
          Start a Project
          <ArrowRight size={15} />
        </Link>

        {/* Mobile */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#14223d] md:hidden"
        >
          <Menu size={21} />
        </button>

      </Container>
    </header>
  );
};

export default Header;