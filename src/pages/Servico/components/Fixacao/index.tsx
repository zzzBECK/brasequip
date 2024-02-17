import Flag from "../../../Home/components/Flag";

export default function Fixacao() {
  return (
    <>
      <Flag
        text="Projeto de Fixação: Segurança e Conformidade Técnica"
        mode="light"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <h2>Engenharia Especializada em Projetos de Fixação</h2>
        <p>
          Nossos engenheiros são especializados em desenvolver projetos de
          fixação detalhados, que atendem às especificações técnicas de cada
          obra. Combinamos conhecimento técnico com experiência prática para
          entregar projetos que asseguram a integridade e a durabilidade das
          instalações.
        </p>
        <h2>Emissão de Laudos ART e Análises Estruturais</h2>
        <p>
          Acompanhando os projetos de fixação, emitimos laudos de Anotação de
          Responsabilidade Técnica (ART) e realizamos análises estruturais
          completas. Estes documentos são essenciais para a validação da
          segurança do projeto e para o cumprimento das normas técnicas e
          legislações vigentes.
        </p>
      </div>
    </>
  );
}
