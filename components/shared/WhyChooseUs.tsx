import {
  ShieldCheck,
  House,
  CreditCard,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: House,
    title: "Verified Properties",
    description:
      "Browse a wide range of verified rental properties with accurate information and high-quality images.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Landlords",
    description:
      "Every landlord is verified to ensure a secure and trustworthy rental experience.",
  },
  {
    icon: CreditCard,
    title: "Secure Online Payment",
    description:
      "Make rental payments safely through our secure online payment system with complete transparency.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our support team is always available to assist you with any rental-related questions or issues.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Your Trusted House Rental Partner
          </h2>

          <p className="mt-4 text-gray-600">
            We make renting a home simple, secure, and hassle-free by
            connecting tenants with trusted landlords through a reliable
            platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon
                    size={32}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;