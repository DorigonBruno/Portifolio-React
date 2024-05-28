import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
`;

export const LinkBotao = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme.corDeFundo};
  background: ${(props) => props.theme.corFundoBotao};
  padding: 8px;
  cursor: pointer;
  display: inline-block;
`;
