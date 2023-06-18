import { useSelector } from "react-redux";

import "../Css/home.css";
import TopRated from "./HomeComponents/TopRated";
import TopDiscouted from "./HomeComponents/TopDiscout";

function Home() {
  return (
    <div id="home">
      <TopRated />
      <TopDiscouted />
    </div>
  );
}

export default Home;
