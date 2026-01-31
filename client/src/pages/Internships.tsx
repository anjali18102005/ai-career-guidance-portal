import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Search, Filter, MapPin, DollarSign, Calendar, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Internship Discovery Page
 * Design: Glassmorphism with interactive filters and AI match scores
 * 
 * Features:
 * - Internship listing cards
 * - Filter by domain, location, stipend, duration
 * - AI match score indicators
 * - Skill gap suggestions
 */

interface Internship {
  id: string;
  company: string;
  title: string;
  location: string;
  stipend: string;
  duration: string;
  domain: string;
  matchScore: number;
  description: string;
  skills: string[];
  missingSkills: string[];
}

const internships: Internship[] = [
  {
    id: '1',
    company: 'Google India',
    title: 'Software Engineering Intern',
    location: 'Bangalore, Karnataka',
    stipend: '₹1,50,000/month',
    duration: '3 months',
    domain: 'Software Development',
    matchScore: 92,
    description: 'Build scalable systems and work with cutting-edge technologies',
    skills: ['Python', 'JavaScript', 'System Design'],
    missingSkills: ['Go', 'Kubernetes'],
  },
  {
    id: '2',
    company: 'Microsoft India',
    title: 'Data Science Intern',
    location: 'Hyderabad, Telangana',
    stipend: '₹1,80,000/month',
    duration: '4 months',
    domain: 'Data Science',
    matchScore: 85,
    description: 'Work on ML models and data analysis projects',
    skills: ['Python', 'Statistics', 'SQL'],
    missingSkills: ['TensorFlow', 'Apache Spark'],
  },
  {
    id: '3',
    company: 'Amazon India',
    title: 'Backend Engineer Intern',
    location: 'Mumbai, Maharashtra',
    stipend: '₹1,70,000/month',
    duration: '3 months',
    domain: 'Backend Development',
    matchScore: 88,
    description: 'Develop backend services and APIs',
    skills: ['Java', 'AWS', 'Microservices'],
    missingSkills: ['Docker', 'AWS Lambda'],
  },
  {
    id: '4',
    company: 'Flipkart',
    title: 'Frontend Engineer Intern',
    location: 'Bangalore, Karnataka',
    stipend: '₹1,60,000/month',
    duration: '3 months',
    domain: 'Frontend Development',
    matchScore: 78,
    description: 'Build user interfaces for millions of users',
    skills: ['React', 'JavaScript', 'CSS'],
    missingSkills: ['GraphQL', 'TypeScript'],
  },
  {
    id: '5',
    company: 'Paytm',
    title: 'Mobile Developer Intern',
    location: 'Noida, Uttar Pradesh',
    stipend: '₹1,40,000/month',
    duration: '3 months',
    domain: 'Mobile Development',
    matchScore: 72,
    description: 'Develop mobile applications for fintech',
    skills: ['React Native', 'JavaScript', 'iOS'],
    missingSkills: ['Flutter', 'Swift'],
  },
  {
    id: '6',
    company: 'Infosys',
    title: 'AI/ML Intern',
    location: 'Pune, Maharashtra',
    stipend: '₹1,50,000/month',
    duration: '4 months',
    domain: 'AI/ML',
    matchScore: 65,
    description: 'Work on AI and machine learning projects',
    skills: ['Python', 'TensorFlow', 'Deep Learning'],
    missingSkills: ['PyTorch', 'Computer Vision'],
  },
];

export default function Internships() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedInternship, setSelectedInternship] = useState<string | null>(null);

  const domains = ['All', 'Software Development', 'Data Science', 'Backend Development', 'Frontend Development', 'Mobile Development', 'AI/ML'];

  const filteredInternships = internships.filter((internship) => {
    const matchesSearch = internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = selectedDomain === 'All' || internship.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  const selectedInternshipData = internships.find((i) => i.id === selectedInternship);

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
          <h1 className="text-white font-bold text-lg">Internship Discovery</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      <div className="container py-8">
        {/* Search and Filters */}
        <div className="glass-card p-6 space-y-4 mb-8">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search companies or roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          {/* Domain Filter */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Filter className="w-4 h-4" />
              Filter by Domain
            </div>
            <div className="flex flex-wrap gap-2">
              {domains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedDomain === domain
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                      : 'bg-white/10 border border-white/20 text-gray-300 hover:border-white/40'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Internship List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredInternships.length === 0 ? (
              <div className="glass-card p-12 text-center space-y-4">
                <p className="text-gray-400">No internships found matching your criteria</p>
              </div>
            ) : (
              filteredInternships.map((internship) => (
                <div
                  key={internship.id}
                  onClick={() => setSelectedInternship(internship.id)}
                  className={`glass-card p-6 cursor-pointer transition-all ${
                    selectedInternship === internship.id
                      ? 'border-cyan-400 bg-white/15'
                      : 'hover:border-white/40'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{internship.company}</h3>
                      <p className="text-gray-300 font-semibold mt-1">{internship.title}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end mb-1">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {internship.matchScore}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">AI Match</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-3 gap-3 mb-4 py-4 border-t border-b border-white/10">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{internship.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{internship.stipend}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">{internship.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">{internship.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-300 border border-green-500/30">
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Details Panel */}
          <div>
            {!selectedInternshipData ? (
              <div className="glass-card p-8 flex flex-col items-center justify-center h-96 text-center space-y-4">
                <Zap className="w-16 h-16 text-cyan-400 mx-auto opacity-50" />
                <p className="text-gray-400">Select an internship to view details</p>
              </div>
            ) : (
              <div className="glass-card p-6 space-y-6 sticky top-24">
                {/* Company Header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{selectedInternshipData.company}</h3>
                  <p className="text-cyan-400 font-semibold">{selectedInternshipData.title}</p>
                </div>

                {/* Match Score */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 space-y-2">
                  <p className="text-gray-400 text-sm">AI Match Score</p>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{selectedInternshipData.matchScore}%</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Great Match!</p>
                      <p className="text-gray-400 text-xs">Based on your profile</p>
                    </div>
                  </div>
                </div>

                {/* Missing Skills */}
                {selectedInternshipData.missingSkills.length > 0 && (
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 space-y-3">
                    <p className="text-gray-400 text-sm font-semibold">Skills to Learn</p>
                    <div className="space-y-2">
                      {selectedInternshipData.missingSkills.map((skill) => (
                        <div key={skill} className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                          <span className="text-gray-300 text-sm">{skill}</span>
                          <span className="text-xs text-yellow-400">Learn</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    Prepare for Interview
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
