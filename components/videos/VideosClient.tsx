"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Play, Clock, Calendar } from "lucide-react";
import type { VideoItem } from "@/data/videos";

function VideoCard({
  video,
  onClick,
}: {
  video: VideoItem;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left bg-white rounded-2xl overflow-hidden
                 shadow-sm hover:shadow-lg border border-beige/60 hover:border-terracotta/30
                 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-beige/40">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Play overlay */}
        <div
          className="absolute inset-0 bg-dark-brown/30 group-hover:bg-dark-brown/15
                        flex items-center justify-center transition-colors duration-300"
        >
          <div
            className="flex items-center justify-center w-14 h-14 rounded-full
                          bg-white/90 group-hover:bg-terracotta group-hover:scale-110
                          shadow-lg transition-all duration-300"
          >
            <Play
              size={20}
              className="text-dark-brown group-hover:text-white ml-1 transition-colors duration-300"
              fill="currentColor"
            />
          </div>
        </div>

        {/* Duration badge */}
        <span
          className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md
                         bg-dark-brown/75 text-white text-xs font-mono font-medium
                         backdrop-blur-sm"
        >
          {video.duration}
        </span>

        {/* Tag badge */}
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full
                         bg-terracotta text-white text-[11px] font-semibold"
        >
          {video.tag}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3
          className="font-heading text-base font-semibold text-dark-brown leading-snug
                       group-hover:text-terracotta transition-colors duration-200 line-clamp-2"
        >
          {video.title}
        </h3>
        <div className="flex items-center gap-4 mt-2.5">
          <span className="flex items-center gap-1.5 text-xs text-dark-brown/45">
            <Calendar size={12} />
            {video.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-dark-brown/45">
            <Clock size={12} />
            {video.duration}
          </span>
        </div>
      </div>
    </button>
  );
}

function VideoModal({
  video,
  onClose,
}: {
  video: VideoItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-brown/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-3xl bg-dark-brown rounded-2xl overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex items-center justify-center
                     w-9 h-9 rounded-full bg-white/10 hover:bg-white/25
                     text-white transition-colors duration-150"
          aria-label="Закрыть"
        >
          <X size={18} />
        </button>

        {/* YouTube embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Video info */}
        <div className="px-5 py-4">
          <span
            className="inline-block px-2.5 py-0.5 rounded-full
                          bg-terracotta text-white text-[11px] font-semibold mb-2"
          >
            {video.tag}
          </span>
          <h2 className="font-heading text-lg font-bold text-white leading-snug">
            {video.title}
          </h2>
          <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1.5 text-xs text-white/45">
              <Calendar size={12} />
              {video.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/45">
              <Clock size={12} />
              {video.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideosClient({ videos }: { videos: VideoItem[] }) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={() => setSelectedVideo(video)}
          />
        ))}
      </div>

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
