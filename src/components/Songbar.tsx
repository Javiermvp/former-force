import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaStepForward } from 'react-icons/fa';
import { usePlayer } from '../context/PlayerContext';

export default function Songbar() {
  const { currentSong, isPlaying, togglePlay, playNext, playPrev } = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setprogress] = useState (0);
  const [duration, setduration] = useState (0);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

    const handleTimeUpdate =() => {
      if (audioRef.current) {
        setprogress(audioRef.current.currentTime);
        setduration(audioRef.current.duration || 0);
      }
    };

     const handleseek = (e. react.changeEvent<HTMLInputElement>) => {
      const newTime =parseFloat (e.target.value);
      if (audioRef.current) {
        audioRef.current.currentTime = newTime
        setprogress (newTime);
      }
        };

      if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg">
      <div>
        <h4 className="font-semibold">{currentSong.title}</h4>
        <p className="text-gray-400 text-sm">{currentSong.author}</p>
      </div>
       
       <div className="flex items-center space-x-4 text-2xl">
        <button onClick={playPrev}><faStepBackward /></button>
      <button onClick={togglePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
        <button onClick={playNext}><FaStepForward /></button>
      </div>
      
      <input
      type='range'
      min={0}
      max={duration || 0}
      value={progress}
      onChange={handleTimeUpdate}
      className='w-full accent-blue-500'

   ref={audioRef}
   onTimeUpdate={handleTimeUpdate}
   onEnded={playNext}
   />
    </div>
  );
}
