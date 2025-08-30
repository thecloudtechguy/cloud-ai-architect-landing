import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Cloud, Brain } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Cloud AI Architecture" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-soft">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Industry-Leading Certification</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Certified Cloud AI
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Solutions Architect
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the future of cloud computing with AI integration. 
            Advance your career with the premier certification for cloud architects.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-foreground">
              <Cloud className="h-5 w-5 text-primary" />
              <span className="font-medium">Multi-Cloud Expertise</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Brain className="h-5 w-5 text-primary" />
              <span className="font-medium">AI/ML Integration</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-medium">Industry Recognition</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-medium">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 text-foreground hover:bg-accent">
              View Curriculum
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="w-20 h-20 rounded-full bg-gradient-primary animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30">
        <div className="w-16 h-16 rounded-full bg-gradient-primary animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default HeroSection;