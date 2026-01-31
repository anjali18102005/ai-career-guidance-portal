import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

/**
 * Career Recommendations Component
 * Design: Glassmorphism cards with gradient accents
 * 
 * Displays AI-recommended career paths based on user profile
 */

interface CareerRole {
  id: string;
  title: string;
  company?: string;
  matchScore: number;
  description: string;
  skills: string[];
  salary: string;
  color: string;
}

const recommendations: CareerRole[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Tech Companies',
    matchScore: 92,
    description: 'Build scalable applications and systems',
    skills: ['Python', 'JavaScript', 'System Design'],
    salary: '$80K - $150K',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: '2',
    title: 'Data Scientist',
    company: 'Analytics Teams',
    matchScore: 88,
    description: 'Analyze data and build ML models',
    skills: ['Python', 'Statistics', 'Machine Learning'],
    salary: '$90K - $160K',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'Product Teams',
    matchScore: 75,
    description: 'Lead product strategy and development',
    skills: ['Communication', 'Analytics', 'Leadership'],
    salary: '$100K - $180K',
    color: 'from-pink-400 to-red-500',
  },
];

export function CareerRecommendations() {
  return (
    <div className="space-y-4">
      {recommendations.map((role) => (
        <div key={role.id} className="glass-card p-6 space-y-4 group hover:border-white/40 transition-all">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <h4 className="text-lg font-bold text-white">{role.title}</h4>
              <p className="text-gray-400 text-sm">{role.company}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end mb-1">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className={`text-lg font-bold bg-gradient-to-r ${role.color} bg-clip-text text-transparent`}>
                  {role.matchScore}%
                </span>
              </div>
              <p className="text-xs text-gray-400">AI Match</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm">{role.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {role.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-300">
                {skill}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <span className="text-sm font-semibold text-cyan-400">{role.salary}</span>
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50 group"
            >
              Explore
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
