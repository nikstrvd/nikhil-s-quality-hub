import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />

      {/* Floating icons */}
      <div className="absolute top-32 right-[15%] floating-animation hidden lg:block">
        <div className="glass-card p-4 rounded-2xl">
          <Github className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 right-[8%] floating-animation-delayed hidden lg:block">
        <div className="glass-card p-4 rounded-2xl">
          <Mail className="h-8 w-8 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-32 right-[12%] floating-animation hidden lg:block">
        <div className="glass-card p-4 rounded-2xl">
          <Linkedin className="h-8 w-8 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 glass-card rounded-full text-sm font-medium text-primary mb-4">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up animation-delay-100">
              Hi, I'm{" "}
              <span className="gradient-text">Nikhil Trivedi</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground animate-fade-up animation-delay-200">
              Senior Test Analyst (Quality Assurance)
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-up animation-delay-300">
              10+ years of experience in Manual & API Testing with a proven
              track record in delivering reliable, high-quality software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <Button
                size="lg"
                className="gradient-button text-primary-foreground font-semibold px-8 hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="#portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-card border-primary/30 hover:bg-primary/10"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4 animate-fade-up animation-delay-500">
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a href="mailto:contact@nikhiltrivedi.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in animation-delay-200">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-30 scale-110" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Nikhil Trivedi - Senior Test Analyst"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info card */}
              <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 glass-card rounded-2xl p-4 max-w-[200px]">
                <p className="text-sm font-semibold text-primary">— QA Expert</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Specialized in Manual & API Testing with 10+ years of experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
