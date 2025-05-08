import { Link } from 'react-router-dom';

import tesoura from '../../components/conteudo/Imagens/cards/ferramentas/tesoura.webp';
import pazinha from '../../components/conteudo/Imagens/cards/ferramentas/pazinha.webp';
import regador from '../../components/conteudo/Imagens/cards/ferramentas/regador.jpeg';
import luvas from '../../components/conteudo/Imagens/cards/ferramentas/luvas.jpeg';
import furador from '../../components/conteudo/Imagens/cards/ferramentas/furador.jpg';
import garfo from '../../components/conteudo/Imagens/cards/ferramentas/garfo.gif';
import estacas from '../../components/conteudo/Imagens/cards/ferramentas/estaca.webp';
import espatula from '../../components/conteudo/Imagens/cards/ferramentas/espatula.webp';
import regadorFino from '../../components/conteudo/Imagens/cards/ferramentas/regador-fino.webp';
import pulverizador from '../../components/conteudo/Imagens/cards/ferramentas/pulverizador.webp';

import { Navbar, Footer } from '../../components';

const ferramentas = [
  {
    nome: "Espátula",
    descricao: "Usada para remover plantas com cuidado, minimizando danos às raízes durante o replantio.",
    imagem: espatula,
  },
  {
    nome: "Estacas",
    descricao: "Auxiliam no suporte de plantas e flores altas, evitando que tombem ou se quebrem.",
    imagem: estacas,
  },
  {
    nome: "Furador",
    descricao: "Facilita a criação de buracos precisos para o plantio de bulbos e pequenas mudas.",
    imagem: furador,
  },
  {
    nome: "Garfo",
    descricao: "Ideal para afofar o solo, remover ervas daninhas e melhorar a aeração ao redor das plantas.",
    imagem: garfo,
  },
  {
    nome: "Luvas",
    descricao: "Protegem as mãos contra espinhos, sujeira e possíveis irritações ao manusear plantas e ferramentas.",
    imagem: luvas,
  },
  {
    nome: "Pazinha",
    descricao: "Ferramenta versátil para cavar, plantar mudas, bulbos e flores em vasos ou canteiros.",
    imagem: pazinha,
  },
  {
    nome: "Pulverizador",
    descricao: "Permite a aplicação uniforme de fertilizantes, pesticidas ou água em plantas delicadas.",
    imagem: pulverizador,
  },
  {
    nome: "Regador Fino",
    descricao: "Perfeito para regar plantas delicadas sem danificar flores ou folhas mais frágeis.",
    imagem: regadorFino,
  },
  {
    nome: "Regador",
    descricao: "Utilizado para fornecer água de forma controlada, especialmente em áreas de difícil alcance.",
    imagem: regador,
  },
  {
    nome: "Tesoura",
    descricao: "Essencial para aparar galhos, flores secas e folhas, incentivando o crescimento saudável das plantas.",
    imagem: tesoura,
  }
];

const Ferramentas = () => {
  return (
    <>
      <Navbar />
      <div className="cardsT">
        <h1 className="titulo-plantas">Ferramentas de Jardinagem</h1>
        <div className="galeria-cards">
          {ferramentas.map((item, index) => (
            <div className="card" key={index}>
                <img src={item.imagem} alt={item.nome} className="card-img-quadrada" />
                <div className="card-conteudo">
                  <h3 className="card-titulo">{item.nome}</h3>
                  <p className="card-descricao">{item.descricao}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Ferramentas };
