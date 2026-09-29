import { Mail, MapPin } from "lucide-react";
import Container from "../common/Container";

const DirectContact = () => {
  return (
    <section className="bg-white py-10 lg:py-14">
      <Container>
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2">
          
          {/* Email */}
          <div className="flex items-center gap-5 p-6 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#315fcf]/10 text-[#315fcf]">
              <Mail size={21} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#0f1f45]">
                Prefer email?
              </h3>

              <p className="mt-1 text-sm text-[#64748b]">
                You can also reach us directly at
              </p>

              <a
                href="mailto:hello@MANVYN.com"
                className="mt-1 inline-block text-sm font-semibold text-[#315fcf] hover:text-[#244aa8]"
              >
                hello@MANVYN.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-5 border-t border-slate-200 p-6 sm:border-l sm:border-t-0 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#315fcf]/10 text-[#315fcf]">
              <MapPin size={21} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#0f1f45]">
                Based in India
              </h3>

              <p className="mt-1 text-sm text-[#64748b]">
                Working with businesses worldwide.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default DirectContact;