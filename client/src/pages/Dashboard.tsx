import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Edit2, Download, Share2, Sparkles } from "lucide-react";
import { SkillGapChart } from "@/components/SkillGapChart";
import { CareerRecommendations } from "@/components/CareerRecommendations";
import { LearningRoadmap } from "@/components/LearningRoadmap";

/**
 * Student Dashboard Page
 * Design: Glassmorphism + Gradient Fusion
 * 
 * Sections:
 * - Profile summary card
 * - Career recommendations
 * - Skill gap analysis
 * - Learning roadmap
 */

export default function Dashboard() {
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
          <h1 className="text-white font-bold text-lg">My Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Download className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      <div className="container py-8 space-y-8">
        {/* Profile Summary Card */}
        <div className="glass-card p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">Welcome back, Alex!</h2>
              <p className="text-gray-400">Computer Science • 3rd Year • Indian Institute of Technology, Delhi</p>
            </div>
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50">
              <Edit2 className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Overall Match Score</p>
              <p className="text-2xl font-bold text-cyan-400">87%</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Skills Learned</p>
              <p className="text-2xl font-bold text-purple-400">12</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Learning Streak</p>
              <p className="text-2xl font-bold text-pink-400">24 days</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Internships Matched</p>
              <p className="text-2xl font-bold text-green-400">8</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Skill Gap Analysis */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skill Gap Chart */}
            <div className="glass-card p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  Skill Gap Analysis
                </h3>
                <Link href="/guidance">
                  <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                    View Details →
                  </Button>
                </Link>
              </div>
              <SkillGapChart />
            </div>

            {/* Career Recommendations */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Recommended Careers</h3>
              <CareerRecommendations />
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="glass-card p-6 space-y-3">
              <h4 className="font-bold text-white mb-4">Quick Actions</h4>
              <Link href="/guidance">
                <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Career Guidance
                </Button>
              </Link>
              <Link href="/internships">
                <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Find Internships
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                <Sparkles className="w-4 h-4 mr-2" />
                View Roadmap
              </Button>
            </div>

            {/* Recent Activity */}
            <div className="glass-card p-6 space-y-4">
              <h4 className="font-bold text-white">Recent Activity</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-white">Completed Python Module</p>
                    <p className="text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-white">Applied for Google Internship</p>
                    <p className="text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-white">Skill Assessment: 85%</p>
                    <p className="text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Roadmap Section */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-8">Your Learning Roadmap</h3>
          <LearningRoadmap />
        </div>
      </div>
    </div>
  );
}
