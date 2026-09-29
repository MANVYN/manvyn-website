import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

import logo from "../../assets/images/manvyn-logo.png";
import Container from "../common/Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0" onClick={closeMenu}>
            <img
              src={logo}
              alt="MANVYN"
              className="h-18 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <Link
            to="/start-project"
            className="hidden items-center gap-2 rounded-xl bg-[#14223d] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#162033] md:inline-flex"
          >
            Start a Project
            <ArrowRight size={15} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#14223d] md:hidden"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-slate-100 py-5 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-slate-50 text-[#315fcf]"
                        : "text-[#0b1220] hover:bg-slate-50 hover:text-[#315fcf]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/start-project"
                onClick={closeMenu}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#14223d] px-4 py-3 text-sm font-semibold text-white"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;