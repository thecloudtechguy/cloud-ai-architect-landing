import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Shield, Zap, Globe, Star } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Average 40% salary increase for certified cloud AI architects"
  },
  {
    icon: Users,
    title: "Industry Recognition",
    description: "Join an elite community of certified cloud AI professionals"
  },
  {
    icon: Shield,
    title: "Enterprise Trust",
    description: "Recognized by Fortune 500 companies worldwide"
  },
  {
    icon: Zap,
    title: "Cutting-Edge Skills",
    description: "Master the latest AI/ML technologies in cloud environments"
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Open doors to opportunities with major cloud providers"
  },
  {
    icon: Star,
    title: "Expert Status",
    description: "Become a thought leader in cloud AI architecture"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-primary">CCASA</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with the most comprehensive cloud AI certification available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-muted-foreground">Certified Professionals</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Pass Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Partner Companies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Student Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;