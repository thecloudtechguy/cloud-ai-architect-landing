import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, GraduationCap, Award, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply & Enroll",
    description: "Submit your application with your cloud experience and career goals.",
    details: ["Prerequisites review", "Technical assessment", "Interview process"]
  },
  {
    icon: GraduationCap,
    title: "Complete Training",
    description: "Engage in our comprehensive 28-week program with expert instructors.",
    details: ["Live virtual sessions", "Hands-on projects", "Peer collaboration"]
  },
  {
    icon: Award,
    title: "Pass Certification",
    description: "Take the comprehensive exam and earn your CCASA certification.",
    details: ["Practice exams", "Final assessment", "Industry validation"]
  },
  {
    icon: CheckCircle,
    title: "Launch Career",
    description: "Join our alumni network and access exclusive job opportunities.",
    details: ["Career placement", "Alumni network", "Ongoing support"]
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Your Path to <span className="text-primary">Certification</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process is designed to take you from application to career advancement in just 28 weeks.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-20 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium group">
                  <CardContent className="p-8 text-center">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                    {/* Details */}
                    <ul className="space-y-2 text-sm">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center justify-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-6 text-primary/30">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Requirements section */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-secondary">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Prerequisites</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">3+ years cloud computing experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Basic understanding of machine learning concepts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Programming experience (Python, Java, or .NET)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Bachelor's degree or equivalent experience</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center lg:text-right">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Begin?</h3>
                  <p className="text-muted-foreground mb-6">
                    Applications are now open for our next cohort starting January 15, 2024.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-medium">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;