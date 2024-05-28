import styled from "styled-components";

export const GithuSecao = styled.div`
  display: flex;
  gap: 10px;
  margin: 32px 0 64px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`;
