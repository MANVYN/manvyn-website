import Container from "../common/Container";
import aboutLogo from "../../assets/images/about-hero.png";

const AboutHero = () => {
  return (
    // <section className="overflow-hidden bg-[#0f1f45] py-20 lg:py-28">s
    <section className="overflow-hidden bg-[#0f1f45] py-12 lg:py-12">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Content */}
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#4d7ff5]/25 bg-[#4d7ff5]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a8beff] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4d7ff5] shadow-[0_0_10px_rgba(77,127,245,0.8)]" />
              About Us
            </div>

            <h1 className="mt-6 max-w-[720px] text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-6xl">
              Building what's next,
              <span className="block text-[#315fcf]">together.</span>
            </h1>

            <p className="mt-7 max-w-[600px] text-base leading-7 text-slate-300 sm:text-lg">
              MANVYN is a web development studio helping businesses turn ideas
              into modern, scalable digital products.
            </p>
          </div>

          {/* Visual */}
          <div className="relative flex min-h-[320px] items-center justify-center">
            <img
              src={aboutLogo}
              alt=""
              aria-hidden="true"
              className="w-full max-w-[560px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
