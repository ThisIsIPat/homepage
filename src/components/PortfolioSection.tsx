import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket, Brain, Database, Workflow } from "lucide-react";

const PortfolioSection = () => {
  const portfolioCategories = [
    {
      title: "Startup Prototypes, MVPs & Product Launches",
      icon: Rocket,
      projects: [
        {
          title: "FinTech MVP Platform",
          description: "Built a complete financial technology platform MVP with real-time trading, portfolio management, and AI-driven insights. Delivered from concept to launch in 12 weeks.",
          technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
          impact: "Secured $2M seed funding",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
        },
        {
          title: "Healthcare SaaS Solution",
          description: "Developed a HIPAA-compliant patient management system with telemedicine capabilities, reducing administrative overhead by 60%.",
          technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Docker"],
          impact: "10+ clinics deployed",
          imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
        }
      ]
    },
    {
      title: "Scalable Cloud & AI Solutions",
      icon: Brain,
      projects: [
        {
          title: "Enterprise AI Analytics Platform",
          description: "Architected a cloud-native AI platform processing 10TB+ daily data with real-time ML inference and automated insights generation.",
          technologies: ["Python", "TensorFlow", "Kubernetes", "GCP", "Apache Kafka"],
          impact: "40% faster decision making",
          imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
        },
        {
          title: "Multi-Tenant SaaS Infrastructure",
          description: "Built horizontally scalable SaaS architecture supporting 100K+ concurrent users with 99.99% uptime and auto-scaling capabilities.",
          technologies: ["Go", "Microservices", "Redis", "PostgreSQL", "AWS"],
          impact: "99.99% uptime achieved",
          imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
        }
      ]
    },
    {
      title: "Data Engineering & Modeling",
      icon: Database,
      projects: [
        {
          title: "Real-Time Data Pipeline",
          description: "Designed and implemented a real-time data processing pipeline handling 1M+ events per minute with sub-second latency for ML model serving.",
          technologies: ["Apache Spark", "Kafka", "Cassandra", "Python", "Airflow"],
          impact: "Sub-second latency",
          imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
        },
        {
          title: "Advanced Data Modeling Framework",
          description: "Created a sophisticated data modeling framework enabling rapid deployment of ML models with automated feature engineering and model versioning.",
          technologies: ["Python", "MLflow", "PostgreSQL", "Apache Airflow", "Docker"],
          impact: "50% faster model deployment",
          imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
        }
      ]
    },
    {
      title: "Workflow Automation",
      icon: Workflow,
      projects: [
        {
          title: "Media Production Automation",
          description: "Automated end-to-end video production workflow reducing manual processing time by 80% through intelligent transcoding and content optimization.",
          technologies: ["Python", "FFmpeg", "AWS Lambda", "S3", "CloudFront"],
          impact: "80% time reduction",
          imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
        }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Portfolio: Proven Results Across Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of strategic technical solutions that have driven measurable business impact, 
            from startup MVPs to enterprise-scale AI implementations.
          </p>
        </div>

        {portfolioCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {category.projects.map((project, projectIndex) => (
                <Card key={projectIndex} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="mb-4">
                      <Badge variant="secondary" className="bg-accent/10 text-accent font-semibold">
                        {project.impact}
                      </Badge>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to See Your Project Here?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can build something remarkable together. 
                Every great solution starts with a strategic conversation.
              </p>
              <Button variant="cta" size="lg">
                Start Your Project Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;