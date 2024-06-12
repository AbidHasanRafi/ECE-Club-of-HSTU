import { Helmet } from "react-helmet";
import Activities from "../Activities/Activities";
import Hero from "../Hero/Hero";
import Mission from "../Mission/Mission";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ECE Club of HSTU</title>
      </Helmet>
      <Hero />
      <Mission />
      <Activities />
    </div>
  );
};

export default Home;
