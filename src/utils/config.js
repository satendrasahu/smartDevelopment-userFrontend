const config = {
    apiUrl: process.env.REACT_APP_API_URL || "https://jsonplaceholder.typicode.com/",
    apiKey: process.env.REACT_APP_API_KEY,
    environment: process.env.REACT_APP_ENVIRONMENT,
    apiCallTimeOut : process.env.REACT_APP_APICALL_TIMEOUT || 5000
  };
  
  export default config;
  