import { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import "./index.css"
import ChracterContainer from "./components/ChracterContainer";
function App() {

  const [characters, setCharacters] = useState([]);

  const reqApi = async () => {
    const api = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=3"
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
       <Container>
      <Header />
      {characters.length == 0 ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <ChracterContainer characters={characters} reqApi={reqApi} />
      )}
    </Container>
    
  );
}


export default App;
