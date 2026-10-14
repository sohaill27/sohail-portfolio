import React from 'react';
import { ExternalLink, Github, Sliders, Activity, BookOpen, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
  onOpenPlaceholderNotice?: (title: string, linkType: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
  onOpenPlaceholderNotice
}) => {
  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (project.isGithubPlaceholder && onOpenPlaceholderNotice) {
      e.preventDefault();
      onOpenPlaceholderNotice(project.title, 'GitHub Repository');
    }
  };

  const renderTelemetryWidget = () => {
    const { telemetry } = project;

    if (telemetry.type === 'phishing') {
      return (
        <div className="bg-[#090e19]/90 rounded-lg p-5 shadow-inner flex flex-col space-y-3 border border-[#3b4a3d]/40">
          <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[11px] pb-1 text-[#849584]">
            <span className="flex items-center gap-1.5 text-[#7bd0ff]">
              <Sliders className="w-3.5 h-3.5" />
              {telemetry.headerText}
            </span>
            <span className="text-[#bacbb9]">{telemetry.modelOrSubnet}</span>
          </div>

          <div className="space-y-1.5">
            {telemetry.items?.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#161b27] px-3 py-2 rounded flex items-center justify-between border border-[#3b4a3d]/25 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.statusType === 'secondary' ? 'bg-[#7bd0ff]' : 'bg-[#39ff88]'
                    }`}
                  />
                  <span className="font-['JetBrains_Mono'] text-[#dee2f2]">{item.label}</span>
                </div>
                <span
                  className={`font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded font-semibold ${
                    item.statusType === 'secondary'
                      ? 'text-[#7bd0ff] bg-[#7bd0ff]/10'
                      : 'text-[#39ff88] bg-[#39ff88]/10'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-[#1b1f2b] p-3 rounded flex flex-col border border-[#3b4a3d]/25">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                Detection Accuracy
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-['Space_Grotesk'] text-xl font-bold text-[#f5fff2]">
                  {telemetry.accuracy}
                </span>
                {telemetry.variance && (
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#39ff88]">
                    {telemetry.variance}
                  </span>
                )}
              </div>
            </div>
            <div className="bg-[#1b1f2b] p-3 rounded flex flex-col border border-[#3b4a3d]/25">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                Classification Verdict
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-['Space_Grotesk'] text-xl font-bold text-[#39ff88]">
                  {telemetry.verdict}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            {telemetry.progressBars?.map((bar, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-['JetBrains_Mono'] text-[11px] text-[#bacbb9]">
                  <span>{bar.label}</span>
                  <span className={bar.color === 'secondary' ? 'text-[#7bd0ff]' : 'text-[#39ff88]'}>
                    {bar.percent}%
                  </span>
                </div>
                <div className="w-full bg-[#252a36] h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      bar.color === 'secondary' ? 'bg-[#7bd0ff]' : 'bg-[#39ff88]'
                    }`}
                    style={{ width: `${bar.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (telemetry.type === 'extension') {
      return (
        <div className="bg-[#090e19]/90 rounded-lg p-5 shadow-inner flex flex-col space-y-3 border border-[#3b4a3d]/40">
          <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[11px] pb-1 text-[#849584]">
            <span className="flex items-center gap-1.5 text-[#39ff88]">
              <ShieldCheck className="w-3.5 h-3.5" />
              {telemetry.headerText}
            </span>
            <span className="text-[#bacbb9]">{telemetry.modelOrSubnet}</span>
          </div>

          <div className="space-y-1.5">
            {telemetry.items?.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#161b27] px-3 py-2 rounded flex items-center justify-between border border-[#3b4a3d]/25 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.statusType === 'secondary' ? 'bg-[#7bd0ff]' : 'bg-[#39ff88]'
                    }`}
                  />
                  <span className="font-['JetBrains_Mono'] text-[#dee2f2]">{item.label}</span>
                </div>
                <span
                  className={`font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded font-semibold ${
                    item.statusType === 'secondary'
                      ? 'text-[#7bd0ff] bg-[#7bd0ff]/10'
                      : 'text-[#39ff88] bg-[#39ff88]/10'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-[#1b1f2b] p-3 rounded flex flex-col border border-[#3b4a3d]/25">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                Inspection Latency
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-['Space_Grotesk'] text-xl font-bold text-[#f5fff2]">
                  {telemetry.accuracy}
                </span>
                {telemetry.variance && (
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#39ff88]">
                    {telemetry.variance}
                  </span>
                )}
              </div>
            </div>
            <div className="bg-[#1b1f2b] p-3 rounded flex flex-col border border-[#3b4a3d]/25">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                Active Verdict
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-['Space_Grotesk'] text-xl font-bold text-[#39ff88]">
                  {telemetry.verdict}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            {telemetry.progressBars?.map((bar, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-['JetBrains_Mono'] text-[11px] text-[#bacbb9]">
                  <span>{bar.label}</span>
                  <span className={bar.color === 'secondary' ? 'text-[#7bd0ff]' : 'text-[#39ff88]'}>
                    {bar.percent}%
                  </span>
                </div>
                <div className="w-full bg-[#252a36] h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      bar.color === 'secondary' ? 'bg-[#7bd0ff]' : 'bg-[#39ff88]'
                    }`}
                    style={{ width: `${bar.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (telemetry.type === 'blockchain' || telemetry.type === 'nft') {
      return (
        <div className="bg-[#090e19]/90 rounded-lg p-5 shadow-inner flex flex-col space-y-3 border border-[#3b4a3d]/40">
          <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[11px] pb-1 text-[#849584]">
            <span className="flex items-center gap-1.5 text-[#7bd0ff]">
              <Lock className="w-3.5 h-3.5" />
              {telemetry.headerText}
            </span>
            <span className="text-[#bacbb9]">{telemetry.modelOrSubnet}</span>
          </div>

          <div className="space-y-1.5">
            {telemetry.items?.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#161b27] px-3 py-2 rounded flex items-center justify-between border border-[#3b4a3d]/25 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.statusType === 'secondary' ? 'bg-[#7bd0ff]' : 'bg-[#39ff88]'
                    }`}
                  />
                  <span className="font-['JetBrains_Mono'] text-[#dee2f2]">{item.label}</span>
                </div>
                <span
                  className={`font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded font-semibold ${
                    item.statusType === 'secondary'
                      ? 'text-[#7bd0ff] bg-[#7bd0ff]/10'
                      : 'text-[#39ff88] bg-[#39ff88]/10'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-[#1b1f2b] p-3 rounded flex flex-col border border-[#3b4a3d]/25">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                Security Standard
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-['Space_Grotesk'] text-xl font-bold text-[#f5fff2]">
                  {telemetry.accuracy}
                </span>
              </div>
            </div>
            <div className="bg-[#1b1f2b] p-3 rounded flex flex-col border border-[#3b4a3d]/25">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                Consensus State
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-['Space_Grotesk'] text-xl font-bold text-[#39ff88]">
                  {telemetry.verdict}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            {telemetry.progressBars?.map((bar, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-['JetBrains_Mono'] text-[11px] text-[#bacbb9]">
                  <span>{bar.label}</span>
                  <span className={bar.color === 'secondary' ? 'text-[#7bd0ff]' : 'text-[#39ff88]'}>
                    {bar.percent}%
                  </span>
                </div>
                <div className="w-full bg-[#252a36] h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      bar.color === 'secondary' ? 'bg-[#7bd0ff]' : 'bg-[#39ff88]'
                    }`}
                    style={{ width: `${bar.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  const getButtonIcon = () => {
    if (project.primaryButtonLabel?.includes('Notes')) {
      return <BookOpen className="w-4 h-4 ml-1.5" />;
    }
    if (project.primaryButtonLabel?.includes('SOC') || project.primaryButtonLabel?.includes('Telemetry')) {
      return <Activity className="w-4 h-4 ml-1.5" />;
    }
    return <ExternalLink className="w-4 h-4 ml-1.5" />;
  };

  return (
    <div className="bg-[#161b27]/85 backdrop-blur-md rounded-xl p-5 lg:p-7 shadow-xl border border-[#3b4a3d]/45 transition-all duration-300 hover:border-[#849584]/60">
      {/* Top Banner Tag & Badge */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-5 bg-[#1b1f2b]/50 p-3 rounded-lg gap-2 border border-[#3b4a3d]/25">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-['JetBrains_Mono'] text-xs text-[#7bd0ff] tracking-wider uppercase">
            {project.subTag}
          </span>
          {project.period && (
            <>
              <span className="text-[#849584]">·</span>
              <span className="font-['JetBrains_Mono'] text-xs text-[#bacbb9]">
                {project.period}
              </span>
            </>
          )}
        </div>
        {project.badge && (
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-['JetBrains_Mono'] text-[11px] border ${
              project.badgeColor === 'primary'
                ? 'bg-[#39ff88]/10 text-[#39ff88] border-[#39ff88]/25'
                : 'bg-[#7bd0ff]/10 text-[#7bd0ff] border-[#7bd0ff]/25'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                project.badgeColor === 'primary' ? 'bg-[#39ff88]' : 'bg-[#7bd0ff]'
              }`}
            />
            <span>{project.badge}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Title, Description, Tags, CTAs */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <div>
            <h3 className="font-['Space_Grotesk'] text-2xl lg:text-3xl font-bold text-[#f5fff2] tracking-tight">
              {project.title}
            </h3>
            <p className="font-['Inter'] text-sm sm:text-base text-[#bacbb9] mt-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.tags.map((tag) => {
              let tagStyle = 'bg-[#252a36] text-[#dee2f2]';
              if (tag.highlight === 'primary') tagStyle = 'bg-[#252a36] text-[#39ff88] font-medium';
              if (tag.highlight === 'secondary') tagStyle = 'bg-[#252a36] text-[#7bd0ff] font-medium';

              return (
                <span
                  key={tag.name}
                  className={`px-3 py-1 rounded font-['JetBrains_Mono'] text-xs border border-[#3b4a3d]/30 ${tagStyle}`}
                >
                  {tag.name}
                </span>
              );
            })}
          </div>

          {/* Action CTAs & Status */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.primaryButtonLabel && (
              <button
                onClick={() => onOpenDetails(project)}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#39ff88] text-[#003918] font-['JetBrains_Mono'] text-xs sm:text-sm font-semibold shadow-[0_0_16px_rgba(57,255,136,0.25)] hover:shadow-[0_0_24px_rgba(57,255,136,0.4)] hover:bg-[#00e473] transition-all cursor-pointer"
              >
                <span>{project.primaryButtonLabel}</span>
                {getButtonIcon()}
              </button>
            )}

            {project.githubUrl && !project.repoComingSoon ? (
              <a
                href={project.githubUrl}
                onClick={handleGithubClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#252a36] text-[#dee2f2] font-['JetBrains_Mono'] text-xs sm:text-sm hover:text-[#f5fff2] hover:bg-[#343946] border border-[#3b4a3d]/50 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1b1f2b] text-[#849584] font-['JetBrains_Mono'] text-xs border border-[#3b4a3d]/40 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#849584]" />
                Repository coming soon
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Dynamic Telemetry Widget */}
        <div className="lg:col-span-6">{renderTelemetryWidget()}</div>
      </div>
    </div>
  );
};
