import { Navbar, Footer } from '../../../components';
import zamioculca from '../../../components/conteudo/Imagens/cards/zamioculca.jpg';

const Zamioculca = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Zamioculca (Zamioculcas zamiifolia)</h1>
        <div className="conteudo-planta">
          <img src={zamioculca} alt="Zamioculca" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Planta de crescimento lento, com folhas brilhantes e espessas, que formam uma folhagem densa e elegante.</li>
              <li>Conhecida por sua resistência, ideal para ambientes internos com baixa luz.</li>
              <li>É uma planta suculenta, capaz de armazenar água em seus caules, o que a torna muito tolerante à seca.</li>
              <li>Alcança cerca de 60 a 90 cm de altura, dependendo das condições de cultivo.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere luz indireta brilhante, mas tolera ambientes com luz baixa.</li>
              <li>Solo bem drenado, leve e arenoso.</li>
              <li>Rega moderada — a planta deve ser regada apenas quando o solo estiver completamente seco.</li>
              <li>Ideal para ambientes internos, especialmente em escritórios ou salas com pouca luz.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por divisão de rizomas ou estacas de caules com folhas.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite excesso de água, pois pode causar o apodrecimento das raízes.</li>
              <li>Adube uma vez por mês durante a primavera e o verão, utilizando um fertilizante balanceado.</li>
              <li>Embora seja resistente à seca, não deve ser esquecida por longos períodos sem rega.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Zamioculca };
