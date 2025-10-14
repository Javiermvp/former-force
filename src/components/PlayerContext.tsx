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
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
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
