"use client";

import { IconHeadset, IconListSearch, IconDoorEnter, IconHomeBolt } from "@tabler/icons-react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Expressions = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Monthly Subscription', 'Yearly Subscription'],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="mt-[600px] md:mt-0 py-20 md:py-32 w-full bg-gray-900 text-white">
        <div className="container">
          <h2 className="max-w-4xl text-5xl font-bold md:text-6xl">
            Experience peace. Pay your rent in <span className="text-primary-500" ref={el} /> forever.
          </h2>
          
          <div className="grid gap-8 mt-16 md:grid-cols-3">
            <div className="relative px-12 py-16 bg-gray-800 rounded-3xl">
              <div className="flex mb-8">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-blue-500 rounded-full">
                  <IconListSearch size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                CCBS Advisory
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Let's connect you with 10,000+ agents and landlords who fastrack your monthly tenancy.
              </p>
              {/* <Link href='/listings'> */}
              <button className="px-4 py-2 mt-4 text-sm transition border shadow-sm border-slate-300 rounded-xl hover:bg-slate-900">
                Get Started
              </button>

              {/* </Link> */}
            </div>
            <div className="relative px-12 py-16 bg-gray-800 rounded-3xl">
              <div className="flex mb-8">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-yellow-600 rounded-full">
                  <IconHomeBolt size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                CCBS Incubators
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Rent due in a few days? We help you convert your current yearly tenancy into monthly tenancy forever.
              </p>
              <button className="px-4 py-2 mt-4 text-sm transition border shadow-sm border-slate-300 rounded-xl hover:bg-slate-900">
                Get Started
              </button>
            </div>
            <div className="relative px-12 py-16 bg-gray-800 rounded-3xl">
              <div className="flex mb-8">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-teal-500 rounded-full">
                  <IconDoorEnter size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                Business Advisory
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Whether you're new to the city or looking to make new connections, ILEYAH
                help you find the perfect living arrangement
              </p>
              <button className="px-4 py-2 mt-4 text-sm transition border shadow-sm border-slate-300 rounded-xl hover:bg-slate-900">
                Get Started
              </button>
            </div>
            <div className="relative px-12 py-16 bg-gray-800 rounded-3xl">
              <div className="flex mb-8">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-yellow-500 rounded-full">
                  <IconHeadset size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                Business Funding
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Initiate a conversation with our dedicated support to further help you in the process
              </p>
              <button className="px-4 py-2 mt-4 text-sm transition border shadow-sm border-slate-300 rounded-xl hover:bg-slate-900">
                Get Started
              </button>
            </div>
            <div className="relative px-12 py-16 bg-gray-800 rounded-3xl">
              <div className="flex mb-8">
                <div className="flex items-center justify-center w-16 h-16 text-white bg-orange-500 rounded-full">
                  <IconListSearch size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">
                Business Summits
              </h2>
              <p className="mt-4 text-[.95rem] text-white">
                Initiate a conversation with our dedicated support to further help you in the process
              </p>
              <button className="px-4 py-2 mt-4 text-sm transition border shadow-sm border-slate-300 rounded-xl hover:bg-slate-900">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expressions;