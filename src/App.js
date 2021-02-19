import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Acessarios from "./assets/Desktop-Accessories.jpg";
import ModeLS from "./assets/Desktop-ModelS.jpeg";
import ModeL3 from "./assets/Desktop-Model3.jpeg";
import ModeLX from "./assets/Desktop-ModelX.jpeg";
import ModeLY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itensContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guaranteey"
          descLick=""
          backgroundImg={SolarPanels}
          leftBtnTxt="order now"
          leftBtnLink=""
          rightBtnTxt="Learn Nome"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="ModelS"
          desc="Order Online for Touchless Delivery"
          descLick=""
          backgroundImg={ModeLS}
          leftBtnTxt="order now"
          leftBtnLink=""
          rightBtnTxt="Learn Nome"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="Model3"
          desc="Order Online for Touchless Delivery"
          descLick=""
          backgroundImg={ModeL3}
          leftBtnTxt="order now"
          leftBtnLink=""
          rightBtnTxt="Learn Nome"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="ModelX"
          desc="Order Online for Touchless Delivery"
          descLick=""
          backgroundImg={ModeLX}
          leftBtnTxt="order now"
          leftBtnLink=""
          rightBtnTxt="Learn Nome"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="ModelY"
          desc="Order Online for Touchless Delivery"
          descLick=""
          backgroundImg={ModeLY}
          leftBtnTxt="order now"
          leftBtnLink=""
          rightBtnTxt="Learn Nome"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="SolarRoof"
          desc="Order Online for Touchless Delivery"
          descLick=""
          backgroundImg={SolarRoof}
          leftBtnTxt="order now"
          leftBtnLink=""
          rightBtnTxt="Learn Nome"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="Acessarios"
          desc="Order Online for Touchless Delivery"
          descLick=""
          backgroundImg={Acessarios}
          leftBtnTxt="order now"
          leftBtnLink=""
          rightBtnTxt="Learn Nome"
          rightBtnLink=""
          twoButtons="true"
          first
        />
      </div>
    </div>
  );
}

export default App;
