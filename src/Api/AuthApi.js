export const ForgotPasswordApi = async (email) => {
    const response = await fetch("https://your-backend.com/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  
    return response.json();
  };
  
  