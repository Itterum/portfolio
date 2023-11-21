import styled from "@suid/system/styled";
import MenuIcon from "@suid/icons-material/Menu";
import SearchIcon from "@suid/icons-material/Search";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Avatar,
} from "@suid/material";

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
  color: "darkslategray",
  backgroundColor: "transparent",
  outline: 0,
  border: 0,
  width: "100%",
  // marginRight: "40px",
});

const SearchButton = styled(IconButton)({
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  color: "black",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "black",
});

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <SearchContainer>
            <MyComponent placeholder="Search…" />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchContainer>
          <Avatar alt="Profile" src="avatar.svg" />
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

export default Header;
