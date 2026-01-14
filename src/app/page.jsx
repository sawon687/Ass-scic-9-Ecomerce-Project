import AboutUsComPany from "@/Components/AboutUsComPany/AboutUsComPany";
import Banner from "@/Components/Banner/Banner";



export default function Home() {
  return (
    <div className=" space-y-10 justify-center bg-zinc-50 ">
       <Banner></Banner>
       <AboutUsComPany></AboutUsComPany>
    </div>
  );
}
