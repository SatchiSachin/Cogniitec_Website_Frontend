import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../assets/Images/logo/cogniitec-logo.png";
import { servicesMenu } from "../data/servicesMenu";
import ContactModal from "../components/Model/ContactModal";
import { FaAngleRight } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openServiceMobile, setOpenServiceMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith("/services");
  const isProductActive = location.pathname.startsWith("/products");

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setOpenServiceMobile(false);
  };

  useEffect(() => {
    if (!location.pathname.startsWith("/services")) {
      setActiveCategory(null);
      setActiveSubItem(null);
    }
  }, [location.pathname]);

  return (
    <nav className="bg-white fixed w-full z-50 top-0 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-5 lg:px-10 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="COGNIITEC Logo" className="h-7 sm:h-8 md:h-9" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8 font-poppins text-sm font-medium text-[15px]">
          <Link
            to="/"
            className={`${
              isActive("/")
                ? "text-[#ec372d]"
                : "text-gray-800 hover:text-[#ec372d]"
            } transition`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${
              isActive("/about")
                ? "text-[#ec372d]"
                : "text-gray-800 hover:text-[#ec372d]"
            } transition`}
          >
            About
          </Link>

          <div className="relative group ">
            <button
              className={`flex items-center transition text-sm font-medium ${
                isServiceActive
                  ? "text-[#ec372d]"
                  : "text-gray-800 group-hover:text-[#ec372d]"
              }`}
            >
              <button className="cursor-pointer text-[15px]">Services</button>
              <ChevronDown className="w-4 h-4 ml-1 cursor-pointer" />
            </button>

            <div className="absolute -left-96 hidden group-hover:flex bg-white border border-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl p-8 mt-0 -ms-20 w-[780px] z-50 transition-all duration-200">
              <div className="grid grid-cols-3 mx-auto w-full gap-6">
                {servicesMenu.map((cat, index) => (
                  <div key={index} className="relative group/item">
                    <div className="flex items-center justify-between cursor-pointer">
                      {cat.to ? (
                        <Link
                          to={cat.to}
                          onClick={() => {
                            setActiveCategory(cat.title);
                            setActiveSubItem(null);
                          }}
                          // className={`font-semibold text-sm transition ${
                          className={`text-sm transition ${
                            activeCategory === cat.title
                              ? "text-[#ec372d]"
                              : "text-gray-800 hover:text-[#ec372d]"
                          }`}
                        >
                          {cat.title}
                        </Link>
                      ) : (
                        <p
                          className={`font-semibold text-sm transition ${
                            activeCategory === cat.title
                              ? "text-[#ec372d]"
                              : "text-gray-800 hover:text-[#ec372d]"
                          }`}
                        >
                          {cat.title}
                        </p>
                      )}

                      {cat.items && (
                        <FaAngleRight
                          className={`w-3 h-5 transition-transform duration-300 pl-1 ${activeCategory === cat.title ? "text-[#ec372d] rotate-45" : "text-gray-600 group-hover/item:text-[#ec372d] group-hover/item:rotate-90"}`}
                        />
                      )}
                    </div>

                    {cat.items && (
                      <div className="text-[15px] absolute left-full top-0 bg-white border border-gray-300 shadow-lg rounded-lg p-4 ml-3 min-w-[210px]  opacity-0 invisible translate-y-2 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-y-0 transition-all duration-300 z-50 ">
                        {cat.items.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.to}
                            onClick={() => {
                              setActiveCategory(cat.title);
                              setActiveSubItem(sub.title);
                            }}
                            className={`block text-[15px] py-2 px-2 transition ${
                              activeSubItem === sub.title
                                ? "text-[#ec372d] font-semibold"
                                : "text-gray-700 hover:text-[#ec372d]"
                            }`}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/blog"
            className={`${
              isActive("/blog")
                ? "text-[#ec372d]"
                : "text-gray-800 hover:text-[#ec372d]"
            } transition`}
          >
            Blog
          </Link>

          <Link
            to="/contact-us"
            className={`${
              isActive("/contact-us")
                ? "text-[#ec372d]"
                : "text-gray-800 hover:text-[#ec372d]"
            } transition`}
          >
            Contact
          </Link>
          <button
            className="
    group inline-flex items-center gap-3
    cursor-pointer
    border-2 border-[#ec372d]
    bg-[#fef5f4]
    text-[#ec372d]
    font-medium text-sm
    px-5 py-2
    rounded-xl
    transition-colors duration-300
  "
            onClick={() => setOpen(true)}
          >
            Let’s Talk
            <span
              className="
      relative grid place-items-center
      w-[25px] h-[25px]
      rounded-full
      bg-[#ec372d]
      text-white
      overflow-hidden
      flex-shrink-0
    "
            >
              {/* FIRST ARROW */}
              <svg
                viewBox="0 0 14 15"
                width="10"
                fill="currentColor"
                className="
        transition-none
        group-hover:transition-transform
        group-hover:duration-300
        group-hover:ease-in-out
        group-hover:translate-x-[150%]
        group-hover:-translate-y-[150%]
      "
              >
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>

              {/* SECOND ARROW */}
              <svg
                viewBox="0 0 14 15"
                width="10"
                fill="currentColor"
                className="
        absolute
        translate-x-[-150%]
        translate-y-[150%]
        transition-none
        group-hover:transition-transform
        group-hover:duration-300
        group-hover:ease-in-out
        group-hover:delay-100
        group-hover:translate-x-0
        group-hover:translate-y-0
      "
              >
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>
            </span>
          </button>

          {/* <button
            className="cursor-pointer group flex items-center border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] font-medium text-sm px-5 py-2 rounded-xl transition-all duration-300"
            onClick={() => setOpen(true)}
          >
            Let’s Talk
            <div className="ml-2 relative w-6 h-6 rounded-full bg-[#ec372d] text-white flex items-center justify-center">
              <ArrowUpRight className="absolute w-4 h-4 opacity-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0" />
              <ArrowUpRight className="absolute w-4 h-4 opacity-0 translate-y-2 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0" />
            </div>
          </button> */}
        </div>

        <div className=" flex-row gap-3 flex lg:hidden">
          <button
            className="cursor-pointer group flex  items-center border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] font-medium text-sm px-5 py-2 rounded-xl transition-all duration-300"
            onClick={() => setOpen(true)}
          >
            Let’s Talk
            <div className="ml-2 relative w-6 h-6 rounded-full bg-[#ec372d] text-white flex items-center justify-center">
              <ArrowUpRight className="absolute w-4 h-4 opacity-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0" />
              <ArrowUpRight className="absolute w-4 h-4 opacity-0 translate-y-2 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0" />
            </div>
          </button>
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t px-5 py-4 space-y-4">
          <Link
            to="/"
            onClick={handleMobileLinkClick}
            className="block text-gray-700 text-sm"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={handleMobileLinkClick}
            className="block text-gray-700 text-sm"
          >
            About
          </Link>

          <div>
            <button
              onClick={() => setOpenServiceMobile(!openServiceMobile)}
              className="w-full flex items-center justify-between text-gray-700 text-sm font-medium"
            >
              Services
              <ChevronDown
                className={`${openServiceMobile ? "rotate-180" : ""} transition`}
              />
            </button>

            {openServiceMobile && (
              <div className="mt-3 ml-3 space-y-4 max-h-64 overflow-y-auto pr-2">
                {servicesMenu.map((cat, index) => (
                  <div key={index}>
                    <p className="text-gray-800 font-semibold text-sm">
                      {cat.title}
                    </p>

                    {cat.items && (
                      <div className="ml-3 mt-2 space-y-2">
                        {cat.items.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.to}
                            onClick={handleMobileLinkClick}
                            className="block text-gray-600 text-xs"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            onClick={handleMobileLinkClick}
            className="block text-gray-700 text-sm"
          >
            Blog
          </Link>

          <Link
            to="/contact-us"
            onClick={handleMobileLinkClick}
            className="block text-gray-700 text-sm"
          >
            Contact
          </Link>
        </div>
      )}

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Navbar;
