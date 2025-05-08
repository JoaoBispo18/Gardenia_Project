import { Navbar, Footer } from '../../../components';
import hibisco from '../../../components/conteudo/Imagens/cards/hibisco.webp';

const Hibisco = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Hibisco (Hibiscus rosa-sinensis)</h1>
        <div className="conteudo-planta">
          <img src={hibisco} alt="Hibisco" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Arbusto perene de até 5 metros de altura.</li>
              <li>Flores grandes e vistosas, com cores variadas como vermelho, rosa, amarelo e laranja.</li>
              <li>Folhas verdes brilhantes, ovais e com margens serrilhadas.</li>
              <li>Florescem durante o verão e o outono.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere locais com boa luminosidade, evitando sol direto intenso.</li>
              <li>Solo fértil, bem drenado e rico em matéria orgânica.</li>
              <li>Rega regular, mantendo o solo úmido, mas sem encharcar.</li>
              <li>Adubação mensal durante o período de crescimento com fertilizante para plantas floríferas.</li>
              <li>Podas leves após a floração para estimular novo crescimento.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por estacas de caule, sementes ou alporquia.</li>
              <li>Estacas devem ser retiradas de ramos saudáveis e plantadas em substrato úmido.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Proteja a planta de ventos fortes e geadas.</li>
              <li>Ideal para cultivo em vasos ou diretamente no solo em regiões tropicais e subtropicais.</li>
              <li>Flores atraem polinizadores como beija-flores e borboletas.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Hibisco };
