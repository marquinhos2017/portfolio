import { ThemeProvider } from 'styled-components';
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import React, { useState } from 'react';
import themelight from './themes/light';
import themedark from './themes/dark';


function App() {
    const [estaUsandoTemaDark,setEstaUsandoTemaDark] = useState(false)

    function trocaTena(){
        setEstaUsandoTemaDark(!estaUsandoTemaDark)
    }
    return (
        <ThemeProvider theme= {estaUsandoTemaDark ? themedark : themelight}>
            <EstiloGlobal />
            <Container>
                <Sidebar trocaTema={trocaTena}/>
                <main>
                    <Sobre />
                    <Projetos />
                </main>
            </Container>
        </ThemeProvider>
    )
}

export default App
