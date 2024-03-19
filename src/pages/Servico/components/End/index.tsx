import Flag from "../../../Home/components/Flag";

interface Props {
  flagMode: "light" | "dark";
}

export default function End({ flagMode }: Props) {
  return (
    <>
      <Flag text="Prevenção e Segurança na Construção Civil" mode={flagMode} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <h2>Teste de END</h2>
        <p>
          Nossa abordagem aos Ensaios Não Destrutivos (END) é baseada na
          prevenção e garantia da integridade estrutural de equipamentos de
          elevação. Com o uso de tecnologias avançadas e métodos comprovados,
          nossos especialistas realizam análises profundas para detectar
          qualquer irregularidade, promovendo a segurança e a longevidade dos
          seus equipamentos.
        </p>
        <p>
          Realizamos os Testes de END com Laudo assinado por profissional
          habilitado, conforme a NR-18.11.7, “e”:{" "}
          <i>
            laudos dos ensaios não destrutivos dos eixos dos motofreios e dos
            freios de emergência, sendo a periodicidade definida por
            profissional legalmente habilitado, obedecidos os prazos máximos
            previstos pelo fabricante no manual de manutenção do equipamento.
          </i>
        </p>
        <p>
          Os Ensaios Não Destrutivos (END), são técnicas de inspeção de peças e
          equipamentos que avaliam a existência de descontinuidades (mecanismos
          de falha) nas estruturas dos materiais sem danificá-los. Os testes são
          feitos diretamente nas peças que serão colocadas em serviço, não
          deixando dúvidas quanto a sua representatividade. Com a utilização dos
          (END) é possível, garantir a qualidade do produto, prevenir acidentes,
          perdas de vidas humanas, reduzir manutenções corretivas nos
          equipamentos. Utilizamos as técnicas de END, a seguir: ultrassom,
          partículas magnéticas e líquidos penetrantes.
        </p>
        <h2>Tecnologias Avançadas para Diagnóstico Preciso</h2>
        <p>
          Utilizamos três métodos principais de END, que permitem uma avaliação
          precisa e detalhada:
        </p>
        <p>
          - Ultrassom: Ideal para identificar falhas internas, este ensaio
          penetra profundamente nos materiais para revelar falhas ocultas.
        </p>
        <p>
          - Partículas Magnéticas: Este método é excelente para encontrar falhas
          intermediárias em materiais ferromagnéticos, destacando as menores
          fissuras.
        </p>
        <p>
          - Líquido Penetrante: Especialmente eficaz para detectar
          descontinuidades superficiais, mesmo as mais sutis, em uma variedade
          de materiais.
        </p>
        <h2>Conformidade e Excelência com Laudo Técnico</h2>
        <p>
          Em cumprimento à legislação do CPR-PE e normas vigentes, nossos
          serviços incluem a emissão de laudos técnicos detalhados. Estes
          documentos não apenas comprovam a qualidade dos testes realizados, mas
          também servem como uma garantia legal do comprometimento com as normas
          de segurança.
        </p>
        <h2>Comprometidos com a Prevenção de Acidentes</h2>
        <p>
          Através dos ensaios de END, somos capazes de prever e prevenir falhas
          que podem resultar em acidentes, salvaguardando não apenas os
          equipamentos mas, mais importante, a vida humana. Nossa meta é
          assegurar que todos os eixos de equipamentos de elevação operem dentro
          dos mais altos padrões de segurança e qualidade.
        </p>
        <h2>Sua Parceira na Manutenção Preditiva</h2>
        <p>
          Escolha nossos serviços de END e assegure a manutenção preditiva
          eficaz dos seus equipamentos de elevação. Com um histórico de
          excelência e inovação desde a origem do método, garantimos que sua
          obra esteja sempre à frente em segurança e conformidade técnica.
        </p>
      </div>
    </>
  );
}
