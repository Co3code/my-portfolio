import React from "react";
import { Check, Zap, Rocket, Crown } from "lucide-react";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "5,000",
      description: "Perfect for personal websites or simple landing pages.",
      features: [
        "1-page responsive website",
        "Modern UI design",
        "Mobile-friendly layout",
        "Contact form integration",
        "Basic SEO setup",
      ],
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      highlight: false,
    },
    {
      name: "Pro",
      price: "15,000",
      description: "Ideal for small businesses needing a professional website.",
      features: [
        "3–5 page responsive website",
        "Modern UI with animations",
        "Contact form with email integration",
        "Basic SEO optimization",
        "Deployment to hosting",
      ],
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
      highlight: true,
    },
    {
      name: "Premium",
      price: "30,000",
      description: "Best for businesses that need a full web application.",
      features: [
        "Full website or web application",
        "Login & authentication system",
        "Database integration",
        "Admin dashboard",
        "1 month technical support",
      ],
      icon: <Crown className="w-6 h-6 text-amber-500" />,
      highlight: false,
    },
  ];

  const handleStartProject = (planName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Update URL without reloading
      const url = new URL(window.location.href);
      url.searchParams.set("plan", planName);
      window.history.replaceState({}, "", url.toString());

      // Notify other components the URL changed
      window.dispatchEvent(new Event("popstate"));

      // Scroll smoothly
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Pricing <span className="italic font-normal text-gray-400 text-3xl md:text-4xl">Plans</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Transparent pricing for high-end Web & App Development and Content Creation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-white ring-4 ring-purple-500/10 shadow-2xl scale-105 z-10"
                  : "bg-white/60 hover:bg-white shadow-xl border border-gray-100"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">₱{plan.price}</span>
                <span className="text-gray-400 font-medium"> /project</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 text-sm">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleStartProject(plan.name)}
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-200 ${
                  plan.highlight
                    ? "bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Start Project
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-12">
          *Prices may vary depending on project complexity and additional features.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
