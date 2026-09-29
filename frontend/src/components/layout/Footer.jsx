import { Link } from "react-router-dom";

import logo from "../../assets/images/manvyn-logo-white.png";
import Container from "../common/Container";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#14223d] text-white">
      <Container>
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:py-16">

          {/* Brand */}
          <div className="max-w-[320px]">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="MANVYN"
                className="h-18 w-auto object-contain"
                style={{
                  position: "relative",
                  left: "-14px"
                }}
              />
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              We design and build modern websites, e-commerce experiences and
              web applications for businesses and startups.
            </p>

            <Link
              to="/start-project"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                About
              </Link>

              <Link
                to="/work"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Work
              </Link>

              <Link
                to="/services"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Services
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Services
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/services"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Websites
              </Link>

              <Link
                to="/services"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                E-commerce
              </Link>

              <Link
                to="/services"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Web Applications
              </Link>

              <Link
                to="/services"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Custom Development
              </Link>
            </nav>
          </div>

          {/* Contact */}
          {/* <div>
            <h3 className="text-sm font-semibold text-white">
              Let's Talk
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Have an idea or project in mind? We'd love to hear about it.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:hello@MANVYN.com"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail size={16} />
                hello@MANVYN.com
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={16} />
                India
              </div>
            </div>
          </div> */}
          {/* Contact */}
<div>
  <h3 className="text-sm font-semibold text-white">
    Let's Talk
  </h3>

  <p className="mt-5 text-sm leading-6 text-slate-400">
    Have an idea or project in mind? We'd love to hear about it.
  </p>

  <div className="mt-5 space-y-3">
    <a
      href="mailto:hello@manvyn.com"
      className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
    >
      <Mail size={16} />
      hello@manvyn.com
    </a>

    <div className="flex items-center gap-3 text-sm text-slate-400">
      <MapPin size={16} />
      India
    </div>
  </div>

  {/* Socials */}
 <div className="mt-6 flex items-center gap-3">
  <a
    href="https://www.linkedin.com/in/manvyn/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="MANVYN on LinkedIn"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
  >
    <FaLinkedinIn size={16} />
  </a>

  <a
    href="https://www.instagram.com/manvyn.dev/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="MANVYN on Instagram"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
  >
    <FaInstagram size={16} />
  </a>

  <a
    href="https://github.com/MANVYN/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="MANVYN on GitHub"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
  >
    <FaGithub size={16} />
  </a>
</div>
</div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MANVYN. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;