import Flag from "../../../Home/components/Flag";

export default function Manutencao() {
  return (
    <>
      <Flag text="Garantia de Performance e Segurança" mode="light" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <h2>Serviços de Manutenção Especializados</h2>
        <p>
          Nossos serviços de manutenção preventiva e corretiva são desenhados
          para minimizar o risco de paradas inesperadas e prolongar a vida útil
          dos seus equipamentos. Por meio de inspeções regulares e manutenção
          programada, prevenimos problemas antes que eles ocorram.
        </p>
        <p>
          Contamos com uma equipe técnica altamente qualificada, pronta para
          atender às suas necessidades com eficácia. Oferecemos diagnósticos
          precisos, reparos especializados e substituição de peças, utilizando
          apenas componentes originais para garantir a máxima performance.
        </p>
      </div>
    </>
  );
}
