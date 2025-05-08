import { Navbar, Footer } from '../../../components';
import dalia from '../../../components/conteudo/Imagens/cards/dalia.webp';

const Dalia = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Dália (Dahlia spp.)</h1>
        <div className="conteudo-planta">
          <img src={dalia} alt="Dália" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores vistosas e coloridas, em uma grande variedade de formas e tamanhos.</li>
              <li>Altura variável, de 30 cm a mais de 1 metro.</li>
              <li>Folhagem verde escura e densa.</li>
              <li>Floração abundante do verão ao outono.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Solo rico em matéria orgânica e bem drenado.</li>
              <li>Prefere sol pleno, mas tolera meia-sombra.</li>
              <li>Rega regular, evitando encharcar o solo.</li>
              <li>Poda das flores murchas para estimular novas florações.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por divisão de tubérculos saudáveis ou por sementes.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Proteja contra geadas em regiões mais frias.</li>
              <li>Use tutores para variedades mais altas, evitando que caiam.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Dalia };