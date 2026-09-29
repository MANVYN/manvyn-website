import { Link } from "react-router-dom";
import Container from "../components/common/Container";

const PrivacyPolicy = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-100 bg-slate-50">
        <Container>
          <div className="py-20 sm:py-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Legal
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Your privacy matters to us. This Privacy Policy explains how
              MANVYN collects, uses, and protects information when you use our
              website or contact us.
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
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                1. Introduction
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                MANVYN is a web and software development studio providing
                websites, e-commerce solutions, web applications, and custom
                software development services.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                This Privacy Policy explains what information we may collect,
                how we use that information, and how we handle information
                submitted through our website.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                2. Information We Collect
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We may collect information that you voluntarily provide when
                you interact with our website, including:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-slate-600">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number, if provided</li>
                <li>Company or business name</li>
                <li>Project or service requirements</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We may also collect limited technical information such as
                browser type, device information, approximate location, and
                website usage information when necessary for website operation,
                security, and analytics.
              </p>
            </section>

            {/* How We Use Information */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                3. How We Use Your Information
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Information collected through our website may be used to:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-slate-600">
                <li>Respond to enquiries and project requests</li>
                <li>Understand your business and project requirements</li>
                <li>Provide requested services or information</li>
                <li>Communicate with you regarding a potential project</li>
                <li>Improve our website, services, and user experience</li>
                <li>Maintain website security and prevent misuse</li>
                <li>Meet applicable legal or regulatory requirements</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                4. Sharing of Information
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                MANVYN does not sell or rent your personal information.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                We may share information with trusted service providers when
                reasonably necessary to operate our website, communicate with
                clients, provide services, or maintain our infrastructure.
                Such providers may include hosting, email, analytics, or other
                technology service providers.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                We may also disclose information where required by applicable
                law or where reasonably necessary to protect our rights,
                security, or property.
              </p>
            </section>

            {/* Cookies */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                5. Cookies and Analytics
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Our website may use cookies or similar technologies to improve
                functionality, understand website usage, and enhance the user
                experience.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                You can control or disable cookies through your browser
                settings. Disabling certain cookies may affect some website
                functionality.
              </p>
            </section>

            {/* Data Security */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                6. Data Security
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We take reasonable technical and organizational measures to
                protect information from unauthorized access, misuse,
                alteration, or disclosure.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                However, no method of transmitting or storing information
                electronically can be guaranteed to be completely secure.
              </p>
            </section>

            {/* Third Party Links */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                7. Third-Party Links
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Our website may contain links to third-party websites or
                services. MANVYN is not responsible for the privacy practices,
                content, or security of third-party websites.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                We recommend reviewing the privacy policies of those websites
                before providing them with personal information.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                8. Data Retention
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We retain information only for as long as reasonably necessary
                for the purposes described in this Privacy Policy, including
                responding to enquiries, providing services, maintaining
                business records, and complying with legal obligations.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                9. Your Rights
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Depending on applicable law, you may have rights regarding your
                personal information, including the ability to request access,
                correction, or deletion of information we hold about you.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                To make a privacy-related request, please contact us using the
                details provided below.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                10. Children's Privacy
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Our website and services are not specifically directed toward
                children. We do not knowingly collect personal information from
                children through our website.
              </p>
            </section>

            {/* Changes */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">
                11. Changes to This Privacy Policy
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We may update this Privacy Policy from time to time to reflect
                changes in our services, website, or applicable requirements.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Any updated version will be published on this page with a
                revised "Last updated" date.
              </p>
            </section>

            {/* Contact */}
            <section className="mt-12 rounded-2xl bg-slate-50 p-7 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                12. Contact Us
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                If you have any questions about this Privacy Policy or how we
                handle your information, you can contact us at:
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
  );
};

export default PrivacyPolicy;