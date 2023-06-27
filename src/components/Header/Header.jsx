import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

export const Header = () => {
  const handleLogout = () => {
    console.log("Click logout!");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 0,
              alignItems: "center",
              mr: 2,
              display: { xs: "none", md: "flex" },

              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <SendOutlinedIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            TELEGRAM ATTACK
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 0,
              alignItems: "center",

              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <SendOutlinedIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            TELEGRAM ATTACK
          </Typography>

          <Box sx={{ ml: "auto" }}>
            <Tooltip title="Logout">
              <IconButton onClick={handleLogout} sx={{ p: 0 }}>
                <LogoutIcon
                  sx={{
                    display: "flex",
                    fontSize: 36,
                    color: "rgb(255, 255, 255)",
                    mr: 0,
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
