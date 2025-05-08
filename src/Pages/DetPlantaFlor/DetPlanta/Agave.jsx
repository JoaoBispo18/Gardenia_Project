import { Navbar, Footer } from '../../../components';
import agave from '../../../components/conteudo/Imagens/cards/agave.webp';

const Agave = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Agave (Agave spp.)</h1>
        <div className="conteudo-planta">
          <img src={agave} alt="Agave" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li className='SubTitulo'>Planta suculenta com folhas espessas, pontiagudas e dispostas em roseta.</li>
              <li>Variedades com coloração verde, azulada ou com bordas amareladas.</li>
              <li>Crescimento lento e aspecto escultural, ideal para jardins secos.</li>
              <li>Algumas espécies podem florescer uma única vez ao final do ciclo de vida.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Pleno sol, tolerante a calor e ambientes áridos.</li>
              <li>Solo arenoso, bem drenado e pobre em matéria orgânica.</li>
              <li>Rega espaçada — somente quando o solo estiver completamente seco.</li>
              <li>Evite excesso de umidade para prevenir apodrecimento das raízes.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por brotos que surgem na base da planta-mãe (filhotes ou mudas laterais).</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Use luvas no manuseio — algumas espécies possuem espinhos afiados.</li>
              <li>Excelente para composições em jardins de pedras ou xerojardins.</li>
              <li>Necessita de pouco ou nenhum adubo.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Agave };
