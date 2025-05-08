import { Navbar, Footer } from '../../../components';
import orquidea from '../../../components/conteudo/Imagens/cards/orquidea.jpg';

const Orquidea = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Orquídea (Orchidaceae)</h1>
        <div className="conteudo-planta">
          <img src={orquidea} alt="Orquídea" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores exóticas e variadas, com formas e cores diversas.</li>
              <li>Plantas epífitas ou terrestres, adaptáveis a diferentes ambientes.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Luz indireta, evitando sol direto intenso.</li>
              <li>Substrato bem drenado (casca de pinus, fibra de coco).</li>
              <li>Rega moderada, deixando o substrato secar entre as regas.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Divisão de touceiras ou keikis (brotos na haste floral).</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Vasos transparentes ajudam a monitorar as raízes.</li>
              <li>Evite encharcar para prevenir apodrecimento.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Orquidea };
