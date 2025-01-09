import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// Default configuration for Axios
const axiosConfig = {
  baseURL: process.env.API_BASE_URL || "https://api.example.com", // Replace with your API base URL
  timeout: 15000, // 15 seconds timeout
  headers: {
    "Content-Type": "application/json",
    "x-request-id": uuidv4(), // Unique request ID for tracking
  },
};

// Global instance
const axiosInstance = axios.create(axiosConfig);

// Success Handler
const handleSuccess = (response) => {
  console.log("Request Successful:", response.config.url);
  return {
    success: true,
    status: response.status,
    data: response.data,
    message: response.data?.message || "Request completed successfully.",
  };
};

// Error Handler
const handleError = (error) => {
  let message = "An unexpected error occurred.";
  let status = 0;

  if (axios.isCancel(error)) {
    message = "Request was canceled.";
  } else if (error.response) {
    // Server-side error
    status = error.response.status;
    message =
      error.response.data?.message ||
      {
        400: "Invalid request. Please verify the data.",
        401: "Unauthorized access. Please log in.",
        403: "Access forbidden. You don't have permission.",
        404: "Resource not found.",
        429: "Too many requests. Please slow down.",
        500: "Server error. Try again later.",
      }[status] ||
      `Unexpected error (Status ${status}).`;
  } else if (error.request) {
    // Network issue
    message = "No response from server. Please check your internet connection.";
  } else {
    // Request setup or other issues
    message = error.message || "Request setup failed.";
  }

  console.error(`Request Failed: ${message}`);
  return {
    success: false,
    status,
    message,
  };
};

// Prevent brute-force or rapid requests
let requestTimestamps = [];
const preventRapidRequests = (uri) => {
  const now = Date.now();
  requestTimestamps = requestTimestamps.filter((timestamp) => now - timestamp < 10000); // Last 10 seconds
  requestTimestamps.push(now);

  if (requestTimestamps.length > 10) {
    throw new Error("Too many rapid requests. Please slow down.");
  }

  console.log("Request allowed:", uri);
};

// Core Axios Service
const axiosInstanceService = async (method, uri, data = {}, config = {}) => {
  try {
    preventRapidRequests(uri); // Check for rapid-fire attacks

    const response = await axiosInstance({
      method,
      url: uri,
      data: method === "GET" ? undefined : data,
      params: method === "GET" ? data : undefined,
      ...config,
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

// Exported Axios service
export default axiosInstanceService;
