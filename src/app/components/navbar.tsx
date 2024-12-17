"use client";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdMenu } from "react-icons/md"; // Hamburger Menu
import { useState } from "react"; // Import useState hook

const Header = () => {
  // State to control menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-10 lg:w-full mx-auto relative">
      {/* Top bar: Search, Logo, Cart/Profile */}
      <div className="lg:flex hidden border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto justify-between items-center">
        <div className="lg:flex sm:gap-[1rem] ">
          <IoSearch className="text-xl " />
        </div>
        <h1 className="text-[#22202E] text-2xl font-semibold sm:text-left">Avion</h1>
        <div className="flex text-xl gap-3 sm:gap-x-1">
          <Link href="/cart">
            <MdOutlineShoppingCart />
          </Link>
          <Link href="/">
            <CgProfile />
          </Link>
        </div>
      </div>

      {/* Mobile Navbar - Only h1, Search Icon, and Hamburger */}
      <div className="lg:hidden flex w-full justify-between items-center h-1/2">
        <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>
        <IoSearch className="text-xl" />
        <MdMenu 
          className="text-2xl cursor-pointer" 
          onClick={toggleMenu} 
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg p-4 mt-2 z-10">
          {[
            { href: "/", label: "Home" },
            { href: "/ceramics", label: "Ceramics" },
            { href: "/product", label: "Popular" },
            { href: "/about", label: "About" },
            { href: "/crockery", label: "Crockery" },
            { href: "/tableware", label: "Tableware" },
            { href: "/cutlery", label: "Cutlery" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-[#22202E] text-lg font-medium py-2 px-4 hover:bg-[#f3f4f6] hover:shadow-sm rounded-lg transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={toggleMenu} 
            className="w-full mt-4 text-center text-[#726E8D] text-sm font-medium py-2 hover:text-[#5a526c] transition-colors"
          >
            Close Menu
          </button>
        </div>
      )}

      {/* Desktop Navigation Bar */}
      <div className="lg:flex hidden sm:hidden w-full justify-center items-center h-1/2 text-[#726E8D]">
        <nav className="flex gap-6 justify-center w-full">
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Home
          </Link>
          <Link href="/ceramics" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Ceramics
          </Link>
          <Link href="/product" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Popular
          </Link>
          <Link href="/about" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            About
          </Link>
          <Link href="/crockery" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Crockery
          </Link>
          <Link href="/tableware" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Tableware
          </Link>
          <Link href="/cutlery" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Cutlery
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
