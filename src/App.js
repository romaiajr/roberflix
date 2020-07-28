import React from "react";
import DI from "./data/dados_iniciais.json"
import Menu from "./components/Menu"
import BannerMain from "./components/BannerMain"
import Carousel from "./components/Carousel"
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle="A barraca do beijo 2"
        url="https://www.youtube.com/watch?v=lWImVp38gy4"
        videoDescription="Filminho show"
      />
      <Carousel
        ignoreFirstVideo
        category={DI.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={DI.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={DI.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={DI.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo
        category={DI.categorias[4]}
      />
      <Carousel
        ignoreFirstVideo
        category={DI.categorias[5]}
      />
      <Footer />
    </div>
  )
}

export default App;
