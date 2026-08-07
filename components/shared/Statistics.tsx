import {
  Building2,
  Users,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "500+",
    title: "Properties Listed",
    description: "Verified apartments, houses & flats",
  },
  {
    icon: Users,
    value: "2,500+",
    title: "Happy Tenants",
    description: "Successfully rented their dream home",
  },
  {
    icon: BadgeCheck,
    value: "300+",
    title: "Trusted Landlords",
    description: "Verified property owners",
  },
  {
    icon: TrendingUp,
    value: "99%",
    title: "Success Rate",
    description: "Successful rental requests",
  },
];

const Statistics = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
            Our Achievements
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Trusted by Thousands of Users
          </h2>

          <p className="mt-4 text-blue-100">
            We connect tenants and landlords through a secure,
            reliable, and modern rental platform.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <Icon
                    size={32}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-lg font-semibold text-white">
                  {item.title}
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;