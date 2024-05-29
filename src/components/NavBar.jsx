"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [elevate, setElevate] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AppBar
      component="nav"
      position="sticky"
      elevation={elevate ? 4 : 0}
      sx={{ backgroundColor: "white", color: "blue" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "block" }}
        >
          MyNotes
        </Typography>
        <Box sx={{ display: "block" }}>
          <Button sx={{ px: "1rem" }}>
            <Link
              href="/"
              passHref
              style={{ textDecoration: "none", color: "blue" }}
            >
              All
            </Link>
          </Button>
          <Button sx={{ px: "1rem" }}>
            <Link
              href="/pinned"
              passHref
              style={{ textDecoration: "none", color: "blue" }}
            >
              Pinned
            </Link>
          </Button>
          <Button sx={{ px: "1rem" }}>
            <Link
              href="/create"
              passHref
              style={{ textDecoration: "none", color: "blue" }}
            >
              Create
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
