import { Navbar, Footer } from '../../../components';
import jiboia from '../../../components/conteudo/Imagens/cards/jiboia.jpg';

const Jiboia = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Jibóia (Epipremnum pinnatum ‘Aureum’)</h1>
        <div className="conteudo-planta">
          <img src={jiboia} alt="Jibóia" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Planta pendente ou trepadeira, com folhas em formato de coração e variações verdes com manchas amareladas.</li>
              <li>Muito resistente, ideal para ambientes internos.</li>
              <li>Crescimento rápido e fácil manutenção.</li>
              <li>Capaz de se adaptar a diferentes condições de luminosidade.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Luz indireta ou meia-sombra; tolera locais mais sombreados.</li>
              <li>Solo leve, fértil e bem drenado.</li>
              <li>Rega moderada — manter o solo levemente úmido, sem encharcar.</li>
              <li>Pode ser cultivada em vasos suspensos ou com tutor.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por estaquia — corte um ramo com pelo menos um nó e coloque na água ou direto no substrato.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Limpe as folhas periodicamente para facilitar a fotossíntese.</li>
              <li>Evite exposição direta ao sol, que pode queimar as folhas.</li>
              <li>Ideal para purificação do ar em ambientes fechados.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Jiboia };
