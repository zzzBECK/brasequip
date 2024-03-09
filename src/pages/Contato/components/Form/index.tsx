import { useState } from "react";
import Flag from "../../../Home/components/Flag";
import { Modal } from "./components/Modal";
import {
  ButtonContainer,
  Column1,
  Column2,
  FormContainer,
  Input,
  TextArea,
  TitleContainer,
} from "./styles";
import Button from "../../../Home/components/Button";

const formatPhoneNumber = (value: string) => {
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

const validateEmail = (email: string) => {
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
    accessKey: "73bf9903-cf45-4178-b35a-09ba82bc5ce8",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [, setResponse] = useState({
    type: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
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
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();

    e.preventDefault();
    const newErrors = { name: "", email: "", phone: "", message: "" };

    // Validação de campos individuais com mensagens de erro específicas
    if (contact.name.length < 3) {
      newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
    }
    if (!validateEmail(contact.email)) {
      newErrors.email = "Por favor, insira um endereço de e-mail válido.";
    }
    if (contact.phone.length < 15) {
      newErrors.phone = "Por favor, insira um número de telefone válido.";
    }
    if (contact.message.length < 10) {
      newErrors.message = "A mensagem deve ter pelo menos 10 caracteres.";
    }

    setErrors(newErrors);

    // Verifique se há algum erro antes de enviar
    if (Object.values(newErrors).some((error) => error !== "")) {
      return; // Interrompe a submissão se houver erros
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

        setShowSuccessModal(true);

        setContact({
          name: "",
          email: "",
          phone: "", // added phone field
          subject: "Brasequip - Contato",
          honeypot: "",
          message: "",
          replyTo: "",
          accessKey: "73bf9903-cf45-4178-b35a-09ba82bc5ce8",
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
        <TitleContainer data-aos="fade-zoom-in" data-aos-duration="800">
          <Flag text="Contato" />
          <h1 style={{ lineHeight: "1" }}>Entre em Contato</h1>
          <p>Solicite uma proposta, canal de dúvidas e mais serviços</p>
        </TitleContainer>
      </Column1>
      <Column2>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit={handleSubmit}
          data-aos="fade-zoom-in"
          data-aos-duration="800"
          style={{ width: "80%" }}
        >
          <div
            style={{
              display: "flex",
              gap: "4%",
            }}
          >
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
                <div style={{ fontSize: "0.8rem", color: "red" }}>
                  {errors.name}
                </div>
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <label>Telefone</label>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={contact.phone}
                  name="phone"
                  onChange={handleChange}
                  required
                />
                <div style={{ fontSize: "0.8rem", color: "red" }}>
                  {errors.phone}
                </div>
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
            <div style={{ fontSize: "0.8rem", color: "red" }}>
              {errors.email}
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
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "red",
                  marginBottom: "1em",
                }}
              >
                {errors.message}
              </div>
            </div>
          </div>
          <div>
            <ButtonContainer>
              <Button
                type="submit"
                text="Enviar Pedido"
                onClick={handleSubmit}
              />
            </ButtonContainer>
          </div>
        </form>
      </Column2>
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </FormContainer>
  );
}
