import Flag from "../../../Home/components/Flag";

interface LocacaoProps {
  flagMode: "light" | "dark";
}

export default function Locacao({ flagMode }: LocacaoProps) {
  return (
    <>
      <Flag
        text="Soluções Completas em Locação de Equipamentos"
        mode={flagMode}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <h2>Locação de Equipamentos de Elevação e Movimentação</h2>
        <p>
          Oferecemos uma ampla gama de máquinas e equipamentos para locação,
          garantindo soluções eficientes para seus projetos de elevação e
          movimentação. Com equipamentos modernos e um serviço de suporte
          técnico especializado, asseguramos a máxima segurança e performance em
          todas as operações.
        </p>
        <p>
          Nossa frota inclui opções para atender às mais diversas necessidades,
          desde pequenos projetos até grandes construções. Comprometidos com a
          excelência, todos os nossos equipamentos são inspecionados
          regularmente para garantir sua confiabilidade e eficiência.
        </p>
      </div>
    </>
  );
}
