"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useNoteStore } from "@/store/useNoteStore";
import { useRouter } from "next/navigation";

export default function NoteForm() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const { createNote } = useNoteStore();
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNote({
      title: formData.title,
      content: formData.content,
      isPinned: false,
      id: Date.now().toString(),
    });
    router.push("/");
    setFormData({ title: "", content: "" });
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "0.5rem",
        outline: "1px solid black",
        p: 4,
        width: 450
      }}
    >
      <Typography component="h2" variant="h4">
        Create Note
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="title"
              label="Note Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              multiline
              fullWidth
              id="content"
              label="Note Content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              minRows={8}
              maxRows={12}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create Note
        </Button>
      </Box>
    </Paper>
  );
}
