import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithuSecao } from "./styles";

const Sobre = () => {
  return (
    <>
      <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="principal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          ipsum optio necessitatibus ex sed nihil dolorem, culpa, nulla aperiam
          animi, modi perspiciatis! Possimus, quis quae! Consequuntur porro
          eligendi perspiciatis assumenda!
        </Paragrafo>
      </section>
      <GithuSecao>
        <img
          src="https://github-readme-stats.vercel.app/api?username=DorigonBruno&show_icons=true&theme=onedark"
          alt=""
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=DorigonBruno&layout=compact&theme=dracula"
          alt=""
        />
      </GithuSecao>
    </>
  );
};

export default Sobre;
