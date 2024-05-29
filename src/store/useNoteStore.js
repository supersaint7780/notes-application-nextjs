import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const noteStore = (set) => ({
  notes: [],
  createNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  deleteNote: (noteId) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== noteId),
    })),
  pinNote: (noteId) =>
    set((state) => ({
      notes: state.notes.map((note) => {
        if (note.id === noteId) {
          return {
            ...note,
            isPinned: !note.isPinned,
          };
        } else {
          return note;
        }
      }),
    })),
});

export const useNoteStore = create(
  persist(devtools(noteStore), { name: "note-storage" })
);
