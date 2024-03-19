import Flag from "../../../Home/components/Flag";

interface MontagemProps {
  flagMode: "light" | "dark";
}

export default function Montagem({ flagMode }: MontagemProps) {
  return (
    <>
      <Flag text="Soluções Completas em Elevação" mode={flagMode} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <h2>Variedade em Equipamentos de Elevação</h2>
        <p>
          Com mais de duas décadas de atuação no mercado, nossa empresa é
          sinônimo de excelência em serviços de montagem e desmontagem de
          máquinas e equipamentos para elevação. Entendemos a complexidade e a
          importância de cada projeto e, por isso, oferecemos um portfólio
          abrangente que inclui venda, locação e manutenção, garantindo soluções
          integradas que atendem às necessidades específicas de cada cliente.
        </p>
        <p>
          Nossa gama de equipamentos inclui andaimes Fachadeiro e Tubular,
          Bandejas do Tipo Aparalixo, Elevadores de Obra do Tipo Cremalheira,
          Gruas e Mini-Gruas, além de Plataformas Elevatórias Articuladas. Todos
          são projetados para oferecer eficiência e segurança em sua obra.
        </p>
      </div>
    </>
  );
}
