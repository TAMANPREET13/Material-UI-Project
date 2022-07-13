import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";

// import { makeStyles } from "@mui/styles";
import { DeleteOutlined } from "@mui/icons-material";
import { blue, green, pink, yellow } from "@mui/material/colors";

// const useStyles = makeStyles({
//   avatar: {
//     background: (note) => {
//       if (note.category === "work") {
//         return yellow[700];
//       }
//       if (note.category === "money") {
//         return green[700];
//       }
//       if (note.category === "todos") {
//         return pink[700];
//       }
//       return blue[500];
//     },
//   },
// });

export default function NoteCard({ note, handleDelete }) {
  // const classes = useStyles(note);
  const ylow = yellow[700];
  const grn = green[500];
  const bl = blue[500];
  const pnk = pink[500];
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                backgroundColor:
                  note.category === "work"
                    ? ylow
                    : note.category === "money"
                    ? grn
                    : note.category === "todos"
                    ? pnk
                    : bl,
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
