import styled from "styled-components";

export const BotaoTema = styled.button`
  background: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corDeFundo};
  font-size: 12px;
  border-radius: 12px;
  padding: 8px;
  font-weight: 700;
  border: 2px solid ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  margin-bottom: 20px;
`;

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
