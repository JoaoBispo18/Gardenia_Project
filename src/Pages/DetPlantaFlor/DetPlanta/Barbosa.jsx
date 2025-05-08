import { Navbar, Footer } from '../../../components';
import babosa from '../../../components/conteudo/Imagens/cards/aloe.jpg';

const Barbosa = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Babosa (Aloe vera)</h1>
        <div className="conteudo-planta">
          <img src={babosa} alt="Babosa" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Planta suculenta com folhas espessas, verde-acinzentadas e com bordas serrilhadas.</li>
              <li>Seu gel interno é conhecido por propriedades medicinais e cosméticas.</li>
              <li>Crescimento em roseta, sem caule visível na fase jovem.</li>
              <li>Flores amarelas ou alaranjadas em hastes altas, geralmente no verão.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Pleno sol ou meia-sombra, com boa ventilação.</li>
              <li>Solo arenoso, leve e bem drenado.</li>
              <li>Rega espaçada, apenas quando o solo estiver completamente seco.</li>
              <li>Evite regar diretamente no centro da planta para não provocar apodrecimento.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por brotações laterais (mudas que nascem na base da planta).</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Utilize o gel com moderação e apenas em partes não oxidadas da folha.</li>
              <li>Ideal para cultivo em vasos, jardineiras ou diretamente no solo.</li>
              <li>Não exige adubação frequente — a babosa é rústica e resistente.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Barbosa };
