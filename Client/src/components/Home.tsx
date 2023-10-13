import {
    Typography
} from "@material-tailwind/react";
import BelowCarousal from "../components/BelowCarousal";
import Carousal from "../components/Carousal";
import Header from "../components/Header";
import Map from "../components/Map";

export default () => {
  return (
    <>
        <Header />
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://img.freepik.com/free-photo/top-view-yellow-rice-pita-arrangement_23-2148728164.jpg?w=1380&t=st=1697160604~exp=1697161204~hmac=1d193e6f9d200d8f3814efe593575f8ea7836883442f280953271cbbc59efa05')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-15 font-black"
              >
                Your Journey of Starving Ends with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Embark on a journey where hunger and food wastage meet their end. 
              Our app empowers you to make a difference, one meal at a time.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      
      <Carousal />
      <BelowCarousal />
      <Map />
    </>
  );
};
