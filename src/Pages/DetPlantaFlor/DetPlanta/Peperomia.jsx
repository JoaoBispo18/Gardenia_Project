import { Navbar, Footer } from '../../../components';
import peperomia from '../../../components/conteudo/Imagens/cards/peperomia.jpg';

const Peperomia = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Peperômia (Peperomia spp.)</h1>
        <div className="conteudo-planta">
          <img src={peperomia} alt="Peperômia" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Planta compacta, com folhas carnudas e de diferentes formas (cordiformes, ovais, lanceoladas).</li>
              <li>Folhas geralmente com padrões de cores variadas, incluindo verde, cinza, prata e até tons avermelhados.</li>
              <li>Cresce como uma planta perene, ideal para ambientes internos.</li>
              <li>Existem muitas variedades de peperômia, cada uma com características únicas de folhagem e tamanho.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere luz indireta brilhante, mas tolera ambientes com menor luminosidade.</li>
              <li>Solo leve, bem drenado e fértil.</li>
              <li>Rega moderada, permitindo que o solo seque entre as regas. Evitar encharcamento.</li>
              <li>Requer um ambiente um pouco mais seco, ideal para ambientes internos como salas e escritórios.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por estacas de caule ou folhas, que podem ser enraizadas em água ou solo.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite excesso de água, pois a peperômia é suscetível ao apodrecimento das raízes.</li>
              <li>Adube ocasionalmente com fertilizante equilibrado, preferencialmente durante a primavera e o verão.</li>
              <li>Ótima opção para vasos pequenos, jardins de interior ou como planta de decoração de mesa.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Peperomia };
