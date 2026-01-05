import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const services = [
  {
    title: "Manual Testing",
    description: "Comprehensive manual testing including functional, regression, and exploratory testing.",
    icon: ClipboardCheck,
    fullContent: {
      overview: "I provide thorough manual testing services to ensure your application meets all functional requirements and delivers a seamless user experience.",
      features: [
        "Functional Testing - Verify all features work as intended",
        "Regression Testing - Ensure new changes don't break existing functionality",
        "Exploratory Testing - Discover edge cases and unexpected behaviors",
        "Smoke & Sanity Testing - Quick validation of critical functionalities",
        "User Acceptance Testing (UAT) - Validate against business requirements"
      ],
      tools: ["JIRA", "TestRail", "Zephyr", "Azure DevOps", "Trello"]
    }
  },
  {
    title: "API Testing",
    description: "Thorough API testing for functionality, performance, and security validation.",
    icon: Plug,
    fullContent: {
      overview: "Comprehensive API testing services to validate your backend services are robust, secure, and performant.",
      features: [
        "REST & SOAP API Testing - Complete endpoint validation",
        "Request/Response Validation - Verify data integrity",
        "Authentication & Authorization Testing - Security compliance",
        "Error Handling Verification - Graceful failure scenarios",
        "API Contract Testing - Schema validation"
      ],
      tools: ["Postman", "REST Assured", "SoapUI", "Swagger", "Newman"]
    }
  },
  {
    title: "Automation Testing",
    description: "Selenium, Playwright, and SpecFlow automation for efficient test execution.",
    icon: Bot,
    fullContent: {
      overview: "Build robust automation frameworks that reduce testing time and increase coverage for continuous integration pipelines.",
      features: [
        "Web UI Automation - Cross-browser testing with Selenium & Playwright",
        "BDD Framework - SpecFlow/Cucumber for behavior-driven tests",
        "Data-Driven Testing - Parameterized test execution",
        "CI/CD Integration - Jenkins, Azure DevOps, GitHub Actions",
        "Parallel Execution - Faster test runs with grid setup"
      ],
      tools: ["Selenium WebDriver", "Playwright", "SpecFlow", "NUnit", "TestNG"]
    }
  },
  {
    title: "Performance Testing",
    description: "Load and stress testing with JMeter to ensure application scalability.",
    icon: Gauge,
    fullContent: {
      overview: "Identify performance bottlenecks and ensure your application can handle expected user loads and traffic spikes.",
      features: [
        "Load Testing - Simulate expected user traffic",
        "Stress Testing - Find breaking points under extreme load",
        "Endurance Testing - Long-duration stability testing",
        "Spike Testing - Handle sudden traffic surges",
        "Performance Baseline & Benchmarking - Establish metrics"
      ],
      tools: ["Apache JMeter", "Gatling", "LoadRunner", "k6", "BlazeMeter"]
    }
  },
  {
    title: "Accessibility Testing",
    description: "WCAG compliance testing to ensure inclusive user experiences.",
    icon: Eye,
    fullContent: {
      overview: "Ensure your application is accessible to all users, including those with disabilities, meeting WCAG 2.1 guidelines.",
      features: [
        "WCAG 2.1 Compliance Audit - AA/AAA level validation",
        "Screen Reader Testing - NVDA, JAWS, VoiceOver compatibility",
        "Keyboard Navigation Testing - Full keyboard accessibility",
        "Color Contrast Analysis - Visual accessibility checks",
        "ARIA Implementation Review - Proper semantic markup"
      ],
      tools: ["WAVE", "Axe DevTools", "Lighthouse", "NVDA", "Color Contrast Analyzer"]
    }
  },
  {
    title: "Client-Specific QA",
    description: "Customized QA solutions tailored to specific business requirements.",
    icon: Users,
    fullContent: {
      overview: "Tailored QA strategies designed to meet your unique business needs, industry standards, and project requirements.",
      features: [
        "Custom Test Strategy - Aligned with business goals",
        "Domain-Specific Testing - Healthcare, Finance, E-commerce",
        "Compliance Testing - HIPAA, GDPR, PCI-DSS",
        "Quality Metrics & Reporting - Detailed insights and KPIs",
        "Process Optimization - Improve existing QA workflows"
      ],
      tools: ["Custom Frameworks", "Industry-Specific Tools", "Compliance Validators"]
    }
  },
  {
    title: "Cloud Hosting Setup",
    description: "Server setup and configuration on Namecheap, AWS EC2, and Lightsail.",
    icon: Cloud,
    fullContent: {
      overview: "Complete cloud infrastructure setup and configuration to host your applications with optimal performance and security.",
      features: [
        "Server Provisioning - AWS EC2, Lightsail, Namecheap VPS",
        "Domain & SSL Configuration - Secure HTTPS setup",
        "Database Setup - MySQL, PostgreSQL, MongoDB",
        "CI/CD Pipeline Setup - Automated deployments",
        "Monitoring & Backup - Uptime monitoring and data protection"
      ],
      tools: ["AWS", "Namecheap", "cPanel", "Docker", "Nginx/Apache"]
    }
  },
];

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary p-0 h-auto font-medium group/btn"
                onClick={() => setSelectedService(service)}
              >
                Learn More 
                <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent 
          className="max-w-lg max-h-[80vh] overflow-y-auto"
          onPointerDownOutside={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
        >
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 gradient-button rounded-xl flex items-center justify-center">
                    <selectedService.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <DialogTitle className="text-xl">{selectedService.title}</DialogTitle>
                </div>
                <DialogDescription className="text-left">
                  {selectedService.fullContent.overview}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">What's Included</h4>
                  <ul className="space-y-2">
                    {selectedService.fullContent.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.fullContent.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
