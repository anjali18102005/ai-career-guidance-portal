import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Sparkles, Zap, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

/**
 * Landing Page
 * Design: Glassmorphism with hero section and dynamic role suggestion
 * 
 * Features:
 * - Hero section with AI illustration
 * - Quick role suggestion form
 * - Feature highlights
 * - Call-to-action buttons
 */

interface QuickSuggestionForm {
  branch: string;
  skills: string;
  interests: string;
}

export default function Home() {
  const [, navigate] = useLocation();
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [quickForm, setQuickForm] = useState<QuickSuggestionForm>({
    branch: 'Computer Science & Engineering',
    skills: '',
    interests: '',
  });

  const handleQuickSuggestion = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in session storage for Career Guidance page
    sessionStorage.setItem('quickSuggestion', JSON.stringify(quickForm));
    navigate('/career-guidance');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-white font-bold text-xl">PathFinder AI</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Dashboard
              </Button>
            </Link>
            <Link href="/internships">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Internships
              </Button>
            </Link>
            <Link href="/career-guidance">
              <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Powered by Advanced AI</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Path to{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Career Success
                </span>
              </h1>

              <p className="text-xl text-gray-400">
                PathFinder AI analyzes your branch, skills, and interests to suggest the perfect career role and create a personalized learning roadmap.
              </p>
            </div>

            {/* Quick Suggestion Form */}
            {!showQuickForm ? (
              <div className="space-y-4">
                <Button
                  onClick={() => setShowQuickForm(true)}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 h-12 text-base hover:shadow-lg hover:shadow-blue-500/50 group"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Role Suggestion
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/career-guidance">
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    Explore Full Guidance
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleQuickSuggestion} className="glass-card p-6 space-y-4">
                <div className="space-y-2">
                  <label className="block text-white font-semibold text-sm">Your Branch</label>
                  <select
                    value={quickForm.branch}
                    onChange={(e) => setQuickForm({ ...quickForm, branch: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                    <option value="Electronics & Communication">Electronics & Communication</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-white font-semibold text-sm">Your Skills</label>
                  <input
                    type="text"
                    value={quickForm.skills}
                    onChange={(e) => setQuickForm({ ...quickForm, skills: e.target.value })}
                    placeholder="e.g., Python, JavaScript"
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-white font-semibold text-sm">Career Interests</label>
                  <input
                    type="text"
                    value={quickForm.interests}
                    onChange={(e) => setQuickForm({ ...quickForm, interests: e.target.value })}
                    placeholder="e.g., Web Development, AI/ML"
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    Get Suggestion
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setShowQuickForm(false)}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right - Hero Image */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl overflow-hidden border border-white/20">
              <img
                src="/images/hero-ai-students.png"
                alt="AI Career Guidance"
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose PathFinder AI?</h2>
          <p className="text-gray-400 text-lg">Smart career guidance tailored for Indian students</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-card p-8 space-y-4 hover:border-cyan-400/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">AI-Powered Matching</h3>
            <p className="text-gray-400">
              Our AI analyzes your branch, skills, and interests to suggest the most suitable career roles with precision.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-card p-8 space-y-4 hover:border-cyan-400/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Skill Gap Analysis</h3>
            <p className="text-gray-400">
              Identify gaps in your skillset and get a personalized learning roadmap to bridge them effectively.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card p-8 space-y-4 hover:border-cyan-400/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Internship Discovery</h3>
            <p className="text-gray-400">
              Find internship opportunities at top Indian companies with AI-powered matching based on your profile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 border-t border-white/10">
        <div className="glass-card p-12 text-center space-y-8 rounded-2xl border border-white/20">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Ready to Find Your Path?</h2>
            <p className="text-gray-400 text-lg">Start your journey towards a successful career today</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/career-guidance">
              <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 h-12 px-8 hover:shadow-lg hover:shadow-blue-500/50">
                Get Career Guidance
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/internships">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8">
                Explore Internships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container flex items-center justify-between text-gray-400 text-sm">
          <p>&copy; 2026 PathFinder AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
