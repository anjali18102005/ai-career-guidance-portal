import { Star } from 'lucide-react';
import { useState } from 'react';

/**
 * ProficiencyTracker Component
 * Design: Interactive star rating system with visual feedback
 * 
 * Features:
 * - 5-star rating system
 * - Hover effects for better UX
 * - Proficiency level labels
 * - Color-coded feedback
 */

interface ProficiencyTrackerProps {
  skill: string;
  onRatingChange?: (rating: number) => void;
  initialRating?: number;
}

const proficiencyLabels: Record<number, string> = {
  0: 'Not Started',
  1: 'Beginner',
  2: 'Elementary',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Expert',
};

const proficiencyColors: Record<number, string> = {
  0: 'text-gray-400',
  1: 'text-red-400',
  2: 'text-orange-400',
  3: 'text-yellow-400',
  4: 'text-blue-400',
  5: 'text-green-400',
};

export default function ProficiencyTracker({
  skill,
  onRatingChange,
  initialRating = 0,
}: ProficiencyTrackerProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
    onRatingChange?.(value);
  };

  const displayRating = hoverRating || rating;

  return (
    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all">
      <div className="flex-1">
        <p className="text-white font-semibold">{skill}</p>
        <p className="text-gray-400 text-xs mt-1">{proficiencyLabels[displayRating]}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="transition-transform hover:scale-110 focus:outline-none"
            >
              <Star
                className={`w-5 h-5 transition-all ${
                  star <= displayRating
                    ? `fill-current ${proficiencyColors[displayRating]}`
                    : 'text-gray-600'
                }`}
              />
            </button>
          ))}
        </div>

        {rating > 0 && (
          <span className="ml-2 px-2 py-1 rounded text-xs font-semibold bg-white/10 text-cyan-300 border border-cyan-500/30">
            {rating}/5
          </span>
        )}
      </div>
    </div>
  );
}
