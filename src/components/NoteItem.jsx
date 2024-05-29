"use client";
import { Paper, CardContent, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { styled } from "@mui/system";
import { useNoteStore } from "@/store/useNoteStore";

const NoteCard = styled(Paper)(({ theme }) => ({
  position: "relative",
  "&:hover": {
    outline: "1px solid black",
  },
  "&:hover .actions": {
    opacity: 1,
  },
  width: 300,
  borderRadius: "0.5rem",
  padding: theme.spacing(0.5),
  transition: "outline ease-in 0.3s",
}));

const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  opacity: 0,
  transition: "opacity 0.3s",
  padding: theme.spacing(0.75),
  gap: "0.5rem",
}));

const PinButton = styled(IconButton)(({ theme, isPinned }) => ({
  position: "absolute",
  top: theme.spacing(0.5),
  right: theme.spacing(0.5),
  opacity: isPinned ? 1 : 0,
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 1,
  },
}));

function LimitedLengthTypography({ content, ...props }) {
  let limitedContent =
    content.length < 603 ? content : content.substr(0, 500) + "...";
  return <Typography {...props}>{limitedContent}</Typography>;
}

export default function NoteItem({ note }) {
  const { pinNote, deleteNote } = useNoteStore();

  const handlePin = () => {
    pinNote(note.id);
  };
  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <NoteCard square={false} elevation={3}>
      <PinButton isPinned={note.isPinned} onClick={handlePin}>
        {note.isPinned ? (
          <PushPinIcon fontSize="small" />
        ) : (
          <PushPinOutlinedIcon fontSize="small" />
        )}
      </PinButton>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {note.title}
        </Typography>
        <LimitedLengthTypography
          variant="body2"
          color="text.secondary"
          content={note.content}
        />
      </CardContent>
      <Actions className="actions">
        <IconButton color="primary" size="small">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton color="error" size="small" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Actions>
    </NoteCard>
  );
}
