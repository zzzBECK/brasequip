import { useState } from "react";
import Flag from "../Flag";
import { Column1, Column2, FormContainer, TitleContainer } from "./styles";

export default function Form() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "StaticForms - Contact Form",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "", // this will set replyTo of email to email address entered in the form
    accessKey: "1fc123ac-e012-422c-89a9-0df3f612a9a9", // get your access key from https://www.staticforms.xyz
  });

  const [, setResponse] = useState({
    type: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to us.",
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  return (
    <FormContainer>
      <Column1>
        <TitleContainer>
          <Flag text="Contato" />
          <h1 style={{ lineHeight: "1" }}>
            Solicite uma
            <br /> proposta
          </h1>
          <p>Soluções personalizadas e sob demanda</p>
        </TitleContainer>
      </Column1>
      <Column2>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label className="label">Your Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Your Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="field" style={{ display: "none" }}>
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <input type="hidden" name="subject" onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Your Message"
                name="message"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </Column2>
    </FormContainer>
  );
}
