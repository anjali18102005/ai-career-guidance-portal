import { CheckCircle, Circle, Lock } from "lucide-react";

/**
 * Learning Roadmap Component
 * Design: Glassmorphism timeline with gradient progress
 * 
 * Displays learning milestones and progress tracking
 */

interface Milestone {
  id: string;
  month: number;
  title: string;
  description: string;
  completion: number;
  status: 'completed' | 'in-progress' | 'upcoming';
  skills: string[];
}

const milestones: Milestone[] = [
  {
    id: '1',
    month: 1,
    title: 'Python Basics',
    description: 'Learn Python fundamentals and syntax',
    completion: 100,
    status: 'completed',
    skills: ['Python', 'Variables', 'Functions'],
  },
  {
    id: '2',
    month: 2,
    title: 'Web Development',
    description: 'Master HTML, CSS, and JavaScript',
    completion: 75,
    status: 'in-progress',
    skills: ['React', 'HTML', 'CSS'],
  },
  {
    id: '3',
    month: 3,
    title: 'SQL & Databases',
    description: 'Learn database design and queries',
    completion: 40,
    status: 'in-progress',
    skills: ['SQL', 'PostgreSQL', 'Database Design'],
  },
  {
    id: '4',
    month: 4,
    title: 'JavaScript Advanced',
    description: 'Advanced JS concepts and frameworks',
    completion: 0,
    status: 'upcoming',
    skills: ['JavaScript', 'Node.js', 'APIs'],
  },
  {
    id: '5',
    month: 5,
    title: 'APIs & Backend',
    description: 'Build REST APIs and backend services',
    completion: 0,
    status: 'upcoming',
    skills: ['REST API', 'Express', 'Authentication'],
  },
  {
    id: '6',
    month: 6,
    title: 'Project Building',
    description: 'Build a full-stack project',
    completion: 0,
    status: 'upcoming',
    skills: ['Full Stack', 'Deployment', 'DevOps'],
  },
];

export function LearningRoadmap() {
  return (
    <div className="relative">
      {/* Timeline */}
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative flex gap-6">
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
              {/* Circle */}
              <div className="relative z-10">
                {milestone.status === 'completed' && (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                )}
                {milestone.status === 'in-progress' && (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50 animate-pulse">
                    <Circle className="w-6 h-6 text-white" />
                  </div>
                )}
                {milestone.status === 'upcoming' && (
                  <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Connecting Line */}
              {index < milestones.length - 1 && (
                <div
                  className="w-1 flex-1 mt-2 mb-2"
                  style={{
                    background: milestone.status === 'completed'
                      ? 'linear-gradient(180deg, #10b981 0%, rgba(16, 185, 129, 0.2) 100%)'
                      : milestone.status === 'in-progress'
                      ? 'linear-gradient(180deg, #06b6d4 0%, rgba(6, 182, 212, 0.2) 100%)'
                      : 'rgba(255, 255, 255, 0.1)',
                  }}
                ></div>
              )}
            </div>

            {/* Content Card */}
            <div className="flex-1 pb-6">
              <div
                className={`glass-card p-6 space-y-4 ${
                  milestone.status === 'upcoming' ? 'opacity-60' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white">Month {milestone.month}: {milestone.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{milestone.description}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      milestone.status === 'completed'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : milestone.status === 'in-progress'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}
                  >
                    {milestone.status === 'completed' && 'Completed'}
                    {milestone.status === 'in-progress' && 'In Progress'}
                    {milestone.status === 'upcoming' && 'Upcoming'}
                  </span>
                </div>

                {/* Progress Bar */}
                {milestone.status !== 'upcoming' && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-cyan-400 font-semibold">{milestone.completion}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${milestone.completion}%`,
                          background: 'linear-gradient(90deg, #06b6d4, #0ea5e9)',
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {milestone.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded text-xs bg-white/5 border border-white/10 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
