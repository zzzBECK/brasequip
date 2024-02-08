import Button from "../../../../pages/Home/components/Button";
import theme from "../../../../theme/theme";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: IModal) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: theme.colors.darkBlue,
          padding: "20px",
          borderRadius: "5px",
          width: "300px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2>Formulário Enviado!</h2>
        <p>Seu formulário foi enviado com sucesso.</p>
        <Button onClick={onClose} text="Fechar" />
      </div>
    </div>
  );
}
