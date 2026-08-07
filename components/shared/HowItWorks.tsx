import {
  Search,
  Send,
  BadgeCheck,
  CreditCard,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Property",
    description:
      "Browse verified rental properties and find the one that matches your budget and location.",
  },
  {
    icon: Send,
    title: "Send Request",
    description:
      "Submit a rental request to the landlord with just a few clicks through our platform.",
  },
  {
    icon: BadgeCheck,
    title: "Get Approval",
    description:
      "Once the landlord reviews and approves your request, you're ready for the next step.",
  },
  {
    icon: CreditCard,
    title: "Pay & Move In",
    description:
      "Complete your payment securely online and move into your new home without hassle.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Simple Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            How It Works
          </h2>

          <p className="mt-4 text-gray-600">
            Renting your next home is quick and easy. Follow these
            simple steps to complete the process securely.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;