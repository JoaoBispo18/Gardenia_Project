import { Navbar, Footer } from '../../../components';
import tulipa from '../../../components/conteudo/Imagens/cards/tulipa.webp';

const Tulipa = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Tulipa (Tulipa spp.)</h1>
        <div className="conteudo-planta">
          <img src={tulipa} alt="Tulipa" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores elegantes em forma de taça, disponíveis em várias cores.</li>
              <li>Folhas longas e lanceoladas, de cor verde-acinzentada.</li>
              <li>Altura entre 20 e 60 cm, dependendo da variedade.</li>
              <li>Floração na primavera, após período de dormência no inverno.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Necessita de frio para florescer — ideal para regiões com inverno definido.</li>
              <li>Plantar os bulbos no outono, a cerca de 10 a 15 cm de profundidade.</li>
              <li>Solo bem drenado, fértil e levemente ácido.</li>
              <li>Luz solar direta ou meia-sombra.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por divisão de bulbos após o período de floração.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Não regar em excesso para evitar apodrecimento dos bulbos.</li>
              <li>Após a floração, deixar as folhas secarem naturalmente para fortalecer o bulbo.</li>
              <li>Ideal para cultivo em vasos, canteiros e paisagismo sazonal.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Tulipa };
