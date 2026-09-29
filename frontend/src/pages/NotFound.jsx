import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-white">
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315fcf]">
            404 — Page Not Found
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight text-[#0b1220] sm:text-6xl">
            This page doesn't exist.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            The page you're looking for may have been moved, removed, or the
            URL may be incorrect.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#315fcf] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244aa8]"
            >
              <Home size={17} />
              Back to Home
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;