import AboutUsComPany from "@/Components/AboutUsComPany/AboutUsComPany";
import Banner from "@/Components/Banner/Banner";
import FreshDeals from "@/Components/FreshDeals/FreshDeals";
import Newsletter from "@/Components/Newsletter/Newsletter";
import OrganicFruits from "@/Components/OrganicProduct/OrganicFruits";
import Services from "@/Components/ServicesOur/Services";



export default function Home() {
  return (
    <div className=" space-y-10 justify-center bg-zinc-50 ">
       <Banner></Banner>
       <AboutUsComPany></AboutUsComPany>
       <FreshDeals></FreshDeals>
       <Services></Services>
       <OrganicFruits></OrganicFruits>
       <Newsletter></Newsletter>
       
    </div>
  );
}
