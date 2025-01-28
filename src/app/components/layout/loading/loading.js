import LinearProgress from "@mui/material/LinearProgress";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "90vh",
      }}
    >
      <LinearProgress sx={{ marginTop: "80px" }} />
    </div>
  );
};

export default Loading;
