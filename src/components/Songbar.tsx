import React, { useEffect, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { usePlayer } from '../context/PlayerContext';

export default function Songbar() {
  const { currentSong, isPlaying, togglePlay } = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg">
      <div>
        <h4 className="font-semibold">{currentSong.title}</h4>
        <p className="text-gray-400 text-sm">{currentSong.author}</p>
      </div>

      <button onClick={togglePlay} className="text-2xl">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <audio ref={audioRef} />
    </div>
  );
}
