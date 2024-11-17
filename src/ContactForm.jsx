import { useState } from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
import { useSendMail } from "./useSendMail";
function ContactForm({ isContactFormVisible, setContactFormVisibility }) {
  const { sendMail, loading, response, error, setError, setResponse } =
    useSendMail();
  const [contactFormData, setContactFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const clearContactFormData = () =>
    setContactFormData({
      from_name: "",
      reply_to: "",
      message: "",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const templateParams = contactFormData;

  const handleSubmit = (e) => {
    sendMail(e, templateParams, clearContactFormData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={isContactFormVisible ? "contact_form" : ""}
        style={
          isContactFormVisible
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        <div
          type="button"
          className="close_btn"
          onClick={() => {
            setContactFormVisibility(false);
            clearContactFormData();
            setError(null);
            setResponse(null);
          }}
        >
          close
        </div>
        <input
          type="text"
          name="from_name"
          placeholder="John Doe"
          required
          onChange={handleChange}
          value={contactFormData.from_name}
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Johdoe@gmail.com"
          required
          onChange={handleChange}
          value={contactFormData.reply_to}
        />
        <textarea
          name="message"
          required
          rows={4}
          onChange={handleChange}
          value={contactFormData.message}
          placeholder="Hello! Biodun, can we talk over a cup of coffee?."
        ></textarea>
        {response && (
          <div className="success_message">
            <BiSolidErrorCircle fill="green" />
            {response}
          </div>
        )}

        {error && (
          <div className="error_message">
            <BiSolidErrorCircle fill="red" />
            {error}
          </div>
        )}
        {/* <div style={{ color: "white" }}>
          {error ? error : response ? response : ""}
        </div> */}
        <button type="submit">{loading ? "Sending..." : "Send"}</button>
      </form>
    </>
  );
}

export default ContactForm;
