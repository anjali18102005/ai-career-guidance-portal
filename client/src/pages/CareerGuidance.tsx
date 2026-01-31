import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Sparkles, Send, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { generateRoleClusters, StudentProfile, RoleCluster } from "@/lib/aiCareerEngine";

/**
 * Career Guidance Page - AI Career Engine
 * Design: Glassmorphism with comprehensive form and dynamic role cluster output
 * 
 * Features:
 * - Comprehensive student profile input form
 * - AI-powered role cluster generation
 * - Skill gap analysis and learning roadmaps
 * - Internship matching
 */

export default function CareerGuidance() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState<StudentProfile>({
    branch: 'Computer Science & Engineering',
    currentSkills: ['Python', 'Problem Solving'],
    interests: ['Web Development'],
    careerGoals: 'Build scalable applications',
    aptitude: 'Technical',
    gpa: 7.5,
  });

  const [showResults, setShowResults] = useState(false);
  const [roleClusters, setRoleClusters] = useState<RoleCluster[]>([]);
  const [loading, setLoading] = useState(false);
  const [skillInput, setSkillInput] = useState('');
  const [interestInput, setInterestInput] = useState('');

  useEffect(() => {
    // Load from session storage if available
    const storedData = sessionStorage.getItem('aiCareerProfile');
    if (storedData) {
      const data = JSON.parse(storedData);
      setFormData(data);
      const clusters = generateRoleClusters(data);
      setRoleClusters(clusters);
      setShowResults(true);
      sessionStorage.removeItem('aiCareerProfile');
    }
  }, []);

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      setFormData(prev => ({
        ...prev,
        currentSkills: [...prev.currentSkills, skillInput.trim()],
      }));
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      currentSkills: prev.currentSkills.filter(s => s !== skill),
    }));
  };

  const handleAddInterest = () => {
    if (interestInput.trim()) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, interestInput.trim()],
      }));
      setInterestInput('');
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const clusters = generateRoleClusters(formData);
      setRoleClusters(clusters);
      setShowResults(true);
      setLoading(false);
    }, 1500);
  };

  const handleViewRoleDetail = (role: RoleCluster) => {
    sessionStorage.setItem('roleDetail', JSON.stringify(role));
    navigate('/role-detail');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-white font-bold text-lg">AI Career Engine</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="glass-card p-8 space-y-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              Your Profile
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Branch */}
              <div className="space-y-3">
                <label className="block text-white font-semibold">Engineering Branch</label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400" style={{color: '#080808'}}
                >
                  <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                  <option value="Electronics & Communication">Electronics & Communication</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Chemical Engineering">Chemical Engineering</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Current Skills */}
              <div className="space-y-3">
                <label className="block text-white font-semibold">Current Skills</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                    placeholder="e.g., Python, JavaScript"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                  <Button
                    type="button"
                    onClick={handleAddSkill}
                    className="bg-cyan-400 text-white hover:bg-cyan-500"
                  >
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.currentSkills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-cyan-400/30"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-cyan-300 hover:text-cyan-100 font-bold"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <label className="block text-white font-semibold">Career Interests</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={interestInput}
                    onChange={(e) => setInterestInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddInterest())}
                    placeholder="e.g., Web Development, AI/ML"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                  <Button
                    type="button"
                    onClick={handleAddInterest}
                    className="bg-cyan-400 text-white hover:bg-cyan-500"
                  >
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.interests.map((interest) => (
                    <div
                      key={interest}
                      className="bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-purple-400/30"
                    >
                      {interest}
                      <button
                        type="button"
                        onClick={() => handleRemoveInterest(interest)}
                        className="text-purple-300 hover:text-purple-100 font-bold"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Goals */}
              <div className="space-y-3">
                <label className="block text-white font-semibold">Career Goals</label>
                <textarea
                  value={formData.careerGoals}
                  onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                  placeholder="e.g., Build scalable applications, Lead teams, Innovate in AI"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none h-20"
                />
              </div>

              {/* Aptitude */}
              <div className="space-y-3">
                <label className="block text-white font-semibold">Your Aptitude</label>
                <select
                  value={formData.aptitude}
                  onChange={(e) => setFormData({ ...formData, aptitude: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                >
                  <option value="Technical">Technical - Strong in coding & systems</option>
                  <option value="Creative">Creative - Strong in design & innovation</option>
                  <option value="Leadership">Leadership - Strong in management & people</option>
                  <option value="Problem-Solving">Problem-Solving - Strong in analysis & logic</option>
                  <option value="Analytical">Analytical - Strong in data & statistics</option>
                </select>
              </div>

              {/* GPA */}
              <div className="space-y-3">
                <label className="block text-white font-semibold">Current GPA (0-10)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  value={formData.gpa}
                  onChange={(e) => setFormData({ ...formData, gpa: parseFloat(e.target.value) || 0 })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 h-12 text-base hover:shadow-lg hover:shadow-blue-500/50 group disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>
                    Analyzing Your Profile...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Role Clusters
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {showResults && (
              <>
                {/* Results Header */}
                <div className="glass-card p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                    Your Role Clusters
                  </h3>
                  <p className="text-gray-400 text-sm">Personalized career recommendations based on your profile</p>
                </div>

                {/* Role Clusters */}
                {roleClusters.map((role, idx) => (
                  <div key={idx} className="glass-card p-6 space-y-4 hover:border-cyan-400/50 transition-all">
                    {/* Role Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl font-bold text-white">{role.role}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            role.marketDemand === 'Very High'
                              ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                              : role.marketDemand === 'High'
                              ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                              : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          }`}>
                            {role.marketDemand} Demand
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">{role.description}</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">{role.matchScore}%</span>
                      </div>
                    </div>

                    {/* Why This Role */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-gray-300 text-sm">{role.whyThisRole}</p>
                    </div>

                    {/* Skill Gaps */}
                    <div className="space-y-2">
                      <p className="text-white font-semibold text-sm">Skills to Develop:</p>
                      <div className="space-y-2">
                        {role.requiredSkills.slice(0, 4).map((skill, sidx) => (
                          <div key={sidx} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-300">{skill.skill}</span>
                              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                                skill.priority === 'Critical'
                                  ? 'bg-red-500/20 text-red-300'
                                  : skill.priority === 'High'
                                  ? 'bg-orange-500/20 text-orange-300'
                                  : 'bg-yellow-500/20 text-yellow-300'
                              }`}>
                                {skill.priority}
                              </span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                                style={{ width: `${(skill.gap / skill.requiredLevel) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-white/5 rounded p-2 border border-white/10">
                        <p className="text-gray-400">Salary Range</p>
                        <p className="text-cyan-300 font-semibold">{role.salaryRange.split('(')[0].trim()}</p>
                      </div>
                      <div className="bg-white/5 rounded p-2 border border-white/10">
                        <p className="text-gray-400">Learning Time</p>
                        <p className="text-cyan-300 font-semibold">6-12 months</p>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      onClick={() => handleViewRoleDetail(role)}
                      className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50"
                    >
                      View Full Details & Roadmap
                    </Button>
                  </div>
                ))}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link href="/dashboard" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50">
                      View Dashboard
                    </Button>
                  </Link>
                  <Button
                    onClick={() => setShowResults(false)}
                    variant="outline"
                    className="flex-1 border-white/30 text-white hover:bg-white/10"
                  >
                    Modify Profile
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
