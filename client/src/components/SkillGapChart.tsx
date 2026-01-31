/**
 * Skill Gap Chart Component
 * Design: Glassmorphism with gradient circular progress indicators
 * 
 * Displays skill proficiency levels with circular progress meters
 */

interface Skill {
  name: string;
  current: number;
  target: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', current: 85, target: 95, color: '#06b6d4' },
  { name: 'Data Analysis', current: 72, target: 90, color: '#a78bfa' },
  { name: 'Communication', current: 60, target: 85, color: '#ec4899' },
  { name: 'Leadership', current: 45, target: 80, color: '#10b981' },
];

function CircularProgress({ value, color }: { value: number; color: string }) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="transform -rotate-90">
      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="8"
      />
      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      <text
        x="60"
        y="65"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        className="transform rotate-90"
        style={{ transformOrigin: '60px 60px' }}
      >
        {value}%
      </text>
    </svg>
  );
}

export function SkillGapChart() {
  return (
    <div className="space-y-8">
      {/* Circular Progress Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center space-y-3">
            <CircularProgress value={skill.current} color={skill.color} />
            <div className="text-center">
              <p className="text-white font-semibold text-sm">{skill.name}</p>
              <p className="text-gray-400 text-xs">Target: {skill.target}%</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="space-y-4">
        <h4 className="text-white font-semibold mb-4">Learning Progress</h4>
        {skills.map((skill) => (
          <div key={`bar-${skill.name}`} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">{skill.name}</span>
              <span className="text-gray-400 text-xs">{skill.current}% → {skill.target}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${skill.current}%`,
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Gap Summary */}
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <p className="text-gray-300 text-sm">
          <span className="text-cyan-400 font-semibold">Average Gap: 28%</span>
          {' '}• Complete your learning roadmap to close the gap and unlock more internship opportunities.
        </p>
      </div>
    </div>
  );
}
