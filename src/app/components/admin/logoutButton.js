import { useAuthContext } from "../context/authContext";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";

const LogoutButton = () => {
  const { logoutUser } = useAuthContext();
  return (
    <>
      <Button
        variant="contained"
        sx={{ height: "35px" }}
        startIcon={<LogoutIcon />}
        onClick={() => logoutUser()}
      >
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
