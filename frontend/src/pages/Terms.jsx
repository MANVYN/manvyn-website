import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read MANVYN's terms and conditions governing the use of our website and services."
        path="/terms"
      />
      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-slate-100 bg-slate-50">
          <Container>
            <div className="py-20 sm:py-24">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Legal
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Terms & Conditions
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                These terms govern your use of the MANVYN website and describe
                the general terms applicable to our services.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                Last updated: September 29, 2026
              </p>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section>
          <Container>
            <div className="max-w-4xl py-16 sm:py-20">
              {/* Acceptance */}
              <section>
                <h2 className="text-2xl font-semibold text-slate-900">
                  1. Acceptance of Terms
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  By accessing or using the MANVYN website, you agree to be
                  bound by these Terms & Conditions. If you do not agree with
                  these terms, please do not use the website.
                </p>
              </section>

              {/* About MANVYN */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  2. About MANVYN
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  MANVYN provides web and software development services,
                  including website development, e-commerce development, web
                  applications, and custom software solutions.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Information presented on this website is intended for general
                  informational purposes and does not constitute a binding offer
                  or contract for services.
                </p>
              </section>

              {/* Website Use */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  3. Use of the Website
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  You agree to use this website only for lawful purposes and in
                  a manner that does not:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-slate-600">
                  <li>Violate applicable laws or regulations</li>
                  <li>Infringe the rights of others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Introduce malicious software or harmful code</li>
                  <li>
                    Interfere with the operation or security of the website
                  </li>
                  <li>Use the website for fraudulent or abusive purposes</li>
                </ul>
              </section>

              {/* Services */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  4. Services
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Specific project requirements, scope, deliverables, timelines,
                  pricing, payment terms, revisions, and other commercial
                  conditions will be agreed upon separately between MANVYN and
                  the client.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Information on this website describing our services should not
                  be interpreted as a guarantee that a particular feature,
                  technology, result, or delivery timeline will be provided.
                </p>
              </section>

              {/* Project Enquiries */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  5. Project Enquiries
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Submitting an enquiry through our website does not create a
                  client relationship, service agreement, or obligation for
                  MANVYN to accept or undertake a project.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Any project engagement will begin only after the relevant
                  scope, commercial terms, and other applicable conditions have
                  been mutually agreed upon.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  6. Intellectual Property
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Unless otherwise stated, the content of this website,
                  including text, graphics, logos, visual elements, layouts, and
                  other materials, is owned by or licensed to MANVYN and is
                  protected by applicable intellectual property laws.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  You may not reproduce, modify, distribute, publish, or use
                  website content for commercial purposes without prior written
                  permission.
                </p>
              </section>

              {/* Portfolio */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  7. Portfolio and Project Information
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Project examples displayed on our website may represent work
                  completed by MANVYN or work that MANVYN is permitted to
                  showcase.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Client names, project details, images, or other confidential
                  information will only be displayed where MANVYN has the
                  appropriate permission or right to do so.
                </p>
              </section>

              {/* Third Party */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  8. Third-Party Services and Links
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Our website may contain links to third-party websites,
                  platforms, or services.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  MANVYN does not control and is not responsible for the
                  availability, content, security, or policies of third-party
                  services.
                </p>
              </section>

              {/* Availability */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  9. Website Availability
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  We aim to keep the website available and functional, but we do
                  not guarantee that the website will always be available,
                  uninterrupted, secure, or free from errors.
                </p>
              </section>

              {/* Disclaimer */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  10. Disclaimer
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  The information provided on this website is provided for
                  general informational purposes. While we aim to keep the
                  information accurate and current, we do not guarantee that all
                  information is complete, accurate, or up to date at all times.
                </p>
              </section>

              {/* Limitation */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  11. Limitation of Liability
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  To the extent permitted by applicable law, MANVYN will not be
                  responsible for indirect, incidental, consequential, or
                  special losses arising from your use of or inability to use
                  this website.
                </p>
              </section>

              {/* Changes */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  12. Changes to These Terms
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  We may update these Terms & Conditions from time to time.
                  Changes will become effective when the updated terms are
                  published on this page.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-slate-900">
                  13. Governing Law
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  These Terms & Conditions shall be governed by and interpreted
                  in accordance with the applicable laws of India, unless
                  otherwise agreed in a separate written agreement.
                </p>
              </section>

              {/* Contact */}
              <section className="mt-12 rounded-2xl bg-slate-50 p-7 sm:p-8">
                <h2 className="text-2xl font-semibold text-slate-900">
                  14. Contact Us
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  If you have any questions regarding these Terms & Conditions,
                  please contact us at:
                </p>

                <a
                  href="mailto:hello@manvyn.com"
                  className="mt-4 inline-block font-medium text-blue-600 hover:text-blue-700"
                >
                  hello@manvyn.com
                </a>
              </section>

              <div className="mt-12 border-t border-slate-200 pt-8">
                <Link
                  to="/"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Terms;
