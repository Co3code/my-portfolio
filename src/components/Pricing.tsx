import React from "react";
import { motion } from "motion/react";
import { Zap, Rocket, Crown, Check } from "lucide-react";

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
      icon: <Zap className="w-5 h-5 text-[#f0ede6]/50" />,
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
      icon: <Rocket className="w-5 h-5 text-[rgba(180,160,255,0.8)]" />,
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
      icon: <Crown className="w-5 h-5 text-[#f0ede6]/50" />,
      highlight: false,
    },
  ];

  const handleStartProject = (planName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const url = new URL(window.location.href);
      url.searchParams.set("plan", planName);
      window.history.replaceState({}, "", url.toString());
      window.dispatchEvent(new Event("popstate"));
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative py-28 bg-[#0a0a0f] overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(120,90,255,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,100,80,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tight text-[#f0ede6] mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Pricing{" "}
            <em className="italic text-[#f0ede6]/30" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Plans
            </em>
          </h2>
          <p className="text-[0.95rem] text-[#f0ede6]/40 max-w-lg mx-auto leading-relaxed">
            Transparent pricing for high-end Web & App Development and Content Creation services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-[20px] p-7 border transition-all duration-300 hover:-translate-y-1.5 ${
                plan.highlight
                  ? "bg-[rgba(120,90,255,0.07)] border-[rgba(120,90,255,0.25)] scale-[1.03] z-10"
                  : "bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.05] hover:border-white/[0.12]"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* Most Popular badge */}
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[rgba(120,90,255,0.9)] text-[#f0ede6] text-[9px] font-semibold tracking-[0.2em] uppercase py-1 px-4 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center mb-5">
                {plan.icon}
              </div>

              {/* Name + Desc */}
              <h3
                className="text-[1.5rem] text-[#f0ede6] mb-1.5"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {plan.name}
              </h3>
              <p className="text-[0.82rem] text-[#f0ede6]/35 leading-relaxed mb-5">{plan.description}</p>

              {/* Price */}
              <div className="mb-5">
                <span
                  className="text-[2.2rem] text-[#f0ede6] tracking-tight"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  ₱{plan.price}
                </span>
                <span className="text-[0.8rem] text-[#f0ede6]/30 ml-1">/project</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/[0.06] mb-5" />

              {/* Features */}
              <ul className="space-y-3 mb-7">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[0.82rem] text-[#f0ede6]/50">
                    <span className="w-4 h-4 rounded-full bg-[rgba(74,222,128,0.12)] border border-[rgba(74,222,128,0.25)] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2 h-2 text-green-400" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleStartProject(plan.name)}
                className={`w-full py-3 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-250 ${
                  plan.highlight
                    ? "bg-[#f0ede6] text-[#0a0a0f] hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(240,237,230,0.12)]"
                    : "bg-white/[0.06] text-[#f0ede6]/60 border border-white/[0.08] hover:bg-white/[0.10] hover:text-[#f0ede6] hover:border-white/[0.15]"
                }`}
              >
                Start Project
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-[0.75rem] text-[#f0ede6]/20 tracking-wide mt-12">
          * Prices may vary depending on project complexity and additional features.
        </p>
      </div>
    </section>
  );
};

export default Pricing;