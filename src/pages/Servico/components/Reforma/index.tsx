import Flag from "../../../Home/components/Flag";

interface ReformaProps {
  flagMode: "light" | "dark";
}

export default function Reforma({ flagMode }: ReformaProps) {
  return (
    <>
      <Flag text="Qualidade e Confiabilidade em Elevação" mode={flagMode} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <h2>Especialistas em Renovação de Elevadores e Gruas</h2>
        <p>
          Nosso expertise se estende à reforma completa de elevadores e gruas,
          abrangendo desde a substituição de componentes até atualizações
          tecnológicas. Com técnicas avançadas e peças de alta qualidade,
          revitalizamos equipamentos para que eles operem como novos.
        </p>
        <p>
          Além de reparos e melhorias, nossa equipe se dedica a adequar seus
          elevadores e gruas às normas de segurança mais recentes. Com a
          reforma, seu equipamento não apenas ganha em desempenho, mas também em
          conformidade regulatória, proporcionando tranquilidade e segurança aos
          operadores e gestores de projeto.
        </p>
      </div>
    </>
  );
}
