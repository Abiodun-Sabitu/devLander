import emailjs from "@emailjs/browser";
import { useState } from "react";

export const useSendMail = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const sendMail = async (e, templateParams, clearContactFormData) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Access SERVICE_ID from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Access TEMPLATE_ID from .env
        templateParams, // Form data
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Access PUBLIC_KEY from .env
      );
      if (res.status === 200) {
        setResponse("Message successfully sent");
        clearContactFormData();
      }
    } catch (err) {
      console.log({ err: err });
      setError("Failed to send, pls try again later");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return { sendMail, loading, response, error, setError, setResponse };
};
