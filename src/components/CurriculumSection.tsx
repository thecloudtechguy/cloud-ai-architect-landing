import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, BookOpen } from "lucide-react";

const modules = [
  {
    title: "Cloud Foundations & AI Fundamentals",
    duration: "4 weeks",
    topics: [
      "Multi-cloud architecture principles",
      "AI/ML service landscapes",
      "Cloud-native AI workflows",
      "Data pipeline foundations"
    ]
  },
  {
    title: "AI Service Integration",
    duration: "6 weeks", 
    topics: [
      "Cognitive services implementation",
      "Machine learning platforms",
      "Natural language processing",
      "Computer vision in cloud"
    ]
  },
  {
    title: "Scalable ML Operations",
    duration: "5 weeks",
    topics: [
      "MLOps best practices",
      "Automated ML pipelines",
      "Model deployment strategies",
      "Performance monitoring"
    ]
  },
  {
    title: "Security & Governance",
    duration: "3 weeks",
    topics: [
      "AI ethics and compliance",
      "Data privacy frameworks",
      "Secure AI architectures",
      "Risk management"
    ]
  },
  {
    title: "Advanced Solutions Architecture",
    duration: "6 weeks",
    topics: [
      "Enterprise AI solutions",
      "Cost optimization strategies",
      "Hybrid cloud AI",
      "Edge computing integration"
    ]
  },
  {
    title: "Capstone Project",
    duration: "4 weeks",
    topics: [
      "Real-world architecture design",
      "Implementation planning",
      "Stakeholder presentation",
      "Peer review process"
    ]
  }
];

const CurriculumSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Master cloud AI architecture through our comprehensive 28-week program designed by industry experts.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              28 Weeks Total
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              6 Core Modules
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Hands-on Projects
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-medium">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 text-foreground">{module.title}</CardTitle>
                    <Badge variant="outline" className="text-primary border-primary/20">
                      {module.duration}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-primary/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block border-primary/20 bg-gradient-secondary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Transform Your Career?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join the next cohort and become a certified cloud AI solutions architect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Next Cohort:</strong> January 15, 2024
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Early Bird:</strong> Save $500
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;