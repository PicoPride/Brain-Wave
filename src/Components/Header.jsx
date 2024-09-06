import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button"
const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-60 lg:bg-n-8/90 lg:backdrop-blur-sm">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 ">
          <a href="#hero" className="block w-[12rem] xl:mr-8">
            <img src={brainwave} alt="BrainWave" width={190} height={40} />
          </a>

          <nav className=" fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={`block relative font-code text-l uppercase text-n-1 transition-colors hover:text-n-4 ${
                    item.onlyMobile ? "lg:hidden" : " "
                  } px-6 py-6 md:py-8 ld:mr-0.25 lg:text-xs lg:font-semibold  `}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          <Button href="#login" >
              Login
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
