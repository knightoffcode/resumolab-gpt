import React from 'react';
import { useTheme } from '../../ThemeContext';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import Main from '../../components/Main';




function Home() {

    const { darkTheme } = useTheme();

    return (
        <main className={`main ${darkTheme ? 'main--dark' : 'main--light'}`}>
            <Header />
            <Main />
            <Footer />
        </main>
    );
}

export default Home;
