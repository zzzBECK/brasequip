import Flag from "../../../Home/components/Flag";

interface ArtProps {
  flagMode: "light" | "dark";
}

export default function Art({ flagMode }: ArtProps) {
  return (
    <>
      <Flag text="Compromisso e Proteção Total" mode={flagMode} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <h2>EMPRESA REGISTRADA NO CREA-DF SOB O N.º 11727</h2>
        <p>
          Empresa e responsável técnico habilitados junto ao CREA, para
          desempenho das atividades de reforma e adequação, montagem, manutenção
          e desmontagem de equipamentos para elevação. Nosso compromisso com a
          excelência e a legalidade se reflete na emissão de ART para todos os
          serviços contratados. Este documento, essencial para a regulamentação
          da atividade profissional, valida a responsabilidade técnica sobre a
          execução dos serviços, reforçando a seriedade e o profissionalismo de
          nosso trabalho.
        </p>
        <p>
          Com a ART e o seguro de responsabilidade civil, você tem a garantia de
          que cada projeto será realizado com o máximo de segurança e
          confiabilidade. Este é o nosso compromisso: oferecer serviços que vão
          além da técnica, proporcionando uma experiência de confiança completa
          para nossos clientes.
        </p>
      </div>
    </>
  );
}
