import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/manvyn-logo-white.png";

const BLOG_URL = `${import.meta.env.VITE_BLOG_URL}/blog`;

const companyLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Work", to: "/work" },
  { name: "Services", to: "/services" },
];

const serviceLinks = [
  "Websites",
  "E-commerce",
  "Web Applications",
  "Custom Development",
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/manvyn/",
    Icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/manvyn.dev/",
    Icon: FaInstagram,
  },
];

const linkClass =
  "w-fit text-[13px] text-[#8a95b3] transition-colors duration-200 hover:text-white";

const titleClass =
  "text-[10px] font-bold uppercase tracking-[0.2em] text-[#5d6a8e]";

export default function Footer() {
  return (
    <footer className="border-t border-[#2f55d4]/40 bg-[#0a1124] text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-8">
          {/* Brand */}
          <div className="max-w-[300px]">
            <Link
              to="/"
              aria-label="MANVYN home"
              className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b82f0]/60"
            >
              <img
                src={logo}
                alt="MANVYN"
                width={180}
                height={72}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-3 text-[13px] leading-6 text-[#8a95b3]">
              Modern websites, e-commerce and web applications for businesses
              and startups.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className={titleClass}>Company</h3>
            <nav aria-label="Company" className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <Link key={link.name} to={link.to} className={linkClass}>
                  {link.name}
                </Link>
              ))}
              <a href={BLOG_URL} className={linkClass}>
                Blog
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className={titleClass}>Services</h3>
            <nav aria-label="Services" className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((name) => (
                <Link key={name} to="/services" className={linkClass}>
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className={titleClass}>Let's talk</h3>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:hello@manvyn.com"
                  className="flex items-center gap-2.5 text-[13px] text-[#8a95b3] transition-colors hover:text-white"
                >
                  <Mail size={15} className="shrink-0 text-[#5b82f0]" />
                  hello@manvyn.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[13px] text-[#8a95b3]">
                <MapPin size={15} className="shrink-0 text-[#5b82f0]" />
                India
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2.5">
              <Link
                to="/start-project"
                className="group inline-flex items-center gap-1.5 rounded-md bg-[#2f55d4] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3f68e8]"
              >
                Start a Project
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`MANVYN on ${name}`}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-[#8a95b3] transition-colors hover:border-[#2f55d4] hover:bg-[#2f55d4] hover:text-white"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#5d6a8e]">
            © {new Date().getFullYear()} MANVYN. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-xs text-[#5d6a8e] transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-[#5d6a8e] transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
