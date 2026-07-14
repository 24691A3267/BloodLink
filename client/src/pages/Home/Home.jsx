import Navbar from "../../components/Layout/Navbar/Navbar";
import Hero from "../../components/Home/Hero/Hero";
import Statistics from "../../components/Home/Statistics/Statistics";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import BloodSearch from "../../components/Home/BloodSearch/BloodSearch";


function Home() {

  return (
    <>
      <Navbar />

      <Hero />

      <BloodSearch />

      <Statistics />

      <WhyChooseUs />
    </>
  );

}


export default Home;