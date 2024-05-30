"use client";
import NoteItem from "./NoteItem";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

export default function NoteList({ notes }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </Masonry>
    </Box>
  );
}
