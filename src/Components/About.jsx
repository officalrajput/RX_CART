
import { useProductContext } from "../Context/ProductContext";
import HeroSection from "../components2/HeroSection";
const About = () => {
  const { myname } = useProductContext();
  const data = {
    name: "RX Ecommerce",
    images: "Images/Ecommercelogo.png",
  };
  return (
    <>
      {myname}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
