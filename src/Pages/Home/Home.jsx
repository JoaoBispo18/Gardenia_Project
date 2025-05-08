import { Outlet } from 'react-router-dom';

import { Navbar, Conteudo, Footer } from '../../components';

const Home = () =>{
    return(

        <>
        <Outlet/>
        <Navbar/>
        <Conteudo/>
        <Footer/>
        </>

    );
};

export {Home};