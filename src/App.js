import "./App.scss";
import { Background } from "./components/background/Background";
import { Nav } from "./components/navigation/Nav";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { AudioPlayer } from "./components/audioplayer/AudioPlayer";
import { useState } from "react";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`App ${isToggled && "retroBackground"}`}>
      <Background isToggled={isToggled} />
      <Nav
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <section id="about">
        <Header isToggled={isToggled} />
        <About isToggled={isToggled} />
      </section>
      {isToggled && (
        <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      )}
      <Main isToggled={isToggled} />
      <Contact isToggled={isToggled} />
    </div>
  );
}

export default App;
