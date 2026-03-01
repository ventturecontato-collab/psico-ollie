import { useState } from 'react';
import { ChevronDown, ChevronUp, Play, ExternalLink } from 'lucide-react';
import { youtubeVideos } from '../data/youtubeVideos';
import type { VideoCategory } from '../data/youtubeVideos';

function VideoCategoryCard({ category }: { category: VideoCategory }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-[#2f3436] border border-[#444444] rounded-xl overflow-hidden transition-all hover:border-[#6c5ce7]/50"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <Play className="w-5 h-5 text-[#6c5ce7] shrink-0" />
          <span className="font-semibold text-[#e5e5e5] text-left">{category.subject}</span>
          <span className="text-[#6e6e6e] text-xs">{category.videos.length} vídeos</span>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-[#a3a3a3] shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#a3a3a3] shrink-0" />
        )}
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-2 animate-fade-in">
          {category.videos.map((video, i) => (
            <a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1d23] hover:bg-[#6c5ce7]/10 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0">
                <Play className="w-4 h-4 text-red-400" />
              </div>
              <span className="text-[#a3a3a3] text-sm group-hover:text-[#e5e5e5] transition-colors flex-1">
                {video.title}
              </span>
              <ExternalLink className="w-4 h-4 text-[#6e6e6e] group-hover:text-[#6c5ce7] transition-colors shrink-0" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function VideoSection() {
  return (
    <div className="space-y-3">
      {youtubeVideos.map((category, i) => (
        <VideoCategoryCard key={i} category={category} />
      ))}
    </div>
  );
}
