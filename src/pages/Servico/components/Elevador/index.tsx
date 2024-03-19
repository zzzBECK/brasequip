import Flag from "../../../Home/components/Flag";

interface ElevadorProps {
  flagMode: "light" | "dark";
}

export default function Elevador({ flagMode }: ElevadorProps) {
  return (
    <>
      <Flag text="Elevadores Cremalheira" mode={flagMode} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <h2>Serviço Completo de Elevador Cremalheira</h2>
        <p>
          Oferecemos soluções completas em Elevadores Cremalheira, projetados
          para otimizar a logística e a segurança em canteiros de obras. Nossos
          equipamentos modernos são ideais para o transporte vertical de
          materiais e pessoal, com ênfase na eficiência e na segurança.
        </p>
        <p>
          Com uma equipe de profissionais especializados, garantimos a
          instalação, manutenção e assistência técnica, assegurando operações
          seguras e ininterruptas. Escolha nossa expertise para elevadores de
          cremalheira e eleve a produtividade do seu projeto.
        </p>
      </div>
    </>
  );
}
