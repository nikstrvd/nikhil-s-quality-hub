import { GraduationCap, Briefcase, Award } from "lucide-react";

export const AboutSection = () => {
  const experiences = [
    {
      title: "Quality Assurance",
      company: "2Stallions Digital Marketing Agency",
      period: "August 2019 – Present",
      current: true,
    },
    {
      title: "Quality Assurance",
      company: "Priya Sharma Software Pvt. Ltd.",
      period: "March 2011 – July 2019",
      current: false,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm font-medium text-primary mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get to Know <span className="gradient-text">Me Better</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Professional Bio
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Test Analyst (Quality Assurance) with over 10 years of experience
                in API Manual Testing. Proficient in Manual & API testing. Known
                for designing and executing comprehensive test plans resulting in
                measurable improvements in product quality.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-button rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">TY BCA</p>
                  <p className="text-sm text-muted-foreground">Gujarat University — 2008</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Experience Timeline
            </h3>
            
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16">
                  <div className={`absolute left-4 w-5 h-5 rounded-full border-2 ${
                    exp.current 
                      ? "bg-primary border-primary animate-pulse-glow" 
                      : "bg-card border-muted-foreground"
                  }`} />
                  
                  <div className="bg-secondary/50 rounded-2xl p-5 hover:bg-secondary/80 transition-colors">
                    {exp.current && (
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-md mb-2">
                        Current
                      </span>
                    )}
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
