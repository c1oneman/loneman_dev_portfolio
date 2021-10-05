import Hero from "../core-components/Hero.js";
const Home = () => {
  return (
    <div className="w-full border-b mt-20">
      <Hero h1="👋, i'm Clay." p="Welcome to my development portfolio page." />
      <Hero h1="this page is under construction." p="sorry." />
      <Hero h1="how did you find this page?" p="test test test" />
      <Hero h1="👋, i'm Clay." p="Welcome to my development portfolio page." />
    </div>
  );
};

export default Home;
