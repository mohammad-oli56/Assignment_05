import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl">
          <div className="grid items-center gap-10 px-8 py-14 lg:grid-cols-2 lg:px-16">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                <Building2 size={18} />
                Find Your Perfect Home
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Ready to Find Your
                <br />
                Dream Rental Home?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Explore verified rental properties, connect with trusted
                landlords, and complete secure online payments—all in one
                place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/property"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:scale-105 hover:bg-gray-100"
                >
                  Browse Properties
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/register"
                  className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="hidden justify-center lg:flex">
              <div className="flex h-64 w-64 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <Building2 className="h-28 w-28 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;