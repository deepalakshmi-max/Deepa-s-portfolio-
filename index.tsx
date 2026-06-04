import { createFileRoute } from "@tanstack/react-router";
import profileImg from "@/assets/profile-portrait.jpeg";
import awardImg from "@/assets/gallery/award-ceremony.jpeg";
import speakersImg from "@/assets/gallery/speakers-forum.jpeg";
import speakersImg2 from "@/assets/gallery/speakers-forum-2.jpeg";
import resumeImg from "@/assets/resume-image.jpeg";
import certAccenture from "@/assets/certs/accenture.png.asset.json";
import certNptel from "@/assets/certs/nptel.png.asset.json";
import certAcquiring from "@/assets/certs/acquiring.png.asset.json";
import certDigital101 from "@/assets/certs/digital101.png.asset.json";
import certCloud from "@/assets/certs/cloud.png.asset.json";
import certIvenor from "@/assets/certs/ivenor.png.asset.json";
import certPython from "@/assets/certs/python.png.asset.json";
import { Mail, Phone, MapPin, Download, GraduationCap, Award, Code, Languages, Sparkles, ExternalLink, Linkedin, Github, MessageCircle } from "lucide-react";

const SOCIALS = {
  github: "https://github.com/deepalakshmi-max",
  linkedin: "https://linkedin.com/in/deepalakshmi24",
  email: "deepalakshmim00@gmail.com",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Deepalakshmi M — ECE Student Portfolio" },
      { name: "description", content: "Portfolio of Deepalakshmi M, B.E. Electronics and Communication Engineering student at Sona College of Technology." },
    ],
  }),
});

const certifications = [
  { title: "Design Thinking — A Primer", issuer: "NPTEL · IIT Madras — Elite", image: certNptel.url },
  { title: "Digital 101 — Gold", issuer: "NASSCOM FutureSkills Prime", image: certDigital101.url },
  { title: "Data Processing & Visualisation", issuer: "Accenture × NASSCOM (AI ASCEND)", image: certAccenture.url },
  { title: "Acquiring Data", issuer: "NASSCOM IT-ITeS SSC", image: certAcquiring.url },
  { title: "Cloud Computing", issuer: "Infosys Springboard", image: certCloud.url },
  { title: "Python Programming Foundation", issuer: "Infosys Springboard — TechA", image: certPython.url },
  { title: "I'VENOR '25 — Idea Presentation", issuer: "Sona College of Technology · ECE", image: certIvenor.url },
];

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`py-20 px-6 md:px-12 max-w-6xl mx-auto ${className}`}>{children}</section>;
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-sm tracking-[0.3em] uppercase text-primary/70 mb-3">{kicker}</p>
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gradient">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-warm" />
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="#home" className="font-serif text-xl font-semibold text-gradient">Deepalakshmi M</a>
          <div className="hidden md:flex gap-8 text-sm">
            {["About","Education","Skills","Gallery","Certifications","Resume","Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm opacity-[0.08]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary/70 mb-4">Portfolio · 2026</p>
            <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Deepalakshmi</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              A dedicated B.E. <strong className="text-foreground">Electronics &amp; Communication Engineering</strong> student
              at Sona College of Technology — curious, quick-learning, and excited to build a career in tech.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-elegant hover:scale-105 transition-transform">Get in touch</a>
              <a href={resumeImg} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-primary/30 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-2">
                <Download className="w-4 h-4" /> View Resume
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Github className="w-5 h-5" /></a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="absolute -inset-6 bg-gradient-warm rounded-full blur-2xl opacity-40" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-elegant ring-2 ring-primary/20">
              <img src={profileImg} alt="Deepalakshmi M" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about">
        <SectionTitle kicker="About me" title="A quick introduction" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>I'm a dedicated and quick-learning engineering student with basic technical and problem-solving skills. I'm looking for an opportunity to start my career in a growth-oriented organization and enhance my knowledge through practical experience.</p>
            <p>Outside the classroom, I actively participate in workshops, forums and student-led events — most recently the <em>Sona Students Speakers Forum</em> — to sharpen my communication and leadership skills.</p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
            <h3 className="font-serif text-xl text-primary mb-4">Quick facts</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span className="text-muted-foreground">Degree</span><span className="font-medium">B.E. ECE</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Current CGPA</span><span className="font-medium">8.51</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">12th Score</span><span className="font-medium">92.5%</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Projects</span><span className="font-medium">0</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Location</span><span className="font-medium">Salem, TN</span></li>
            </ul>
          </div>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" className="!pt-0">
        <SectionTitle kicker="Journey" title="Education" />
        <div className="relative pl-8 border-l-2 border-primary/20 space-y-10">
          {[
            { period: "2024 — 2028", title: "Bachelor of Electronics and Communication Engineering", place: "Sona College of Technology", score: "Current CGPA: 8.51" },
            { period: "2016 — 2023", title: "6th – 12th Standard", place: "Government Higher Secondary School, M.N.Patti, Salem", score: "12th Percentage: 92.5%" },
          ].map((e, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-gradient-warm ring-4 ring-background" />
              <p className="text-xs tracking-widest uppercase text-primary/70">{e.period}</p>
              <h3 className="mt-1 font-serif text-2xl">{e.title}</h3>
              <p className="text-muted-foreground">{e.place}</p>
              <p className="mt-2 text-sm font-medium text-primary">{e.score}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" className="!pt-0">
        <SectionTitle kicker="Toolkit" title="Skills & Strengths" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code, title: "Technical", items: ["Python (Basic)", "C Programming (Intermediate)", "Data Structures (Basic)"] },
            { icon: Sparkles, title: "Soft Skills", items: ["Teamwork", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"] },
            { icon: Languages, title: "Languages", items: ["Tamil — Native", "English — Intermediate"] },
          ].map((g) => (
            <div key={g.title} className="group bg-card rounded-2xl p-7 shadow-soft border border-border hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center text-primary-foreground mb-4">
                <g.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl mb-3">{g.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {g.items.map(i => <li key={i} className="flex gap-2"><span className="text-primary">•</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* INTERNSHIP */}
      <Section id="internship" className="!pt-0">
        <SectionTitle kicker="Experience" title="Internship" />
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border max-w-3xl">
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-serif text-2xl">C Programming Intern</h3>
              <p className="text-muted-foreground">Online Internship</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">Completed</span>
          </div>
          <ul className="mt-5 space-y-2 text-muted-foreground">
            <li>• Gained practical knowledge in C programming</li>
            <li>• Worked with loops, arrays, functions, pointers, and file handling</li>
            <li>• Improved logical thinking and debugging skills</li>
          </ul>
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" className="!pt-0">
        <SectionTitle kicker="Moments" title="Gallery" />
        <div className="grid md:grid-cols-2 gap-6">
          <figure className="group relative overflow-hidden rounded-2xl shadow-elegant">
            <img src={awardImg} alt="Receiving award at college" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6 text-primary-foreground">
              <p className="font-serif text-xl">Award Ceremony</p>
              <p className="text-sm opacity-90">Recognition at Sona College of Technology, Salem</p>
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-2xl shadow-elegant">
            <img src={speakersImg} alt="Sona Students Speakers Forum" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6 text-primary-foreground">
              <p className="font-serif text-xl">Sona Students Speakers Forum</p>
              <p className="text-sm opacity-90">Participated alongside fellow student speakers</p>
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-2xl shadow-elegant md:col-span-2">
            <img src={speakersImg2} alt="Sona Student Speakers Forum group photo" className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6 text-primary-foreground">
              <p className="font-serif text-xl">Progress with Speakers — Sona Student Speakers Forum</p>
              <p className="text-sm opacity-90">A proud moment with the entire forum cohort</p>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* CERTIFICATIONS GALLERY */}
      <Section id="certifications" className="!pt-0">
        <SectionTitle kicker="Credentials" title="Certification Gallery" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(c => (
            <a key={c.title} href={c.image} target="_blank" rel="noreferrer"
              className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <Award className="w-6 h-6 text-primary shrink-0" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="mt-3 font-serif text-lg leading-tight">{c.title}</h3>
                <p className="text-sm text-primary/80 mt-1">{c.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* RESUME / CV (actual) */}
      <Section id="resume" className="!pt-0">
        <SectionTitle kicker="Curriculum Vitae" title="My Resume" />
        <div className="grid md:grid-cols-5 gap-8 items-center bg-card rounded-3xl p-8 md:p-10 shadow-elegant border border-border">
          <div className="md:col-span-2">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-soft border border-border bg-muted">
              <img src={resumeImg} alt="Deepalakshmi M — Resume" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-3">
            <GraduationCap className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-serif text-3xl mb-3">Curriculum Vitae</h3>
            <p className="text-muted-foreground leading-relaxed">
              A full snapshot of my education, internship experience, certifications and skills.
              Download the PDF to learn more — and feel free to reach out if anything sparks a conversation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={resumeImg} download="Deepalakshmi-M-Resume.jpeg" className="px-6 py-3 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-soft hover:scale-105 transition-transform inline-flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a href={resumeImg} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-primary/30 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Open full size
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Github className="w-4 h-4" /> github.com/deepalakshmi-max</a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Linkedin className="w-4 h-4" /> linkedin.com/in/deepalakshmi24</a>
              <a href={`mailto:${SOCIALS.email}`} className="inline-flex items-center gap-2 text-primary hover:underline"><Mail className="w-4 h-4" /> {SOCIALS.email}</a>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="!pt-0">
        <SectionTitle kicker="Say hello" title="Let's connect" />
        <p className="-mt-6 mb-8 text-muted-foreground max-w-2xl">Want to chat, collaborate, or just say hi? Drop me a message on any of the channels below — I'd love to hear from you.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Mail, label: "Email", value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
            { icon: Phone, label: "Phone", value: "+91 99521 46375", href: "tel:+919952146375" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/deepalakshmi24", href: SOCIALS.linkedin },
            { icon: Github, label: "GitHub", value: "github.com/deepalakshmi-max", href: SOCIALS.github },
            { icon: MessageCircle, label: "Message me", value: "Send a quick email", href: `mailto:${SOCIALS.email}?subject=Hello%20Deepalakshmi` },
            { icon: MapPin, label: "Address", value: "Koviloor, M.N.Patti, Mettur (Tk), Salem (Dt) — 636503" },
          ].map(c => {
            const Inner = (
              <>
                <c.icon className="w-7 h-7 text-primary mb-3" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="mt-1 font-medium break-all">{c.value}</p>
              </>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-elegant hover:-translate-y-1 transition-all block">{Inner}</a>
            ) : (
              <div key={c.label} className="bg-card rounded-2xl p-6 shadow-soft border border-border">{Inner}</div>
            );
          })}
        </div>
      </Section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 Deepalakshmi M · Crafted with care.
      </footer>
    </main>
  );
}
