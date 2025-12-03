import { 
  TestTube, 
  Code, 
  Gauge, 
  Wrench, 
  Monitor,
  Cloud
} from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Testing Methodologies",
    icon: TestTube,
    skills: [
      "Manual Testing (Black Box, White Box)",
      "Regression Testing",
      "Smoke Testing",
      "STLC",
      "Verification & Validation",
    ],
  },
  {
    title: "Automation",
    icon: Code,
    skills: [
      "Selenium Java (WebDriver)",
      "SpecFlow, MS Test, Gherkin",
      "Playwright (Python & Pytest)",
    ],
  },
  {
    title: "API & Performance",
    icon: Gauge,
    skills: [
      "API Functionality & Performance Testing",
      "POSTMAN",
      "JMeter",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["JIRA", "NetSuite", "Salesforce", "Active Collab"],
  },
  {
    title: "UI & Accessibility",
    icon: Monitor,
    skills: [
      "UI Testing",
      "Accessibility Testing",
      "Compatibility Testing",
    ],
  },
  {
    title: "Cloud & Hosting",
    icon: Cloud,
    skills: ["Namecheap", "AWS EC2", "Lightsail"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm font-medium text-primary mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-card rounded-3xl p-6 hover:scale-105 transition-transform duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 gradient-button rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
