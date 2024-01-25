import { useMemo, useState } from "react";
import Flag from "../../pages/Home/components/Flag";
import {
  ButtonContainer,
  Column1,
  Column2,
  FormContainer,
  Input,
  TextArea,
  TitleContainer,
} from "./styles";
import Button from "../../pages/Home/components/Button";

const formatPhoneNumber = (value) => {
  if (!value) return value;

  // Remove all non-numeric characters
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 3) return `(${phoneNumber}`;
  if (phoneNumberLength < 8)
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
    2,
    7
  )}-${phoneNumber.slice(7, 11)}`;
};

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
};

export default function Form() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "", // added phone field
    subject: "Brasequip - Contato",
    honeypot: "",
    message: "",
    replyTo: "",
    accessKey: "4f712f04-032e-4484-95eb-7598e2f20544",
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChange = (e) => {
    if (e.target.name === "phone") {
      const formattedPhoneNumber = formatPhoneNumber(e.target.value);
      setContact({ ...contact, phone: formattedPhoneNumber });
    } else {
      setContact({ ...contact, [e.target.name]: e.target.value });
    }
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (
      contact?.name?.length < 3 ||
      !contact.email ||
      contact?.phone?.length < 15 ||
      contact?.message?.length < 10
    ) {
      setResponse({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    // Validate email
    if (!validateEmail(contact.email)) {
      setResponse({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

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

        setContact({
          name: "",
          email: "",
          phone: "", // added phone field
          subject: "Brasequip - Contato",
          honeypot: "",
          message: "",
          replyTo: "",
          accessKey: "4f712f04-032e-4484-95eb-7598e2f20544",
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

  const canSubmit = useMemo(() => {
    return (
      contact?.name?.length < 3 ||
      !contact?.email ||
      contact?.phone?.length < 15 ||
      contact?.message?.length < 10
    );
  }, [contact]);

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
          <div style={{ display: "flex", gap: "4%" }}>
            <div style={{ width: "50%" }}>
              <label>Nome</label>
              <div>
                <Input
                  type="text"
                  placeholder="Nome"
                  value={contact.name}
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <label>Telefone</label>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={contact.phone} // updated to use phone field
                  name="phone" // updated to use phone field
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <label>Email</label>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={contact.email}
              name="email"
              onChange={handleChange}
              required
            />
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
            <label>Descrição</label>
            <div>
              <TextArea
                placeholder="Descrição"
                name="message"
                value={contact.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <ButtonContainer>
              <Button
                type="submit"
                text="Enviar Pedido"
                onClick={handleSubmit}
                disabled={canSubmit}
              />
            </ButtonContainer>
          </div>
        </form>
      </Column2>
    </FormContainer>
  );
}
