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
          A manutenção preventiva envolve mensalmente a checagem e testes de
          todos os itens de segurança do equipamento, parte estrutural, mecânica
          e elétrica. Com foco em durabilidade e performance, nossa manutenção
          preventiva previne paradas não programadas, maximizando a
          produtividade de sua obra.
        </p>
        <p>
          A manutenção corretiva é a manutenção que ocorre quando menos se
          espera ou não se previu, por uma falha do equipamento, oscilações na
          rede elétrica, excesso de peso, utilização por pessoa não habilitada
          ou por erro operacional, sendo o atendimento para correção realizado
          <b>
            {" "}
            no mínimo em 03 (três) e no máximo em 24 (vinte e quatro) horas
          </b>
          , após o comunicado (Aviso de Chamada) do(a) Locatário(a) à Locadora.
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
