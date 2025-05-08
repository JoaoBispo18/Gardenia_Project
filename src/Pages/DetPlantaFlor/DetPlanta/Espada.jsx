import { Navbar, Footer } from '../../../components';
import espada from '../../../components/conteudo/Imagens/cards/espada.jpg';

const Espada = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Espada-de-São-Jorge (Sansevieria trifasciata)</h1>
        <div className="conteudo-planta">
          <img src={espada} alt="Espada-de-São-Jorge" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Folhas eretas, rígidas e alongadas, com coloração verde com listras claras ou bordas amareladas.</li>
              <li>Planta ornamental e resistente, muito usada em interiores e jardins.</li>
              <li>Capaz de purificar o ar, segundo estudos da NASA.</li>
              <li>Considerada planta de proteção em diversas culturas.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Luz indireta ou sol pleno — muito adaptável.</li>
              <li>Solo bem drenado, leve e arenoso.</li>
              <li>Rega moderada — deixe o solo secar entre as regas.</li>
              <li>Tolerante à seca e a ambientes com ar-condicionado.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por divisão de touceiras ou folhas cortadas com base enraizada.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite encharcar o solo — o excesso de água é a principal causa de morte.</li>
              <li>Limpe as folhas com pano úmido para manter o brilho natural.</li>
              <li>Ideal para ambientes internos com baixa manutenção.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Espada };
