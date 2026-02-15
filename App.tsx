import React from 'react';
import { Education, Experience, Project } from './types';
import { Github, Linkedin, Mail, ArrowUpRight, Cpu, Trophy, MapPin, Terminal, Briefcase, GraduationCap, Layers, BrainCircuit, Code, Database, Globe } from 'lucide-react';
import HobbyGallery from './components/HobbyGallery';

// Resume Data - Full Detail
const educationData: Education[] = [
  {
    school: "University of North Carolina at Chapel Hill",
    degree: "M.S. Computer Science",
    period: "Aug 2025 - May 2027",
    gpa: "4.0",
    details: [
      "ZD Lab Researcher (Prof. Zhun Deng)",
      "Focus: Human-AI Collaboration (HAC) & Prompt Engineering"
    ]
  },
  {
    school: "University of Utah",
    degree: "B.S. Computer Science",
    period: "Aug 2021 - Dec 2024",
    gpa: "3.7",
    details: [
      "Minor in Mathematics",
      "Dean's List (5 Semesters)",
      "Utah Global Scholarship Recipient ($6000)",
      "Top 1 Capstone Project (Dec 2024)"
    ]
  }
];

const experienceData: Experience[] = [
  {
    company: "Aureum Gale Game",
    role: "Game Dev Engineer Intern",
    location: "Los Angeles, CA",
    period: "May 2024 - Aug 2024",
    details: [
      "Developed 3D prototypes using Unreal Engine 5.",
      "Integrated 20+ unique game assets.",
      "Reduced code conflicts by 30% via Git."
    ]
  },
  {
    company: "Heilongjiang Guanjie Biotech",
    role: "Web Developer",
    location: "Harbin, China",
    period: "Apr 2024 - Aug 2024",
    details: [
      "Increased user retention by 30% with responsive web design.",
      "Boosted performance by 40% via bug fixes.",
      "Managed weekly sprint cycles for 25% efficiency gain."
    ]
  },
  {
    company: "Jilin Baiqi Pharmaceutical",
    role: "Support Admin",
    location: "Jilin, China",
    period: "May 2023 - Aug 2023",
    details: [
      "Minimized downtime by 25% via troubleshooting.",
      "Resolved 90% of software issues on first call."
    ]
  }
];

const projectsData: Project[] = [
  {
    title: "Wrap Capstone Project",
    role: "Full Stack Engineer",
    period: "2025",
    tech: "React, Node.js, MongoDB, AWS",
    description: [
      "Deployed full-stack app on AWS.",
      "Chrome extension for legal doc summarization (Claude API).",
      "Automated notification features."
    ],
    link: "#"
  },
  {
    title: "ML Educational App",
    role: "Software Engineer",
    period: "2023",
    tech: "Qt, C++, Box2D",
    description: [
      "Interactive Linear Regression visuals.",
      "Physics simulations via Box2D.",
      "MVC Architecture implementation."
    ],
    link: "#"
  },
  {
    title: "Fast Ray Tracing (DDA)",
    role: "Graphics Engineer",
    period: "2024",
    tech: "GPU Computing, Shaders",
    description: [
      "50% faster rendering with DDA.",
      "Dynamic object ray tracing.",
      "Research on mirror rendering effects."
    ],
    link: "#"
  }
];

const skills = {
  languages: ["Java", "C#", "C/C++", "JavaScript", "Python", "MATLAB", "SQL"],
  frameworks: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Docker", "Unreal Engine 5", "Hugging Face", "Qt"]
};

function App() {
  return (
    <div className="min-h-screen bg-[#F2F0E6] text-[#111111] font-sans selection:bg-[#D03025] selection:text-white pb-12">
      
      {/* Header Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F2F0E6]/95 backdrop-blur border-b border-[#111111] h-14 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-[#D03025]"></div>
           <span className="font-mono text-sm font-bold uppercase tracking-widest">Lianrui Geng // Portfolio</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs uppercase font-medium">
           <a href="mailto:lianruig@unc.edu" className="hover:text-[#D03025] flex items-center gap-2"><Mail size={14}/> Contact</a>
           <a href="https://github.com/LianruiBruce" target="_blank" rel="noreferrer" className="hover:text-[#D03025] flex items-center gap-2"><Github size={14}/> GitHub</a>
           <a href="https://linkedin.com/in/lianrui-geng-01533a294" target="_blank" rel="noreferrer" className="hover:text-[#D03025] flex items-center gap-2"><Linkedin size={14}/> LinkedIn</a>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="max-w-[1920px] mx-auto pt-14 border-x border-[#111111]">
        
        {/* Row 1: Identity & Key Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#111111]">
           
           {/* Hero Block */}
           <div className="lg:col-span-8 p-8 md:p-16 border-r border-[#111111] bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
                 <Terminal size={400} />
              </div>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.8] tracking-tighter mb-8 z-10 relative">
                Engineer<span className="text-[#D03025]">.</span><br/>
                Researcher<span className="text-[#D03025]">.</span><br/>
                Athlete<span className="text-[#D03025]">.</span>
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed z-10 relative">
                 I am a Master's student at <span className="font-bold border-b-2 border-[#D03025]">UNC Chapel Hill</span> bridging the gap between rigorous software engineering and Human-AI Collaboration.
              </p>
           </div>

           {/* Profile / Stats Block */}
           <div className="lg:col-span-4 bg-[#111111] text-[#F2F0E6] p-8 flex flex-col justify-between">
              <div>
                 <div className="w-24 h-24 bg-[#F2F0E6] rounded-full mb-6 overflow-hidden border-2 border-[#D03025]">
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-[#F2F0E6] font-serif text-3xl">LG</div>
                 </div>
                 <div className="font-mono text-xs uppercase text-neutral-500 mb-1">Current Status</div>
                 <div className="text-2xl font-serif">ZD Lab Researcher</div>
                 <div className="text-sm text-neutral-400 mt-1">Supervised by Prof. Zhun Deng</div>
              </div>
              
              <div className="space-y-6 mt-12">
                 <div className="flex items-center gap-4">
                    <MapPin className="text-[#D03025]" />
                    <div>
                       <div className="font-bold">Chapel Hill, NC</div>
                       <div className="text-xs text-neutral-400">United States</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <Briefcase className="text-[#D03025]" />
                    <div>
                       <div className="font-bold">Open for Summer 2025</div>
                       <div className="text-xs text-neutral-400">Internship Opportunities</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Row 2: Experience & Projects (The "Work" Layer) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#111111]">
           
           {/* Experience Column */}
           <div className="lg:col-span-5 border-r border-[#111111] bg-[#F2F0E6]">
              <div className="p-4 border-b border-[#111111] bg-[#e8e6da] flex items-center gap-2 sticky top-14 z-20">
                 <Briefcase size={16} />
                 <span className="font-mono text-xs font-bold uppercase tracking-widest">Professional Trajectory</span>
              </div>
              <div>
                 {experienceData.map((exp, i) => (
                    <div key={i} className="p-8 border-b border-[#111111] last:border-b-0 hover:bg-white transition-colors group">
                       <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-xl">{exp.company}</h3>
                          <span className="font-mono text-xs bg-[#111111] text-white px-2 py-1">{exp.period}</span>
                       </div>
                       <div className="text-[#D03025] font-medium text-sm mb-4 flex justify-between">
                          {exp.role}
                          <span className="text-neutral-500 font-mono text-xs">{exp.location}</span>
                       </div>
                       <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-neutral-700 marker:text-[#D03025]">
                          {exp.details.map((d, idx) => (
                             <li key={idx} className="leading-relaxed">{d}</li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </div>

           {/* Projects & Research Column */}
           <div className="lg:col-span-7 bg-white">
              <div className="p-4 border-b border-[#111111] bg-[#f8f8f8] flex items-center gap-2 sticky top-14 z-20">
                 <Layers size={16} />
                 <span className="font-mono text-xs font-bold uppercase tracking-widest">Engineering Projects</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                 {projectsData.map((proj, i) => (
                    <div key={i} className={`p-8 border-b border-[#111111] hover:bg-[#F2F0E6] transition-colors group ${i % 2 === 0 ? 'md:border-r' : ''}`}>
                       <div className="flex justify-between items-start mb-4">
                          <div className="p-2 bg-[#111111] text-white rounded-sm">
                             <Code2Icon i={i} />
                          </div>
                          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D03025]" />
                       </div>
                       <h3 className="font-bold text-lg mb-1">{proj.title}</h3>
                       <div className="font-mono text-xs text-neutral-500 mb-4 h-6">{proj.tech}</div>
                       <ul className="space-y-2 text-sm text-neutral-700">
                          {proj.description.map((d, idx) => (
                             <li key={idx} className="flex gap-2">
                                <span className="text-[#D03025] font-bold">/</span> {d}
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
                 
                 {/* Research Focus Block (Replaces previous Skills block) */}
                 <div className="p-8 border-b border-[#111111] bg-[#111111] text-[#F2F0E6] flex flex-col justify-between">
                    <div>
                       <BrainCircuit size={32} className="mb-4 text-[#D03025]" />
                       <h3 className="font-serif text-2xl mb-2">Research Focus</h3>
                       <p className="text-sm text-neutral-400 mb-4">
                          Investigating the intersection of code and cognition at UNC's ZD Lab.
                       </p>
                    </div>
                    <div className="space-y-3">
                       <div className="border-l-2 border-[#D03025] pl-3">
                          <div className="font-bold text-sm">Human-AI Collaboration (HAC)</div>
                          <div className="text-xs text-neutral-500">System Design & Interaction</div>
                       </div>
                       <div className="border-l-2 border-[#D03025] pl-3">
                          <div className="font-bold text-sm">Prompt Engineering</div>
                          <div className="text-xs text-neutral-500">Optimization & Reliability</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Row 3: Education, Skills, & Interests (The "Foundation" Layer) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#111111] min-h-[350px]">
           
           {/* Education (Span 4) */}
           <div className="lg:col-span-4 border-r border-[#111111] bg-white flex flex-col">
              <div className="p-4 border-b border-[#111111] bg-[#f8f8f8] flex items-center gap-2">
                 <GraduationCap size={16} />
                 <span className="font-mono text-xs font-bold uppercase tracking-widest">Academic Foundation</span>
              </div>
              <div className="flex-1">
                 {educationData.map((edu, i) => (
                    <div key={i} className="p-8 border-b border-[#111111] last:border-0 hover:bg-[#F2F0E6] transition-colors">
                       <div className="font-serif text-2xl mb-2">{edu.school}</div>
                       <div className="text-sm font-bold text-[#D03025] mb-2">{edu.degree}</div>
                       <div className="flex justify-between font-mono text-xs text-neutral-500 mb-4">
                          <span>{edu.period}</span>
                          <span className="font-bold text-black">GPA: {edu.gpa}</span>
                       </div>
                       <div className="space-y-2">
                          {edu.details.map((d, idx) => (
                             <div key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                                <Trophy size={14} className="mt-1 text-[#D03025] shrink-0" />
                                <span>{d}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Skills (Span 4) - New Dedicated Column */}
           <div className="lg:col-span-4 border-r border-[#111111] bg-[#F2F0E6] flex flex-col">
              <div className="p-4 border-b border-[#111111] bg-[#e8e6da] flex items-center gap-2">
                 <Code size={16} />
                 <span className="font-mono text-xs font-bold uppercase tracking-widest">Technical Arsenal</span>
              </div>
              <div className="p-8 flex flex-col gap-8 flex-1">
                 <div>
                    <h4 className="font-mono text-xs uppercase text-neutral-500 mb-4 border-b border-[#111111] pb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                       {skills.languages.map(s => (
                          <span key={s} className="px-3 py-1 bg-white border border-[#111111] font-mono text-sm font-bold shadow-[2px_2px_0px_0px_#111111]">
                             {s}
                          </span>
                       ))}
                    </div>
                 </div>
                 <div>
                    <h4 className="font-mono text-xs uppercase text-neutral-500 mb-4 border-b border-[#111111] pb-2">Frameworks & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                       {skills.frameworks.map(s => (
                          <span key={s} className="px-3 py-1 bg-[#111111] text-white border border-[#111111] font-mono text-sm font-bold">
                             {s}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           {/* Interests (Span 4) */}
           <div className="lg:col-span-4 bg-[#111111] text-[#F2F0E6] flex flex-col">
              <div className="p-4 border-b border-neutral-800 bg-[#1a1a1a] flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Personal Interests</span>
                 </div>
              </div>
              <div className="flex-1">
                 <HobbyGallery />
              </div>
           </div>

        </div>

        {/* Footer */}
        <footer className="bg-[#111111] text-[#F2F0E6] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 border-t border-neutral-800">
           <div>
              <div className="font-serif text-2xl md:text-3xl mb-2">Lianrui Geng</div>
              <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                 © 2025 // Portfolio // UNC Chapel Hill
              </div>
           </div>
           <div className="flex flex-wrap gap-6 font-mono text-xs uppercase font-bold text-neutral-400">
              <span className="hover:text-white cursor-pointer">Unreal Engine 5</span>
              <span className="hover:text-white cursor-pointer">React Native</span>
              <span className="hover:text-white cursor-pointer">HAC Research</span>
              <span className="hover:text-white cursor-pointer">Prompt Engineering</span>
           </div>
        </footer>

      </main>
    </div>
  );
}

// Simple helper icon component
const Code2Icon = ({ i }: { i: number }) => {
   if (i === 0) return <Terminal size={20} />;
   if (i === 1) return <Cpu size={20} />;
   return <Layers size={20} />;
}

export default App;
