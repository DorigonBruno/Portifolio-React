import styled from "styled-components";

type BotaoProps = {
  principal: boolean;
  fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? "green" : "blue")};
  font-size: ${(props) => props.fontSize || "1rem"};
`;

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span{
    text-decoration: line-through;
  }
`;

function Teste() {
  return (
    <>
      <Botao fontSize="1.125rem" principal>
        Enviar
      </Botao>
      <Botao fontSize=".875rem" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo principal={false}>
        <span>Não Clique aqui</span>
      </BotaoPerigo>
    </>
  );
}

export default Teste;
