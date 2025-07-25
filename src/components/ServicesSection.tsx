import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Brain, 
  Workflow, 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  Zap,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Startup & Product Development",
      icon: Rocket,
      gradient: "from-primary to-primary-hover",
      services: [
        "MVP Definition & Strategy",
        "Prototype Specification & Technical Roadmapping",
        "Full-Stack Software Development",
        "Cloud Architecture & Implementation"
      ]
    },
    {
      title: "AI & Data Engineering",
      icon: Brain,
      gradient: "from-accent to-accent-hover",
      services: [
        "Data Modeling & Database Design",
        "Data Pipeline Development",
        "AI/Machine Learning Integration",
        "Scalable Data Infrastructure"
      ]
    },
    {
      title: "Workflow Optimization & Automation",
      icon: Workflow,
      gradient: "from-primary to-accent",
      services: [
        "Custom Process Automation",
        "Business Workflow Optimization",
        "Media Production Automation",
        "System Integration Solutions"
      ]
    }
  ];

  const detailServices = [
    {
      icon: Code,
      title: "Software Engineering Excellence",
      description: "From small features to enterprise systems, I build robust, scalable solutions that grow with your business."
    },
    {
      icon: Database,
      title: "Data Architecture Specialist", 
      description: "Design and implement data models that support AI applications and provide strategic business insights."
    },
    {
      icon: Cloud,
      title: "Cloud-Native Solutions",
      description: "Leverage modern cloud platforms to build resilient, cost-effective infrastructure that scales automatically."
    },
    {
      icon: Settings,
      title: "Technical Consulting",
      description: "Strategic guidance on technology choices, architecture decisions, and development roadmaps."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Strategic Services for Growth-Focused Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical solutions designed to accelerate your business goals, 
            from startup MVPs to enterprise-scale AI implementations.
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <CardHeader className="relative">
                <div className={`p-3 bg-gradient-to-br ${category.gradient} w-fit rounded-xl mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center gap-3 text-muted-foreground">
                      <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {detailServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Ideas into Impact?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how my technical expertise and founder experience can accelerate your business goals.
              </p>
              <Button variant="cta" size="lg" className="group">
                Schedule Your Strategy Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;