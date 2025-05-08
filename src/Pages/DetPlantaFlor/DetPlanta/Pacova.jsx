import { Navbar, Footer } from '../../../components';
import pacova from '../../../components/conteudo/Imagens/cards/pacova.jpg';

const Pacova = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Pacová (Ensete ventricosum)</h1>
        <div className="conteudo-planta">
          <img src={pacova} alt="Pacová" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Planta herbácea de grande porte, com folhas largas e brilhantes, parecidas com as da bananeira.</li>
              <li>Conhecida também como banana-da-terra ou banana-pacová, mas não produz frutos comestíveis.</li>
              <li>Suas folhas podem atingir até 3 metros de comprimento em condições ideais.</li>
              <li>Planta tropical, de clima quente e úmido.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Pleno sol ou sombra parcial — quanto mais luz, mais vigorosa será a planta.</li>
              <li>Solo fértil, bem drenado, e rico em matéria orgânica.</li>
              <li>Rega abundante, mantendo o solo úmido, mas sem encharcar.</li>
              <li>Gosta de ambiente quente e úmido, podendo ser cultivada em estufas ou jardins tropicais.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por divisão de touceiras ou estacas de rizomas.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Ideal para paisagens tropicais, jardins de sombra ou estufas.</li>
              <li>Pode ser cultivada em vasos grandes, mas precisa de um ambiente úmido e quente.</li>
              <li>Adube regularmente para estimular o crescimento das folhas.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Pacova };
