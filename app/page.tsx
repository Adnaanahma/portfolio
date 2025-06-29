import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  PhoneIcon as WhatsApp,
  Database,
  Server,
  Code,
  Cpu,
  ArrowRight,
  Download,
} from "lucide-react"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"
import SkillBadge from "@/components/skill-badge"
import ExperienceItem from "@/components/experience-item"

export default function Home() {
  // Update this URL to your blob storage URL where you've uploaded your CV
  const cvUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hashim_Adnanahmad_CV.pdf"

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">Hashim Adnanahmad</Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/Adnaanahma" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hashim-adnanahmad-56aa49216"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:adnanhashim1212@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Backend .NET Developer</h1>
              <p className="text-xl text-muted-foreground">
                Building robust, scalable backend systems with C# and .NET technologies
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2011.47.25_46239168.jpg-1vHXIH61mz9lviV5MjPS5iR3CvpIK5.jpeg"
                  alt="Hashim Adnanahmad"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p>
                  I'm a passionate backend developer specializing in .NET technologies with a strong foundation in C#
                  and ASP.NET Core. My expertise lies in designing and implementing robust, scalable backend systems
                  that power modern web applications.
                </p>
                <p>
                  I excel at building RESTful APIs, implementing efficient database solutions, and ensuring high
                  performance and security in all my projects. I'm committed to writing clean, maintainable code and
                  following industry best practices.
                </p>
                <p>
                  I'm constantly expanding my knowledge and skills to stay current with the latest advancements in the
                  .NET ecosystem and backend development technologies.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold">Location:</span> Lagos Nigeria
                  </div>
                  <div>
                    <span className="font-semibold">Experience:</span> Backend Development
                  </div>
                  <div>
                    <span className="font-semibold">Education:</span> Botany
                  </div>
                  <div>
                    <span className="font-semibold">Languages:</span> English
                  </div>
                  <div>
                    <span className="font-semibold">Interests:</span> .NET Development, API Design, Database
                    Optimization
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
                <Button variant="default" className="flex items-center gap-2" asChild>
                     <a href="/Hashim_Adnanahmad_CV.pdf" download="Hashim_Adnanahmad_CV.pdf">
                      <Download className="h-4 w-4" />
                           Download CV
                  </a>
               </Button>
          </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 container">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <SkillBadge name="C#" />
                <SkillBadge name=".NET" />
                <SkillBadge name=".NET Core" />
                <SkillBadge name="Node.js" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="HTML/CSS" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <SkillBadge name="SQL Server" />
                <SkillBadge name="MSSQL" />
                <SkillBadge name="MySQL" />
                <SkillBadge name="PostgreSQL" />
                <SkillBadge name="MongoDB" />
                <SkillBadge name="Entity Framework" />
                <SkillBadge name="LINQ" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <SkillBadge name=".NET Core" />
                <SkillBadge name="ASP.NET" />
                <SkillBadge name="ASP.NET MVC" />
                <SkillBadge name="Web API" />
                <SkillBadge name="REST" />
                <SkillBadge name="Microservices" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  Tools & Others
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <SkillBadge name="Git" />
                <SkillBadge name="Docker" />
                <SkillBadge name="Azure" />
                <SkillBadge name="Workbench" />
                <SkillBadge name="Postman API" />
                <SkillBadge name="Swagger API" />
                <SkillBadge name="Multithreading" />
                <SkillBadge name="OOP" />
                <SkillBadge name="CI/CD" />
                <SkillBadge name="Visual Studio" />
                <SkillBadge name="VS Code" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Employee Management System"
                description="A comprehensive employee management system that handles employee registration, personnel management, leave requests and approvals. Developed following the standard Software Development Life Cycle (SDLC) methodology."
                technologies={["ASP.NET Core", "C#", "Entity Framework", "MySQL", "REST API", "SDLC"]}
                githubUrl="https://github.com/Adnaanahma/EmployeeManagement"
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Employee.jpg-7JrSJI91XpfjMm1PvCd5YfT6cGp00G.jpeg"
              />

              <ProjectCard
                title="Pedmonie .NET Backend"
                description="A robust backend system for the Pedmonie financial platform. Features include user authentication, transaction processing, account management, and secure API endpoints for mobile and web clients."
                technologies={[
                  "ASP.NET Core",
                  "C#",
                  "Entity Framework",
                  "SQL Server",
                  "JWT Authentication",
                  "RESTful API",
                ]}
                githubUrl="https://github.com/InternPulse/pedmonie-dotnet-backend"
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2023.24.21_cff1af20.jpg-9vp8pZy8rwWdQdu7FMUZdUXa39eoQO.jpeg"
              />

              <ProjectCard
                title="Paystack Integration"
                description="A comprehensive payment processing system built with .NET that integrates with Paystack API. Handles payment transactions, verifications, and refunds with a secure and user-friendly interface."
                technologies={["C#", "ASP.NET Core", "Paystack API", "Entity Framework", "SQL Server", "REST API"]}
                githubUrl="https://github.com/Adnaanahma/Paystack"
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paystack%20picture.jpg-EX12YnPos5SAc2aQ8z2CSGfIWu9k3F.jpeg"
              />

              <ProjectCard
                title="Library Management System"
                description="A full-featured library management solution that handles book cataloging, member management, borrowing/returning processes, and fine calculations. Includes reporting and analytics features."
                technologies={[".NET Core", "C#", "Entity Framework", "SQL Server", "LINQ", "MVC"]}
                githubUrl="https://github.com/Adnaanahma/LibrarySystem"
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Libray%20picture.jpg-ynP6c8XYF7dbSRzvloFNMdoH5xKVoY.jpeg"
              />

              <ProjectCard
                title="Savings Application"
                description="A financial application that helps users track savings goals, manage budgets, and analyze spending patterns. Features include automated savings plans, goal tracking, and financial reports."
                technologies={["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Identity", "REST API"]}
                githubUrl="https://github.com/Adnaanahma/Savings"
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/savings.jpg-aXip6u0fjWOPspyZj9QuDynvasqeaZ.jpeg"
              />

              <ProjectCard
                title="Email Service"
                description="A robust email service built with .NET that handles email templating, scheduling, and delivery tracking. Supports transactional emails, newsletters, and automated notifications with analytics."
                technologies={[".NET Core", "C#", "SMTP", "RabbitMQ", "Hangfire", "Template Engine"]}
                githubUrl="https://github.com/Adnaanahma/Email"
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Email%20picture.jpg-SXxlD4Y8y9gUB6dIMJxjt5zC32FNRR.jpeg"
              />
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com/Adnaanahma" className="flex items-center gap-2">
                  View More Projects on GitHub
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 container">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-6">
            <ExperienceItem
              title="Backend Developer"
              company="InternPulse"
              period="June 2024 - March 2025"
              description="Developing and maintaining backend systems and APIs for various applications. Implementing database designs, optimizing queries, and ensuring high performance of backend services."
              technologies={["ASP.NET Core", "C#", "MySQL Server", "Entity Framework", "REST API"]}
            />

            <ExperienceItem
              title="Freelance Software Developer"
              company="Self-employed"
              period="January 2024 - Present"
              description="Designing and developing custom software solutions for various clients. Building backend systems, APIs, and database solutions tailored to client requirements. Implementing best practices in software development and maintaining high-quality code standards."
              technologies={[".NET Core", "C#", "MySQL", "SQL Server", "REST API", "ASP.NET MVC"]}
            />

            <ExperienceItem
              title="IT Administration Office"
              company="Forestry Research Institute Of Nigeria Jericho Hill"
              period="February 2023 - January 2024"
              description="Managed IT infrastructure and systems for the institute. Provided technical support, maintained computer systems, and assisted with database management and network administration."
              technologies={[".NET", "SQL", "Network Administration", "System Maintenance", "Technical Support"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:adnanhashim1212@gmail.com" className="hover:text-primary transition-colors">
                      Gmail
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/hashim-adnanahmad-56aa49216"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/Adnaanahma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <WhatsApp className="h-5 w-5 text-primary" />
                    <a
                      href="https://wa.me/2348061456765"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </CardContent>
              </Card>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hashim Adnanahmad. All rights reserved.
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="https://github.com/Adnaanahma" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <Link href="https://wa.me/2348061456765" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <WhatsApp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/hashim-adnanahmad-56aa49216"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:adnanhashim1212@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
