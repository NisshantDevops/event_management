import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sendEmailVerificationRequest } from "../../Api/sendEmailVerificationRequest";
import { toast } from "react-toastify";

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) return;
      
      const response = await sendEmailVerificationRequest(token);
      setMessage(response.message);

      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="text-center mt-5">
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
}

export default VerifyEmail;
