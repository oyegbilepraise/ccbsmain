"use client";
import { createElement, useState } from "react";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "react-use";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import products from "../lib/products";
import Hover from "./global/Hover";
import { TbChevronDown } from "react-icons/tb";

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (isMobileNavVisible)
      document.scrollingElement.style.overflowY = "hidden";
    else document.scrollingElement.style.overflowY = "initial";
  }, [isMobileNavVisible]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollingElement.scrollTop;
    setScrolled(scrollTop > 50);
  };

  const handleLogout = () => {
    localStorage.removeItem("ileyah_token");
    logout();
    window.location.reload();
  };

  return (
    <>
      <header
        className={classNames(
          "fixed top-0 inset-x-0 z-50 h-28 transition-all",
          { "bg-white text-neutral-900 shadow !h-24": scrolled },
          { "text-neutral-900 shadow": !scrolled }
        )}
      >
        <div className="container h-full">
          <nav className="relative z-50 flex justify-between h-full">
            <div className="flex items-center flex-1 h-full md:gap-x-12">
              <Link href="/" className="text-xl w-[120px]">
                <img src="/images/ccbs.png" alt="logo" />
              </Link>
              <div className="hidden h-full ml-auto lg:flex md:space-x-3">
                <Hover className="inline-flex items-center h-full">
                  {(hovered) => (
                    <div className="relative flex items-center h-full">
                      <Link
                        className={`inline-flex items-center px-4 py-1 rounded-full ${scrolled ? "text-black" : "text-white"}`}
                        href="/">
                        <div className="inline-flex items-center px-4 py-1 rounded-full">
                          Expressions <TbChevronDown />
                        </div>
                      </Link>
                      <AnimatePresence mode="wait">
                        {hovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 20, x: "-50%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className={classNames(
                              "p-4 rounded-2xl bg-white shadow-md z-50 border text-gray-800 absolute top-full -mt-2 left-1/2 -translate-x-1/2 right-0 w-[630px] grid grid-cols-2 gap-4"
                            )}
                          >
                            {products.map((product, i) => (
                              <Link href={product?.homeLink} key={i}>
                                <div
                                  key={product.name}
                                  className="flex items-center p-4 transition-all cursor-pointer rounded-2xl hover:bg-gray-200/70"
                                >
                                  <div className="mr-4">
                                    <div
                                      className={classNames(
                                        "w-10 h-10 rounded-full flex items-center justify-center ",
                                        product.backgroundColor
                                      )}
                                    >
                                      {createElement(product.icon)}
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium">
                                      {product.name}
                                    </h4>
                                    <p className="mt-1 text-sm leading-tight opacity-80">
                                      {product.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </Hover>
                <Link
                  className={`inline-flex items-center px-4 py-1 rounded-full ${scrolled ? "text-black" : "text-white"}`}
                  href="/shortlet"
                >
                  About Us
                </Link>
                <Link
                  className={`inline-flex items-center px-4 py-1 rounded-full ${scrolled ? "text-black" : "text-white"}`}
                  href="/companies"
                >
                  Our Team
                </Link>
                <Link
                  className={`inline-flex items-center px-4 py-1 rounded-full ${scrolled ? "text-black" : "text-white"}`}
                  href="/companies"
                >
                  Impacts
                </Link>
                <Link
                  className={`inline-flex items-center px-4 py-1 rounded-full ${scrolled ? "text-black" : "text-white"}`}
                  href="/companies"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMobileNavVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileNavVisible(false)}
              className="fixed inset-0 z-50 bg-zinc-900/80"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-x-0 z-50 flex flex-col px-4 py-6 mt-4 space-y-2 text-lg tracking-tight origin-top bg-white shadow-xl top-24 rounded-3xl"
            >
              <Link
                onClick={() => setIsMobileNavVisible(false)}
                href="/"
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                Product
              </Link>
              {/* <Link
                  onClick={() => setIsMobileNavVisible(false)} href="/tenants"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Tenants
                </Link> */}
              <Link
                onClick={() => setIsMobileNavVisible(false)}
                href="/landlords"
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                Landlords
              </Link>
              <Link
                onClick={() => setIsMobileNavVisible(false)}
                href="/companies"
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                For Companies
              </Link>
              <Link
                onClick={() => setIsMobileNavVisible(false)}
                href="/find-artisans"
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                Find Artisans
              </Link>
              <div>
                <hr className="mx-2 my-2 border-zinc-300/40" />
              </div>
              <Link
                onClick={() => setIsMobileNavVisible(false)}
                href="/login"
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                Sign in
              </Link>
              <Link
                onClick={() => setIsMobileNavVisible(false)}
                href="/register"
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                Sign up
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
