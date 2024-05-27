import styled from "styled-components";
import { Props } from "./index";

export const Titulo = styled.h3<Props>`
  color: #282a35;
  margin-bottom: 16px;
  font-size: ${(Props) => (Props.fontSize ? Props.fontSize + "px" : "14px")};
  font-weight: 700;
`;
