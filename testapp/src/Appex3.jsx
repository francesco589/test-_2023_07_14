import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NotFound from './components_ex3/NotFound';
import Home from './components_ex3/Home';
import { characters } from './components_ex3/characters';
import Char from './components_ex3/Char';
export default function Appex3(){

    /*Ex3 (React)
Realizza un file js in cui esporti un array di 10 oggetti che rappresentano personaggi di film famosi. Ogni "personaggio" avrà nome, immagine e descrizione.
Grazie a React Router realizza 2 pagina, la home, che mostra nome e immagine di tutti i personaggi in archivio.
Ogni blocco ha un pulsante "More info", che se premuto, rimanda a /char/:charname
(ad esempio /char/rocky) dove viene mostrato un layout dedicato con nome più grande, immagine più grande e descrizione.
Incorpora una header che consente di tornare alla home.*/

    return(
        <>
        <Router>

            <Routes>
                <Route index element={<Home characters={characters} />} />
                <Route path='/char/:slug' element={<Char characters={characters} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
        </>
    )
}