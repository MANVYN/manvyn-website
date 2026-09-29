import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  //   Github,
  ShoppingBag,
  ShoppingCart,
  Package,
  ShieldCheck,
  Search,
  CreditCard,
  Truck,
  Users,
  Settings,
  Database,
  Code2,
  Layers,
} from "lucide-react";

import Container from "../../components/common/Container";
import SEO from "../../components/common/SEO";
import ShopSphereHero from "../../assets/images/work/shopsphere-hero.png";
import ShopSphereFront from "../../assets/images/work/shopsphere-front.png";
// import ShopSphereHero from "../../assets/images/work/shopsphere-hero.png"
// import ShopSphereHero from "../../assets/images/work/shopsphere-hero.png"

const ShopSphere = () => {
  return (
    <>
      <SEO
        title="ShopSphere"
        description="ShopSphere is a full-stack e-commerce platform built with React, Node.js, Express and MongoDB."
        path="/work/shopsphere"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#e7f0ff]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute left-1/3 top-1/2 h-[350px] w-[350px] rounded-full bg-indigo-50/60 blur-3xl" />
        </div>

        <Container>
          <div className="relative z-10 py-8 lg:py-12">
            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-2 text-sm text-slate-500">
              <Link
                to="/work"
                className="transition-colors hover:text-[#315fcf]"
              >
                Work
              </Link>

              <span>/</span>

              <span className="text-slate-900">ShopSphere</span>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              {/* LEFT */}
              <div className="max-w-[540px]">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#315fcf]">
                  <ShoppingBag size={14} />
                  E-commerce
                </div>

                <h1 className="text-5xl font-bold tracking-[-0.04em] text-[#0b1220] sm:text-6xl">
                  Shop
                  <span className="text-[#315fcf]">Sphere</span>
                </h1>

                <p className="mt-6 max-w-[500px] text-lg leading-8 text-[#64748b]">
                  A modern full-stack e-commerce platform designed for seamless
                  product discovery, shopping, checkout and order management.
                </p>

                {/* Tech */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162033]"
                  >
                    Visit Live Project
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1220] transition hover:border-[#315fcf] hover:text-[#315fcf]"
                  >
                    View Code
                    {/* <Github size={17} /> */}
                  </a>
                </div>
              </div>

              {/* RIGHT HERO IMAGE */}
              <div className="relative">
                <div className="absolute inset-0 rounded-[40px] bg-blue-200/30 blur-3xl" />

                <img
                  src={ShopSphereHero}
                  alt="ShopSphere e-commerce platform"
                  width="1536"
                  height="1024"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="relative z-10 w-full object-contain drop-shadow-[0_30px_60px_rgba(37,99,235,0.18)]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CHALLENGE */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#315fcf]">
                The Challenge
              </p>

              <h2 className="mt-4 max-w-[520px] text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
                Creating a complete e-commerce experience from customer to
                admin.
              </h2>
            </div>

            <div className="lg:border-l lg:border-slate-200 lg:pl-12">
              <p className="max-w-[650px] text-lg leading-8 text-[#64748b]">
                The goal was to build a modern e-commerce platform that provides
                a smooth shopping experience for customers while giving
                administrators the tools needed to manage products, users and
                orders.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE BUILT */}
      <section className="bg-[#f8fafc] py-20 lg:py-24">
        <Container>
          <div className="max-w-[650px]">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#315fcf]">
              What We Built
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
              A full-featured e-commerce platform for real business needs.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Search}
              title="Product Discovery"
              description="Browse products, search and filter through a clean shopping experience."
            />

            <FeatureCard
              icon={ShoppingCart}
              title="Shopping Cart & Checkout"
              description="Manage cart items and complete a streamlined checkout flow."
            />

            <FeatureCard
              icon={Truck}
              title="Order Tracking"
              description="Track order progress from placement through delivery."
            />

            <FeatureCard
              icon={ShieldCheck}
              title="Admin Management"
              description="Manage users, products, sellers and platform activity."
            />
          </div>
        </Container>
      </section>

      {/* PRODUCT EXPERIENCE */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#315fcf]">
                Product Experience
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
                A closer look at ShopSphere.
              </h2>
            </div>

            <p className="max-w-[450px] text-sm leading-6 text-[#64748b]">
              Clean, modern interfaces for customers and administrators,
              designed around the complete shopping journey.
            </p>
          </div>

          {/* Storefront */}
          <ProjectImage
            src={ShopSphereFront}
            alt="ShopSphere storefront"
            label="01"
            title="Modern Storefront"
            description="Product discovery with search, categories and featured products."
            className="mt-12"
          />

          {/* Admin + Cart */}
          {/* <div className="mt-6 grid gap-6 lg:grid-cols-2">

            <ProjectImage
              src={ShopSphereHero}
              alt="ShopSphere admin dashboard"
              label="02"
              title="Admin Dashboard"
              description="Manage products, users and platform activity."
            />

            <ProjectImage
              src={ShopSphereHero}
              alt="ShopSphere shopping cart"
              label="03"
              title="Cart & Checkout"
              description="Simple cart management and checkout experience."
            />

          </div> */}

          {/* Tracking */}
          {/* <ProjectImage
            src={ShopSphereHero}
            alt="ShopSphere order tracking"
            label="04"
            title="Order Tracking"
            description="Real-time order status and delivery progress."
            className="mt-6"
          /> */}
        </Container>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-[#f8fafc] py-20 lg:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#315fcf]">
            Key Features
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
            Everything the platform needs.
          </h2>

          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureItem icon={Search} title="Product browsing & search" />
            <FeatureItem
              icon={ShoppingCart}
              title="Cart & quantity management"
            />
            <FeatureItem icon={CreditCard} title="Checkout flow" />
            <FeatureItem icon={Package} title="Order management" />
            <FeatureItem icon={Truck} title="Order tracking" />
            <FeatureItem icon={Settings} title="Admin dashboard" />
            <FeatureItem icon={Database} title="Product management" />
            <FeatureItem icon={Users} title="User management" />
          </div>
        </Container>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#315fcf]">
            Technology
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
            Built with modern technologies.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <TechCard
              icon={Code2}
              title="Frontend"
              value="React"
              description="Modern component-based UI"
            />

            <TechCard
              icon={Code2}
              title="Backend"
              value="Node.js + Express"
              description="REST API architecture"
            />

            <TechCard
              icon={Database}
              title="Database"
              value="MongoDB"
              description="Flexible NoSQL database"
            />

            <TechCard
              icon={Layers}
              title="State Management"
              value="Redux Toolkit"
              description="Centralized application state"
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-[#0b1220] px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
            {/* Background glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-[#315fcf]/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              {/* Content */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
                  Have a product idea like this?
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let's build it together.
                </h2>

                <p className="mt-4 max-w-[550px] text-base leading-7 text-slate-400">
                  Turn your idea into a powerful digital product built around
                  your business goals.
                </p>
              </div>

              {/* CTA */}
              <Link
                to="/start-project"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1220] shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Start a Project
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
};

/* ---------------- COMPONENTS ---------------- */

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#315fcf]">
        <Icon size={20} />
      </div>

      <h3 className="mt-5 text-base font-semibold text-[#0b1220]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#64748b]">{description}</p>
    </div>
  );
};

const FeatureItem = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#315fcf]">
        <Icon size={18} />
      </div>

      <p className="text-sm font-semibold text-[#0b1220]">{title}</p>
    </div>
  );
};

const TechCard = ({ icon: Icon, title, value, description }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#315fcf]">
        <Icon size={20} />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-bold text-[#0b1220]">{value}</h3>

      <p className="mt-1 text-sm text-[#64748b]">{description}</p>
    </div>
  );
};

const ProjectImage = ({
  src,
  alt,
  label,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] ${className}`}
    >
      <div className="relative">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full object-cover"
        />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div className="rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
            <span className="text-xs font-bold text-[#315fcf]">{label}</span>

            <h3 className="mt-1 text-base font-bold text-[#0b1220]">{title}</h3>

            <p className="mt-1 max-w-[360px] text-xs text-[#64748b]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSphere;
