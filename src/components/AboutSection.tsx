import { Card, CardContent } from "@/components/ui/card";
import { Building2, Code2, Database, Users, Workflow, Play } from "lucide-react";

const AboutSection = () => {
  const expertise = [
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Full-stack development for both big and small use cases, including robust system design and rapid MVP development."
    },
    {
      icon: Database,
      title: "Data Engineering for AI",
      description: "Specializing in scalable data infrastructure and data modeling for intelligent applications."
    },
    {
      icon: Building2,
      title: "Startup Consultation",
      description: "Guiding clients from concept to prototype specs with strategic technical roadmapping."
    },
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "Custom automation solutions for business processes, including specialized media production workflows."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Where Technical Excellence Meets Business Strategy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a seasoned Software Engineer and former founder, I bring a unique understanding of both cutting-edge technology 
              and real-world business constraints. My experience building and scaling a company provides invaluable insight into 
              startup needs, agile development practices, and the strategic decisions that drive growth.
            </p>
          </div>

          {/* Founder Experience Highlight */}
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Founder Experience: Your Strategic Advantage
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Having founded and grown a technology company, I understand the journey from ideation to market success. 
                    This experience informs every technical decision I make, ensuring solutions are not just well-engineered, 
                    but strategically aligned with business goals and growth objectives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {expertise.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Media Production Note */}
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Play className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Versatile Technical Background
                  </h3>
                  <p className="text-muted-foreground">
                    I also possess practical understanding of media production, enabling me to optimize workflows for 
                    audio/video creation and streaming when relevant to a project. This versatility allows me to 
                    deliver comprehensive solutions across various technical domains.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;