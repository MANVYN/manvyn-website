import Container from "../common/Container";
import aboutLogo from "../../assets/images/about-hero.png"

const AboutHero = () => {
  return (
    // <section className="overflow-hidden bg-[#0f1f45] py-20 lg:py-28">s
    <section className="overflow-hidden bg-[#0f1f45] py-14 lg:py-22">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#315fcf]">
              About Us
            </span>

            <h1 className="mt-6 max-w-[720px] text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building what's next,
              <span className="block text-[#315fcf]">
                together.
              </span>
            </h1>

            <p className="mt-7 max-w-[600px] text-base leading-7 text-slate-300 sm:text-lg">
              MANVYN is a web development studio helping businesses
              turn ideas into modern, scalable digital products.
            </p>

            {/* <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-semibold text-white">100+</p>
                <p className="mt-1 text-xs text-slate-400">
                  Projects Delivered
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">50+</p>
                <p className="mt-1 text-xs text-slate-400">
                  Happy Clients
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">5+</p>
                <p className="mt-1 text-xs text-slate-400">
                  Industries Served
                </p>
              </div>
            </div> */}
          </div>

          {/* Visual */}
          <div className="relative flex min-h-[360px] items-center justify-center">
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