import { Navbar, Footer } from '../../../components';
import costela from '../../../components/conteudo/Imagens/cards/costela.jpg';

const Costela = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Costela-de-adão (Monstera deliciosa)</h1>
        <div className="conteudo-planta">
          <img src={costela} alt="Costela-de-adão" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Folhas grandes, verdes e recortadas, com visual exótico e tropical.</li>
              <li>Planta trepadeira com raízes aéreas que ajudam na fixação e absorção de umidade.</li>
              <li>Pode atingir grandes proporções em ambientes internos e externos.</li>
              <li>Produz frutos comestíveis em ambientes tropicais (quando madura e bem cultivada).</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Luz indireta intensa, mas tolera meia-sombra.</li>
              <li>Solo fértil, leve e com boa drenagem.</li>
              <li>Rega moderada — manter o solo úmido sem encharcar.</li>
              <li>Ambientes úmidos favorecem o desenvolvimento das folhas.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por estacas do caule com pelo menos um nó e raiz aérea.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Utilize tutor ou suporte para estimular o crescimento vertical.</li>
              <li>Limpas as folhas regularmente com pano úmido para remover poeira.</li>
              <li>Evite sol direto nas folhas, que pode causar queimaduras.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Costela };
