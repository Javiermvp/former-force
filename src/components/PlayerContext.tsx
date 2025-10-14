import React, { createContext, useState, useContext } from 'react';
import type { Song } from '../types/song';

interface PlayerContextType {
  songs: Song
  currentSong: Song | null;
  currentIndex: number
  isPlaying: boolean;
  setPlaylist: (Song: Song) => void;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrev: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [songs, setsongs] = useState<Song[]> ([]);
  const [currentIndex, setcurrentIndex] =useState (0)
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const setPlaylist =(songs: Song[]) => {
    setsongs (songs);
  }

  const playSong = (song: Song) => {
    const Index = songs.findIndex ((s) => s.id === song.id);
    setcurrentIndex (Index)
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const playNext = () => {
    if (songs.length=== 0) return
    const nextIndex = (currentIndex + 1) % songs.length;
    setcurrentIndex (nextIndex);
    setCurrentSong (songs[nextIndex]);
    setCurrentSong(true);
};

const playPrev = () =>{
  if (songs.length === 0) return
  const prevIndex = (currentIndex-1 + songs.length) % songs.length
  setcurrentIndex (prevIndex);
  setCurrentSong (songs[prevIndex]);
  setIsPlaying(true)
}

  return (
   <PlayerContext.Provider
   value={{
    songs,
  currentSong,
  currentIndex,
  isPlaying,
  setPlaylist
  playSong(song) 
  togglePlay,
  playNext,
  playPrev
  }}
  >





    <PlayerContext.Provider value={{ currentSong, isPlaying, playSong, togglePlay }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) throw new Error('usePlayer debe usarse dentro de un PlayerProvider');
  return context;
};
