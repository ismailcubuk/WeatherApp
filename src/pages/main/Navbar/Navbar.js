import Search from "../../../components/navbar/Search";
import Pinned from "../../../components/navbar/Pinned";
import Location from "../../../components/navbar/Location";
import DropDown from "../../../components/navbar/DropDown";
import Toast from "../../Toast/Toast";
import PhoneDropDown from "../../../components/navbar/PhoneDropDown";

function Navbar() {
  return (
    <header className="glassmorphism-nav sticky top-0 z-30 w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 md:h-20 md:flex-row md:items-center md:justify-between md:px-6 md:py-0 xl:px-8">
        <div className="flex w-full items-center justify-between gap-3 md:min-w-0 md:flex-1">
          <div className="hidden min-w-0 flex-1 items-center md:flex">
            <Pinned />
          </div>
          <div className="hidden h-11 items-center mbl:flex md:hidden">
            <DropDown />
          </div>
          <div className="flex h-11 items-center mbl:hidden">
            <PhoneDropDown />
          </div>
          <div className="flex md:hidden">
            <Location />
          </div>
        </div>
        <div className="flex w-full min-w-0 items-center gap-2 md:w-auto md:flex-none">
          <Search />
          <div className="hidden md:flex">
            <Location />
          </div>
        </div>
      </div>
      <Toast />
    </header>
  );
}

export default Navbar;
