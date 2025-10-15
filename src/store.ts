import { type Song } from "./types/song";
import { create } from "zustand";

export const useSong = create(
  function (set): {
    song: Song | null,
    updateSong: (song: Song) => void
  } {
    return {
      song: null,
      updateSong: function (newSong: Song) {
        set({ song: newSong })
      }
    }
  }
)