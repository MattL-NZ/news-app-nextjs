import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "../Nav/NavLinks";
import SearchBox from "../SearchBox/SearchBox";
import DarkModeButton from "../Buttons/DarkModeButton";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            <span className="underline decoration-4 decoration-orange-400">
              YOUR
            </span>{" "}
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/*DARK MODE */}
          <DarkModeButton />
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>

      {/*  NAV LINKS  */}
      <NavLinks />
      {/*  SEARCH  */}
      <SearchBox />
    </header>
  );
}
