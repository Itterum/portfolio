import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton } from "@suid/material";
import Logout from "@suid/icons-material/Logout";
import PersonAdd from "@suid/icons-material/PersonAdd";
import Settings from "@suid/icons-material/Settings";
import { createSignal } from "solid-js";
import AccountCircleIcon from '@suid/icons-material/AccountCircle'; // Импорт иконки аккаунта

export default function AccountMenu() {
  const [accountMenuOpen, setAccountMenuOpen] = createSignal(false);

  const handleClick = (event) => {
    setAccountMenuOpen(!accountMenuOpen());
  };

  const handleClose = () => {
    setAccountMenuOpen(false);
  };

  const [open, setOpen] = createSignal(false);

  const handleOpen = () => {
    setOpen(true);
    handleClose(); // Закрываем меню аккаунта при открытии модального окна
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <IconButton
          title="Account settings"
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={accountMenuOpen() ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={accountMenuOpen() ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 41,
              height: 41,
            }}
            src="avatar.svg"
          >
          </Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={accountMenuOpen() ? document.body : undefined}
        id="account-menu"
        open={accountMenuOpen()}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "#292727",
            color: "white",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            ["& .MuiAvatar-root"]: {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <MenuItem>
          <Avatar src="avatar.svg"/> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" sx={{color: "white",}}/>
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small"sx={{color: "white",}} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" sx={{color: "white",}}/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
