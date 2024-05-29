"use client";
import NoteList from "@/components/NoteList";
import { useNoteStore } from "@/store/useNoteStore";

export default function Page() {
  const { notes } = useNoteStore();

  return <NoteList notes={notes.filter((note) => note.isPinned)} />;
}
