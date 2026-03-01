import { motion } from "motion/react";
import { Download, Smartphone, Shield, Zap, Globe } from "lucide-react";
import { useEffect } from "react";

export default function AppPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold tracking-wider uppercase mb-6">
              Featured Application
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              NextGen <br />
              <span className="text-zinc-400">Mobile Solution.</span>
            </h1>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl leading-relaxed">
              A powerful, intuitive mobile application designed to streamline your daily workflow and boost
              productivity. Built with the latest technologies for a seamless experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all group"
              >
                <Download className="mr-2" size={20} />
                Download APK
                {/* TODO: Paste GitHub Release APK link here */}
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-zinc-50 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[9/16] max-w-[350px] mx-auto bg-zinc-100 rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden"
          >
            <img
              src="https://picsum.photos/seed/app/1080/1920"
              alt="App Screenshot"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <Smartphone />, title: "Responsive", desc: "Optimized for all screen sizes and devices." },
            { icon: <Shield />, title: "Secure", desc: "Advanced encryption to keep your data safe." },
            { icon: <Zap />, title: "Fast", desc: "Lightning-quick performance and smooth animations." },
            { icon: <Globe />, title: "Global", desc: "Multi-language support for users worldwide." },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-3xl card-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-2xl text-zinc-900 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-50 rounded-[3rem] p-12 md:p-20"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-8">Why Choose NextGen?</h2>
            <div className="space-y-6 text-lg text-zinc-500 leading-relaxed">
              <p>
                NextGen is more than just an app; it's a comprehensive solution for modern challenges. We've spent
                countless hours researching user needs to create an interface that is both powerful and incredibly easy
                to use.
              </p>
              <p>
                Whether you're a professional looking to optimize your schedule or a student managing multiple projects,
                NextGen provides the tools you need to succeed. Our cloud-sync technology ensures that your data is
                always up-to-date across all your devices.
              </p>
              <p>
                Join thousands of satisfied users and experience the future of mobile productivity today. Download the
                APK and get started in seconds.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
