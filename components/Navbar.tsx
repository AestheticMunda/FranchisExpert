import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Link,
} from "@mui/material";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{ height: "100px", display: "flex", alignItems: "center" }}
    >
      <div className="bg-black border-b-2 border-yellow-500 w-full">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ height: "100px", display: "flex", alignItems: "center" }}
          >
            {/* Logo */}
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                marginLeft: "30px",
                fontSize: 30,
                fontWeight: 800,
                fontFamily: "serif",
              }}
            >
              <Image
                src={"/Multi_Bee_final_logo.png"}
                alt={"logo"}
                width={200}
                height={200}
              />
            </Typography>

            {/* Navigation Links */}
            <nav className="flex justify-evenly w-3/6">
              <Link
                href="/"
                color="white"
                underline="none"
                sx={{ margin: 1, "&:hover": { color: "#facc15" } }}
              >
                Home
              </Link>
              <Link
                href="/expertise"
                color="white"
                underline="none"
                sx={{ margin: 1, "&:hover": { color: "#facc15" } }}
              >
                Expertise
              </Link>
              <Link
                href="/about"
                color="white"
                underline="none"
                sx={{ margin: 1, "&:hover": { color: "#facc15" } }}
              >
                About Us
              </Link>
              <Link
                href="/clients"
                color="white"
                underline="none"
                sx={{ margin: 1, "&:hover": { color: "#facc15" } }}
              >
                Clients
              </Link>
              <Link
                href="/services"
                color="white"
                underline="none"
                sx={{ margin: 1, "&:hover": { color: "#facc15" } }}
              >
                Services
              </Link>
              <Link
                href="/contact"
                color="white"
                underline="none"
                sx={{ margin: 1, "&:hover": { color: "#facc15" } }}
              >
                Contact Us
              </Link>
            </nav>

            {/* Call to Action Button */}
            {/* <Button variant="contained" color="primary" sx={{ marginLeft: 2 }}>
            Get Started
          </Button> */}
          </Toolbar>
        </Container>
      </div>
    </AppBar>
  );
};

export default Navbar;
