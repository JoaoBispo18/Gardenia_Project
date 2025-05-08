import { Navbar, Footer } from '../../../components';
import samambaia from '../../../components/conteudo/Imagens/cards/samambaia.webp';

const Samambaia = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Samambaia (Nephrolepis exaltata)</h1>
        <div className="conteudo-planta">
          <img src={samambaia} alt="Samambaia" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Planta ornamental com folhas finas e frondosas, formando uma espécie de 'cacho'.</li>
              <li>Prefere ambientes úmidos e sombreados.</li>
              <li>Ideal para decoração de interiores, pendurada ou em vasos decorativos.</li>
              <li>Possui várias espécies e variedades, algumas mais adaptadas para ambientes internos e outras para externos.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere luz indireta, sendo ideal para áreas com sombra parcial.</li>
              <li>Solo bem drenado, rico em matéria orgânica e constantemente úmido.</li>
              <li>Rega frequente, mantendo o solo úmido, mas não encharcado. Gosta de alta umidade ambiental.</li>
              <li>Evite locais com correntes de ar ou calor excessivo, que podem ressecar as folhas.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por divisão de touceiras ou estacas de rizomas.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Ideal para vasos suspensos ou prateleiras altas para que suas folhas pendam elegantemente.</li>
              <li>Adube periodicamente com fertilizantes líquidos, especialmente durante o crescimento ativo na primavera e verão.</li>
              <li>Prefere ambientes mais úmidos, por isso, pode se beneficiar de pulverizações regulares de água nas folhas.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Samambaia };
