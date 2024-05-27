import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import { BotaoTema, SideBarContainer } from "./styles";

const Sidebar = () => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Titulo fontSize={18}>Bruno Dorigon</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          DorigonBruno
        </Paragrafo>
        <Paragrafo fontSize={14}>Desenvolvedor Front-End</Paragrafo>
        <BotaoTema>Trocar Tema</BotaoTema>
      </SideBarContainer>
    </aside>
  );
};

export default Sidebar;
