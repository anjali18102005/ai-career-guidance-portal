import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Briefcase, DollarSign, Building2, TrendingUp, Lightbulb, CheckCircle, BookOpen, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { RoleCluster, LearningMilestone } from "@/lib/aiCareerEngine";

/**
 * Role Detail Page
 * Design: Comprehensive role information with skill gaps, learning roadmap, and internship matching
 * 
 * Features:
 * - Detailed role description
 * - Skill gap analysis with priority levels
 * - Learning roadmap with milestones
 * - Matching internships
 * - Interview tips
 */

export default function RoleDetail() {
  const [, navigate] = useLocation();
  const [role, setRole] = useState<RoleCluster | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'roadmap' | 'internships'>('overview');

  useEffect(() => {
    // Get role data from session storage
    const storedData = sessionStorage.getItem('roleDetail');
    if (storedData) {
      const roleData = JSON.parse(storedData);
      setRole(roleData);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-12 h-12 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin mx-auto mb-4"></div>
          <p>Loading role details...</p>
        </div>
      </div>
    );
  }

  if (!role) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
          <div className="container flex items-center justify-between py-4">
            <Link href="/career-guidance">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </nav>
        <div className="container py-20 text-center">
          <p className="text-white text-lg">Role information not found. Please select a role from Career Guidance.</p>
          <Link href="/career-guidance">
            <Button className="mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0">
              Go to Career Guidance
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Briefcase },
    { id: 'skills', label: 'Skill Gaps', icon: Zap },
    { id: 'roadmap', label: 'Learning Path', icon: BookOpen },
    { id: 'internships', label: 'Internships', icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <Link href="/career-guidance">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-white font-bold text-lg">{role.role}</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      <div className="container py-12">
        {/* Header Section */}
        <div className="glass-card p-8 mb-8 space-y-6">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">{role.role}</h1>
                  <p className="text-gray-400">Career Path Recommendation</p>
                </div>
              </div>
              <p className="text-lg text-gray-300">{role.description}</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-white font-semibold">{role.marketDemand} Market Demand</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-white font-semibold">{role.salaryRange.split('(')[0].trim()}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">{role.matchScore}%</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">Match Score</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="glass-card p-4 mb-8 flex gap-2 overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* Why This Role */}
              <div className="glass-card p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-cyan-400" />
                  Why This Role?
                </h2>
                <p className="text-gray-300 leading-relaxed">{role.whyThisRole}</p>
              </div>

              {/* Top Companies */}
              <div className="glass-card p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                  Top Hiring Companies
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {role.topCompanies.map((company, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
                      <p className="text-white font-semibold">{company}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Growth Path */}
              <div className="glass-card p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  Career Growth Path
                </h2>
                <div className="space-y-3">
                  {role.growthPath.map((position, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">{position}</p>
                        <p className="text-gray-400 text-sm">{idx === 0 ? '0-2 years' : idx === 1 ? '2-5 years' : idx === 2 ? '5-8 years' : '8+ years'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interview Tips */}
              <div className="glass-card p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white">Interview Tips</h2>
                <div className="space-y-3">
                  {role.interviewTips.map((tip, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-cyan-400 text-xs font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-gray-300">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="glass-card p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Zap className="w-6 h-6 text-cyan-400" />
                Skill Gap Analysis
              </h2>
              <div className="space-y-4">
                {role.requiredSkills.map((skill, idx) => (
                  <div key={idx} className="space-y-3 pb-4 border-b border-white/10 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-white font-semibold">{skill.skill}</p>
                        <p className="text-gray-400 text-sm">Learning time: {skill.learningTime}</p>
                      </div>
                      <span className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                        skill.priority === 'Critical'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : skill.priority === 'High'
                          ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                          : skill.priority === 'Medium'
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          : 'bg-green-500/20 text-green-300 border border-green-500/30'
                      }`}>
                        {skill.priority}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Current: Level {skill.currentLevel}</span>
                        <span>Required: Level {skill.requiredLevel}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          style={{ width: `${(skill.gap / skill.requiredLevel) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.resources.map((resource, ridx) => (
                        <span key={ridx} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/10">
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Roadmap Tab */}
          {activeTab === 'roadmap' && (
            <div className="glass-card p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-cyan-400" />
                Learning Roadmap (12 Months)
              </h2>
              <div className="space-y-6">
                {role.learningRoadmap.map((milestone, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                          {milestone.month}
                        </div>
                        {idx < role.learningRoadmap.length - 1 && (
                          <div className="w-0.5 h-24 bg-gradient-to-b from-cyan-400 to-transparent mt-2"></div>
                        )}
                      </div>
                      <div className="pb-6 flex-1">
                        <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                        <div className="space-y-3">
                          {milestone.skills.length > 0 && (
                            <div>
                              <p className="text-cyan-300 font-semibold text-sm mb-2">Skills to Learn:</p>
                              <div className="flex flex-wrap gap-2">
                                {milestone.skills.map((skill, sidx) => (
                                  <span key={sidx} className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-400/30">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {milestone.projects.length > 0 && (
                            <div>
                              <p className="text-purple-300 font-semibold text-sm mb-2">Projects:</p>
                              <div className="flex flex-wrap gap-2">
                                {milestone.projects.map((project, pidx) => (
                                  <span key={pidx} className="bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30">
                                    {project}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {milestone.certifications.length > 0 && (
                            <div>
                              <p className="text-green-300 font-semibold text-sm mb-2">Certifications:</p>
                              <div className="flex flex-wrap gap-2">
                                {milestone.certifications.map((cert, cidx) => (
                                  <span key={cidx} className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                                    {cert}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Internships Tab */}
          {activeTab === 'internships' && (
            <div className="space-y-6">
              <div className="glass-card p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                  Matching Internships
                </h2>
              </div>
              {role.matchingInternships.map((internship, idx) => (
                <div key={idx} className="glass-card p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{internship.title}</h3>
                      <p className="text-gray-400">{internship.company} • {internship.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{internship.matchScore}%</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Match</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/5 rounded p-3 border border-white/10">
                      <p className="text-gray-400">Duration</p>
                      <p className="text-white font-semibold">{internship.duration}</p>
                    </div>
                    <div className="bg-white/5 rounded p-3 border border-white/10">
                      <p className="text-gray-400">Stipend</p>
                      <p className="text-green-300 font-semibold">{internship.stipend}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-white font-semibold text-sm">Skills You Have:</p>
                    <div className="flex flex-wrap gap-2">
                      {internship.skillsYouHave.length > 0 ? (
                        internship.skillsYouHave.map((skill, sidx) => (
                          <span key={sidx} className="bg-green-400/20 text-green-300 px-2 py-1 rounded text-xs border border-green-400/30">
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400 text-xs">None yet</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-white font-semibold text-sm">Skills Needed:</p>
                    <div className="flex flex-wrap gap-2">
                      {internship.skillsNeeded.map((skill, sidx) => (
                        <span key={sidx} className="bg-orange-400/20 text-orange-300 px-2 py-1 rounded text-xs border border-orange-400/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50">
                    Learn More & Apply
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex gap-3">
          <Link href="/career-guidance" className="flex-1">
            <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50">
              Back to Career Guidance
            </Button>
          </Link>
          <Link href="/internships" className="flex-1">
            <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
              Explore All Internships
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
