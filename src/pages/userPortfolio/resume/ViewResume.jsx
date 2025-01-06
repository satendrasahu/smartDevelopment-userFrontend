import React, { useState } from "react";
import { CircularProgress, Typography, Snackbar, Box } from "@mui/material";

const ResumeViewer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const resumeUrl =
    "https://docs.google.com/document/d/18mjXZKZEbNvyRWQop7WlNwar7iF3sS7rzKjTi9dny-4/export?format=pdf";

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Loading Indicator */}
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Loading your resume...</Typography>
        </Box>
      )}

      {/* Error Message */}
      {error && (
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setError(false)}
          message="Failed to load the resume. Please try again later."
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      )}

      {/* PDF Viewer */}
      <embed
        src={resumeUrl}
        type="application/pdf"
        width="100%"
        height="100%"
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: loading || error ? "none" : "block" }}
      />
    </Box>
  );
};

export default ResumeViewer;
