
import ThreeCanvas from "../components/ThreeCanvas";
import IntroText from "../components/IntroText";

const Home = () => {
  return (
    <>
      <div className="relative">
      
        <div className="h-screen radial-bg">
          <ThreeCanvas />
        </div>
        <IntroText />
      </div>
    </>
  );
};

export default Home;
