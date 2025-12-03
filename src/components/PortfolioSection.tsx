import { ExternalLink, Building2, GraduationCap, Gem, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EnergiTranz Pte Ltd",
    location: "Singapore",
    icon: Building2,
    description: "Sustainability consultancy systems for energy transformation.",
    responsibilities: "End-to-end QA processes ensuring platform stability and reliability.",
    impact: "Improved system reliability and reduced production bugs by 40%.",
  },
  {
    title: "Equinet Academy",
    location: "Singapore", 
    icon: GraduationCap,
    description: "Training Management System (TMS) for digital learning experiences.",
    responsibilities: "Comprehensive testing of LMS features, user workflows, and integrations.",
    impact: "Enhanced digital learning experience for thousands of students.",
  },
  {
    title: "Mustafa Jewellery",
    location: "Singapore",
    icon: Gem,
    description: "Digital retail platform for premium jewellery shopping.",
    responsibilities: "Performance testing, UI/UX validation, and payment flow verification.",
    impact: "Flawless user experience resulting in increased online sales.",
  },
  {
    title: "Mailcow Email Server",
    location: "AWS EC2",
    icon: Mail,
    description: "Self-hosted complete email infrastructure deployment.",
    responsibilities: "Server setup, configuration, testing, and monitoring on AWS EC2.",
    impact: "Secure, reliable email system with 99.9% uptime.",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm font-medium text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-button rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <project.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm text-primary">{project.location}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Responsibilities</p>
                  <p className="text-sm text-muted-foreground">{project.responsibilities}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">Impact</p>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
