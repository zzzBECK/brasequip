import { useState } from "react";
import Flag from "../Flag";
import {
  ButtonContainer,
  Column1,
  Column2,
  FormContainer,
  Input,
  TextArea,
  TitleContainer,
} from "./styles";
import Button from "../Button";

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
          <div>
            <label>Your Name</label>
            <div>
              <Input
                type="text"
                placeholder="Nome"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label>Your Email</label>
            <div>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div style={{ display: "none" }}>
            <label>Title</label>
            <div>
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <input type="hidden" name="subject" onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>Message</label>
            <div>
              <TextArea
                placeholder="Descrição"
                name="message"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <ButtonContainer>
              <Button type="submit" text="Enviar Pedido" />
            </ButtonContainer>
          </div>
        </form>
      </Column2>
    </FormContainer>
  );
}
