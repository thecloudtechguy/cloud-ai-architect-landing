import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, DollarSign, Users } from "lucide-react";
import certificationBadge from "@/assets/certification-badge.jpg";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <img 
              src={certificationBadge} 
              alt="CCASA Certification Badge" 
              className="w-24 h-24 rounded-full shadow-large"
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-background">
            Transform Your Career
            <br />
            <span className="text-background/90">Starting Today</span>
          </h2>

          <p className="text-xl text-background/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the elite ranks of certified cloud AI solutions architects. 
            Limited seats available for our next cohort.
          </p>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border border-background/20 bg-background/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-background mb-4">Early Bird Special</h3>
                <div className="text-4xl font-bold text-background mb-2">
                  $2,499
                  <span className="text-lg text-background/70 line-through ml-2">$2,999</span>
                </div>
                <p className="text-background/80 mb-6">Save $500 - Limited Time</p>
                <ul className="space-y-2 text-sm text-background/90 mb-6">
                  <li>✓ Complete 28-week program</li>
                  <li>✓ Expert instructor access</li>
                  <li>✓ Hands-on projects</li>
                  <li>✓ Career placement support</li>
                </ul>
                <Button 
                  size="lg" 
                  className="w-full bg-background text-foreground hover:bg-background/90 shadow-medium"
                >
                  Enroll Now - Early Bird
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-background/20 bg-background/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-background mb-4">Standard Enrollment</h3>
                <div className="text-4xl font-bold text-background mb-2">$2,999</div>
                <p className="text-background/80 mb-6">Full Program Access</p>
                <ul className="space-y-2 text-sm text-background/90 mb-6">
                  <li>✓ Complete 28-week program</li>
                  <li>✓ Expert instructor access</li>
                  <li>✓ Hands-on projects</li>
                  <li>✓ Career placement support</li>
                </ul>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-background/30 text-background hover:bg-background/20"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Key details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 text-background/90">
              <Calendar className="h-6 w-6" />
              <span className="font-medium">Starts January 15, 2024</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-background/90">
              <Users className="h-6 w-6" />
              <span className="font-medium">Only 50 seats available</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-background/90">
              <DollarSign className="h-6 w-6" />
              <span className="font-medium">Financing options available</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-background/80 mb-6">
              Don't miss this opportunity to become a certified cloud AI solutions architect.
              <br />
              Early bird pricing ends December 15, 2023.
            </p>
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 shadow-large px-8"
            >
              Secure Your Seat Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="w-32 h-32 rounded-full bg-background/20 animate-pulse" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="w-24 h-24 rounded-full bg-background/20 animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default CTASection;