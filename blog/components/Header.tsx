"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

const navLinks = [
  { name: "Home", path: `${WEBSITE_URL}/` },
  { name: "Services", path: `${WEBSITE_URL}/services` },
  { name: "Work", path: `${WEBSITE_URL}/work` },
  { name: "Blog", path: "/blog", internal: true },
  { name: "About", path: `${WEBSITE_URL}/about` },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // This app is the blog, so the Blog link is always the active one
  const closeMenu = () => setIsMenuOpen(false);

  // Shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu, and the page doesn't scroll behind it
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const desktopLink =
    "group relative py-2 text-sm font-medium text-[#101e4b] transition-colors hover:text-[#2f55d4]";
  const underline =
    "absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rounded-full bg-[#2f55d4] transition-transform duration-300";

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled
          ? "border-[#dfe4f1] shadow-[0_8px_30px_-12px_rgba(16,30,75,0.18)]"
          : "border-[#eef1f8] shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-[68px] items-center justify-between sm:h-20">
          {/* Logo */}
          <a
            href={WEBSITE_URL}
            className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f55d4]/50"
            onClick={closeMenu}
            aria-label="MANVYN home"
          >
            <Image
              src="/images/manvyn-logo.png"
              alt="MANVYN"
              width={180}
              height={72}
              priority
              className="h-14 w-auto object-contain sm:h-[72px]"
            />
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-9 md:flex"
          >
            {navLinks.map((link) => {
              const active = link.internal;
              const classes = `group relative py-2 text-sm transition-colors ${
                active
                  ? "font-semibold text-[#2f55d4]"
                  : "font-medium text-[#101e4b] hover:text-[#2f55d4]"
              }`;
              const line = (
                <span
                  className={`${underline} ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              );

              return link.internal ? (
                <Link
                  key={link.name}
                  href={link.path}
                  aria-current="page"
                  className={classes}
                >
                  {link.name}
                  {line}
                </Link>
              ) : (
                <a key={link.name} href={link.path} className={classes}>
                  {link.name}
                  {line}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href={`${WEBSITE_URL}/start-project`}
            className="group hidden items-center gap-2 rounded-md bg-[#12225a] px-5 py-2.5 text-xs font-semibold text-white shadow-sm shadow-[#12225a]/20 transition-all duration-300 hover:bg-[#1c347f] hover:shadow-md hover:shadow-[#12225a]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f55d4]/50 focus-visible:ring-offset-2 md:inline-flex"

            // className="group hidden items-center gap-2 rounded-md bg-[#101e4b] px-5 py-2.5 text-xs font-semibold text-white shadow-sm shadow-[#101e4b]/20 transition hover:bg-[#2f55d4] hover:shadow-md hover:shadow-[#2f55d4]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f55d4]/50 focus-visible:ring-offset-2 md:inline-flex"
          >
            Start a Project
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f55d4]/50 md:hidden ${
              isMenuOpen
                ? "border-[#101e4b] bg-[#101e4b] text-white"
                : "border-[#dfe4f1] bg-white text-[#101e4b] hover:border-[#2f55d4]/40 hover:text-[#2f55d4]"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl border-t border-[#eef1f8] px-5 pb-6 pt-3 sm:px-6"
          >
            <ul className="divide-y divide-[#eef1f8]">
              {navLinks.map((link, i) => {
                const active = link.internal;
                const classes = `flex items-center gap-4 py-4 text-base transition-colors ${
                  active
                    ? "font-semibold text-[#2f55d4]"
                    : "font-medium text-[#101e4b] hover:text-[#2f55d4]"
                }`;
                const content = (
                  <>
                    <span className="w-6 text-[10px] font-bold tracking-widest text-[#2f55d4]/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.name}
                    {active && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#2f55d4]" />
                    )}
                  </>
                );

                return (
                  <li key={link.name}>
                    {link.internal ? (
                      <Link
                        href={link.path}
                        onClick={closeMenu}
                        aria-current="page"
                        className={classes}
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        href={link.path}
                        onClick={closeMenu}
                        className={classes}
                      >
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href={`${WEBSITE_URL}/start-project`}
              onClick={closeMenu}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#101e4b] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2f55d4]"
            >
              Start a Project
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
