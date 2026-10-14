import React, { useState, useEffect } from 'react';
import { GraduationCap, Building2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionHeading } from './components/SectionHeading';
import { InfoCard } from './components/InfoCard';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { CertCard } from './components/CertCard';
import { ResumeCallout } from './components/ResumeCallout';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumePreviewModal } from './components/ResumePreviewModal';
import { PlaceholderNoticeModal } from './components/PlaceholderNoticeModal';

import { portfolioData, ProjectItem } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumePreviewOpen, setResumePreviewOpen] = useState(false);
  const [placeholderInfo, setPlaceholderInfo] = useState<{ title: string; linkType: string; url?: string } | null>(null);

  // Active section observer on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'resume', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlaceholderNotice = (title: string, linkType: string, url?: string) => {
    setPlaceholderInfo({ title, linkType, url });
  };

  return (
    <div className="min-h-screen bg-[#0e131e] text-[#dee2f2] font-['Inter'] relative cyber-grid-bg selection:bg-[#39ff88] selection:text-[#003918]">
      {/* Navbar with active section indicator */}
      <Navbar activeSection={activeSection} />

      <main className="w-full pt-20">
        {/* HERO SECTION */}
        <Hero
          onPreviewResume={() => setResumePreviewOpen(true)}
          onPlaceholderNotice={handlePlaceholderNotice}
        />

        {/* 1. ABOUT SECTION */}
        <section
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 border-t border-[#3b4a3d]/30"
          id="about"
        >
          <div className="flex flex-col space-y-6">
            <SectionHeading
              eyebrow={portfolioData.about.eyebrow}
              sectionNum={portfolioData.about.sectionNum}
              title={portfolioData.about.title}
              description={portfolioData.about.intro}
            />

            {/* 3 Focus Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {portfolioData.about.focusAreas.map((area) => (
                <InfoCard key={area.id} card={area} />
              ))}
            </div>

            {/* Education Card */}
            <div className="bg-[#161b27]/90 backdrop-blur-md border border-[#3b4a3d]/50 rounded-xl p-6 sm:p-8 relative overflow-hidden mt-4 shadow-lg">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#39ff88]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#252a36] border border-[#3b4a3d]/40 flex items-center justify-center text-[#39ff88] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-[#39ff88]/10 text-[#39ff88] uppercase tracking-wider font-semibold">
                        {portfolioData.about.education.kicker}
                      </span>
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#f5fff2] pt-1">
                      {portfolioData.about.education.degree}
                    </h3>
                    <p className="font-['Inter'] text-sm sm:text-base text-[#7bd0ff] font-medium">
                      {portfolioData.about.education.specialization}
                    </p>
                    <p className="font-['Inter'] text-xs sm:text-sm text-[#bacbb9] flex items-center gap-1.5 pt-1">
                      <Building2 className="w-4 h-4 text-[#849584]" />
                      <span>{portfolioData.about.education.institution}</span>
                    </p>
                  </div>
                </div>

                <div className="md:text-right shrink-0 font-['JetBrains_Mono'] text-xs sm:text-sm flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-[#3b4a3d]/40 pt-4 md:pt-0 md:pl-8">
                  <span className="text-[#f5fff2] font-semibold text-sm sm:text-base">
                    {portfolioData.about.education.status}
                  </span>
                  {portfolioData.about.education.badge && (
                    <span className="text-[#39ff88] text-[11px] tracking-wider uppercase font-semibold">
                      {portfolioData.about.education.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SKILLS SECTION */}
        <section
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 border-t border-[#3b4a3d]/30"
          id="skills"
        >
          <div className="flex flex-col space-y-6">
            <SectionHeading
              eyebrow={portfolioData.skills.eyebrow}
              sectionNum={portfolioData.skills.sectionNum}
              title={portfolioData.skills.title}
              description={portfolioData.skills.description}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {portfolioData.skills.categories.map((cat) => (
                <SkillCard key={cat.id} category={cat} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 border-t border-[#3b4a3d]/30"
          id="projects"
        >
          <div className="flex flex-col space-y-8">
            <SectionHeading
              eyebrow={portfolioData.projects.eyebrow}
              sectionNum={portfolioData.projects.sectionNum}
              title={portfolioData.projects.title}
              description={portfolioData.projects.description}
            />

            <div className="space-y-8">
              {portfolioData.projects.items.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  onOpenDetails={(p) => setSelectedProject(p)}
                  onOpenPlaceholderNotice={handlePlaceholderNotice}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. EXPERIENCE SECTION */}
        <section
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 border-t border-[#3b4a3d]/30"
          id="experience"
        >
          <div className="flex flex-col space-y-8">
            <SectionHeading
              eyebrow={portfolioData.experience.eyebrow}
              sectionNum={portfolioData.experience.sectionNum}
              title={portfolioData.experience.title}
              description={portfolioData.experience.description}
            />

            <div className="max-w-3xl pt-2">
              {portfolioData.experience.items.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  isLast={index === portfolioData.experience.items.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. CERTIFICATIONS SECTION */}
        <section
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 border-t border-[#3b4a3d]/30"
          id="certifications"
        >
          <div className="flex flex-col space-y-6">
            <SectionHeading
              eyebrow={portfolioData.certifications.eyebrow}
              sectionNum={portfolioData.certifications.sectionNum}
              title={portfolioData.certifications.title}
              description={portfolioData.certifications.description}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {portfolioData.certifications.items.map((cert) => (
                <CertCard
                  key={cert.id}
                  cert={cert}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. RESUME CALLOUT */}
        <ResumeCallout
          onPreviewResume={() => setResumePreviewOpen(true)}
          onPlaceholderNotice={handlePlaceholderNotice}
        />

        {/* 6. CONTACT SECTION */}
        <ContactForm onPlaceholderNotice={handlePlaceholderNotice} />
      </main>

      {/* 7. FOOTER */}
      <Footer onPlaceholderNotice={handlePlaceholderNotice} />

      {/* MODALS */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenPlaceholderNotice={handlePlaceholderNotice}
      />

      <ResumePreviewModal
        isOpen={resumePreviewOpen}
        onClose={() => setResumePreviewOpen(false)}
      />

      <PlaceholderNoticeModal
        info={placeholderInfo}
        onClose={() => setPlaceholderInfo(null)}
      />
    </div>
  );
}
