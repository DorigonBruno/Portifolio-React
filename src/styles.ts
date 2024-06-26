import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "./themes/dark";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body{
    padding-top: 80px;
    background: ${(props) => (props.theme as Theme).corDeFundo};

    @media(max-width:768px){
      padding-top: 16px;
    }
  }

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
  }

  img{
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`;

export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`;
