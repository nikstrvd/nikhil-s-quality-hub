import { 
  ClipboardCheck, 
  Plug, 
  Bot, 
  Gauge, 
  Eye, 
  Users,
  Cloud,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Manual Testing",
    description: "Comprehensive manual testing including functional, regression, and exploratory testing.",
    icon: ClipboardCheck,
  },
  {
    title: "API Testing",
    description: "Thorough API testing for functionality, performance, and security validation.",
    icon: Plug,
  },
  {
    title: "Automation Testing",
    description: "Selenium, Playwright, and SpecFlow automation for efficient test execution.",
    icon: Bot,
  },
  {
    title: "Performance Testing",
    description: "Load and stress testing with JMeter to ensure application scalability.",
    icon: Gauge,
  },
  {
    title: "Accessibility Testing",
    description: "WCAG compliance testing to ensure inclusive user experiences.",
    icon: Eye,
  },
  {
    title: "Client-Specific QA",
    description: "Customized QA solutions tailored to specific business requirements.",
    icon: Users,
  },
  {
    title: "Cloud Hosting Setup",
    description: "Server setup and configuration on Namecheap, AWS EC2, and Lightsail.",
    icon: Cloud,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm font-medium text-primary mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            What I <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-3xl p-6 group hover:scale-105 transition-all duration-300 hover:shadow-glow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-14 h-14 gradient-button rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {service.description}
              </p>
              
              <Button variant="ghost" size="sm" className="text-primary p-0 h-auto font-medium group/btn">
                Learn More 
                <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
