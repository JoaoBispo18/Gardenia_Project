import { Navbar, Footer } from '../../../components';
import girassol from '../../../components/conteudo/Imagens/cards/girassol.jpg';

const Girassol = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Girassol (Helianthus annuus)</h1>
        <div className="conteudo-planta">
          <img src={girassol} alt="Girassol" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores grandes e vistosas que acompanham o movimento do sol (heliotropismo).</li>
              <li>Caule ereto, podendo atingir até 3 metros de altura.</li>
              <li>Folhas largas e ásperas.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Solo fértil, bem drenado e com boa retenção de umidade.</li>
              <li>Exposição direta ao sol por pelo menos 6 horas diárias.</li>
              <li>Rega moderada, evitando encharcar.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por sementes, com germinação em até 10 dias.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite ventos fortes para prevenir o tombamento.</li>
              <li>Realize adubação leve durante o crescimento.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Girassol };
