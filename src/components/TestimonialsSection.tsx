import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Alex's combination of technical expertise and business acumen is exactly what our startup needed. He didn't just build our MVP – he helped us think strategically about scalability and growth. The data modeling foundation he created has been crucial as we've scaled to 10x our initial user base.",
      author: "Sarah Martinez",
      position: "CEO & Founder",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      quote: "Working with Alex was transformative for our AI initiative. His founder background means he understands the pressure of deadlines and budget constraints, while his technical depth ensured we built something truly robust. Our real-time analytics platform now processes millions of events daily.",
      author: "David Chen",
      position: "CTO",
      company: "DataVantage Corp",
      rating: 5
    },
    {
      quote: "Alex took our complex data engineering challenge and made it look effortless. His approach to data modeling and pipeline architecture has given us the foundation to scale our AI products confidently. Plus, his communication style makes complex technical concepts accessible to our entire team.",
      author: "Lisa Thompson",
      position: "VP of Engineering",
      company: "CloudScale Analytics",
      rating: 5
    },
    {
      quote: "As a non-technical founder, I was worried about making the right technology decisions. Alex bridged that gap perfectly – explaining technical tradeoffs in business terms and ensuring every architectural decision aligned with our growth strategy. Our platform launched on time and under budget.",
      author: "Michael Rodriguez",
      position: "Founder",
      company: "HealthTech Innovations",
      rating: 5
    },
    {
      quote: "Alex's workflow automation solution transformed our media production process. What used to take our team 8 hours now takes 90 minutes. His deep understanding of both the technical implementation and business impact made all the difference in achieving real ROI.",
      author: "Jennifer Park",
      position: "Operations Director",
      company: "Creative Media Solutions",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Clients Say About Working Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real feedback from founders, CTOs, and engineering leaders who have experienced 
            the strategic advantage of combining technical excellence with business insight.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="mt-auto">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;