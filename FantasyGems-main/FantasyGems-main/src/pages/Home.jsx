import { useState } from "react";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import CategoryList from "../components/CategoryList";
import Superjackpot from "../components/Superjackpot";
import Lotery from "../components/Lotery";
import Papular from "../components/Papular";
import Hotslots from "../components/Hotslots";
import Original from "../components/Original";
import Fishing from "../components/Fishing";
import Slots from "../components/Slots";
import Casino from "../components/Casino";
import Pvc from "../components/Pvc";
import Sports from "../components/Sports";
import WinningInfo from "../components/WinningInfo";
import EarningsChart from "../components/EarningsChart";

const Home = () => {
  const [activeTab, setactiveTab] = useState("For You");
  return (
    <div>
      <Hero />
      <InfoBar />
      <CategoryList activeTab={activeTab} onTabChange={setactiveTab} />
      {activeTab === "For You" && (
        <>
          <Superjackpot />
          <Lotery />
          <Papular />
          <Hotslots />
          <Original />
          <Fishing />
          <Slots />
          <Casino />
          <Pvc />
          <Sports />
        </>
      )}
      {activeTab === "Lottery" && <Lotery />}
      {activeTab === "Original" && <Original />}
      {activeTab === "Fishing" && <Fishing />}
      {activeTab === "Slots" && <Slots />}
      {activeTab === "Casino" && <Casino />}
      {activeTab === "PVC" && <Pvc />}
      {activeTab === "Sports" && <Sports />}
      <WinningInfo />
      <EarningsChart />
    </div>
  );
};

export default Home;
