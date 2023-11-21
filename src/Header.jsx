import styled from "@suid/system/styled";
import MenuIcon from "@suid/icons-material/Menu";
import SearchIcon from "@suid/icons-material/Search";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Modal,
} from "@suid/material";
import { createSignal } from "solid-js";
import AccountMenu from "./AccountMenu";

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 20,
  outline: 0,
  border: 0,
  margin: "0 auto",
  width: "800px",
  height: "25px",
  position: "relative",
  '@media screen and (max-width: 700px)': {
    width: "30%",
  },
});

const MyComponent = styled("input")({
  color: "#292727",
  backgroundColor: "transparent",
  outline: 0,
  border: 0,
  width: "100%",
  fontSize: "18px",
});

const SearchButton = styled(IconButton)({
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  color: "#292727",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#292727",
});

function Header() {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Modal
        open={open()}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#292727",
            border: "2px solid #000",
            boxShadow: "24px",
            p: 4,
          }}
        >
          <p>Share link github page for mobile.</p>
          <img src="qr_link.png" alt="alert" style={{ width: "100%" }} />
        </Box>
      </Modal>

      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, width: 41, height: 41 }}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <SearchContainer>
            <MyComponent placeholder="Search…" />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchContainer>
          {/* <Avatar alt="Profile" src="avatar.svg" /> */}
          <AccountMenu />
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

export default Header;
