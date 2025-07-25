import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Calendar, MessageSquare, Rocket, Target } from "lucide-react";

const BookingSection = () => {
  const processSteps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Strategic Call",
      description: "We discuss your vision, challenges, and technical requirements in a focused 30-minute consultation."
    },
    {
      number: "2", 
      icon: Target,
      title: "Solution & Proposal",
      description: "I provide a detailed technical roadmap, timeline, and transparent pricing tailored to your specific needs."
    },
    {
      number: "3",
      icon: Rocket,
      title: "Build & Iterate",
      description: "Agile development with regular check-ins, ensuring we stay aligned with your business objectives throughout."
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Launch & Optimize",
      description: "Successful deployment with ongoing support and optimization to ensure your solution scales with your growth."
    }
  ];

  const callBenefits = [
    "Clear technical roadmap aligned with business goals",
    "Transparent timeline and pricing structure",
    "Strategic insights from founder experience",
    "Risk assessment and mitigation strategies",
    "Technology recommendations for optimal ROI"
  ];

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Turn Your Vision into Reality?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Let's start with a strategic conversation about your technical challenges and growth objectives. 
              No obligation – just focused insights that can immediately add value to your planning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Process & Benefits */}
            <div className="space-y-8">
              {/* How It Works */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">How We Work Together</h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                            Step {step.number}
                          </span>
                          <h4 className="font-semibold text-foreground">{step.title}</h4>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call Benefits */}
              <Card className="bg-secondary/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">What You'll Get From Our Call:</h4>
                  <ul className="space-y-3">
                    {callBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking CTA */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Book Your Strategy Call
                    </h3>
                    <p className="text-muted-foreground">
                      30-minute focused consultation to discuss your technical needs and growth strategy.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full text-lg group"
                      onClick={() => window.open("https://calendly.com/alexchen-strategy", "_blank")}
                    >
                      Schedule Now - It's Free
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <div className="text-sm text-muted-foreground">
                      Usually responds within 2 hours
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="font-semibold text-primary">30 min</div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Free</div>
                        <div className="text-xs text-muted-foreground">No Cost</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Alternative */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-3">Prefer Email?</h4>
                  <p className="text-muted-foreground mb-4">
                    Send me a brief description of your project and I'll respond with initial thoughts and availability.
                  </p>
                  <Button variant="outline" className="w-full">
                    alex@alexchen.dev
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;