import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Cloud } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                From Idea to Impact:
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Your Partner for Cloud, AI & Startup Software Development
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Leveraging deep expertise in Cloud Computing, AI, and Data Engineering with a focus on data modeling, 
                I partner with startups and businesses to build robust MVPs, scalable systems, and optimize critical workflows for growth. 
                My founder background ensures a strategic, business-driven approach to every technical solution.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Book a Strategy Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </div>

            {/* Quick Stats/Highlights */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Software Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Data Modeling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Cloud className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Cloud & AI</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/3258b639-3bab-4a12-bef5-307ef6ab21b0.png"
                alt="Alex Chen - Software Engineer & Startup Consultant"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;