import Search from "./Search";

import { useSearchContext } from "../context/SearchContext";

import GooglePlay from "../assets/icons/buttons/google-play.svg";
import AppStore from "../assets/icons/buttons/app-store.svg";
import Car from "../assets/images/hero/car.svg";

const Hero = () => {
  const { searchActive } = useSearchContext();
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex flex-col gap-8 xl:gap-x-12 xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-6 xl:mt-0">
            <h1 className="h1">
              Explore the Finest <span className="text-accent">Global</span>{" "}
              Offers
            </h1>
            <p className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals.
            </p>
            {/* btns */}
            <div className="flex gap-x-3 justify-center xl:justify-start">
              {/* btn appstore */}
              <button className="btn-cta">
                <img
                  src={AppStore}
                  alt="appstore"
                  className="w-[132px] h-[36px]"
                />
              </button>
              {/* btn google */}
              <button className="btn-cta">
                <img
                  src={GooglePlay}
                  alt="googleplay"
                  className="w-[132px] h-[36px]"
                />
              </button>
            </div>
          </div>
          {/* img car */}
          <div className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48">
            <img src={Car} alt="car" className="object-contain " />
          </div>
        </div>
      </div>
      {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
};

export default Hero;
