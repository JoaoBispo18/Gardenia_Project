import { Navbar, Footer } from '../../../components';
import amarilis from '../../../components/conteudo/Imagens/cards/amarilis.jpeg';

const Amarilis = () => {
  return (
    <>
      <Navbar />
      
      <div className="pagina-planta">
        <h1 className="titulo-planta">Amarilis (Amaryllis belladonna)</h1>
        <div className="conteudo-planta">
          <img src={amarilis} alt="Amarilis" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores grandes, em forma de trombeta, variando do branco ao rosa intenso.</li>
              <li>Altura: até 60 cm.</li>
              <li>Folhagem: folhas longas e estreitas aparecem após a floração.</li>
              <li>Todas as partes são tóxicas se ingeridas.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Plantio no final do verão, em solo bem drenado.</li>
              <li>Prefere locais ensolarados.</li>
              <li>Rega moderada durante a floração.</li>
              <li>Dormência após a floração, com redução da rega.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Separação dos bulbos-filhos que surgem ao redor do bulbo principal.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite molhar o bulbo diretamente para prevenir o apodrecimento.</li>
              <li>Gire o vaso periodicamente para crescimento uniforme.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Amarilis } ;
