import NoteForm from "@/components/NoteForm";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <NoteForm />
    </Box>
  );
}
