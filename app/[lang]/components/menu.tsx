"use client"

import AnchorLink from "react-anchor-link-smooth-scroll";
import DarkModeButton from './dark-mode'
import Image from 'next/image'
import Link from 'next/link'
import LocaleSwitcher from './locale-switcher'
import logoDR from '/public/djoumbou-recuperation-logo.svg'
import logoDjoumboRecuparation from '/public/Djoumbou-Recuperation.svg'
import { useState } from 'react'

export default function Menu({
    dictionary,
}: {
    dictionary: {
        Service: string
        Nousachetons: string
        FAQ: String
        Àpropos: String
        Contacter: String
    }
}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between flex-wrap py-3 lg:pl-20 pl-5 lg:pr-16 pr-5 sticky top-0 bg-white z-10">

            <div className="flex md:mr-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <Link href='/fr' className='md:mt-0 mt-3 mr-3'>
                    <Image
                        src={logoDR}
                        width={50}
                        height={50}
                        alt="DR logo"
                    />
                </Link>
                <Link href='/fr' className='mt-7 sm:mt-5'>
                    <Image
                        src={logoDjoumboRecuparation}
                        width={230}
                        height={200}
                        alt="Djoumbo Recuperation logo"
                    />
                </Link>
            </div>

            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="py-6 text-zinc-900 hover:text-red-400">

                    <svg className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>

                    <svg className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>

                </button>
            </div>

            <div className={`w-full block flex-grow lg:flex lg:items-end lg:w-auto ${isOpen ? "block" : "hidden"}`}>

                <div className="text-sm lg:flex-grow">
                    <AnchorLink href="#services" className="block lg:inline-block mt-3 lg:mb-3 mr-4 font-bold text-lg font-mono text-teal-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-blue-500 duration-200">
                        |{dictionary.Service}
                    </AnchorLink>
                    <AnchorLink href="#whatwebuy" className="block lg:inline-block mt-3 lg:mb-3 mr-4 font-bold text-lg font-mono text-teal-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-blue-500 duration-200">
                        |{dictionary.Nousachetons}
                    </AnchorLink>
                    <AnchorLink href="#faqs" className="block lg:inline-block mt-3 lg:mb-3 mr-4 font-bold text-lg font-mono text-teal-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-blue-500 duration-200">
                        |{dictionary.FAQ}
                    </AnchorLink>
                    <AnchorLink href="#contacts&about" className="block lg:inline-block mt-3 lg:mb-3 mr-4 font-bold text-lg font-mono text-teal-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-blue-500 duration-200">
                        |{dictionary.Àpropos}
                    </AnchorLink>
                    <AnchorLink href="#contacts&about" className="block lg:inline-block mt-3 lg:mb-3 mr-4 font-bold text-lg font-mono text-teal-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-blue-500 duration-200">
                        |{dictionary.Contacter}
                    </AnchorLink>
                </div>

                <div className='flex'>
                    <div className='mt-3 lg:mb-3'><LocaleSwitcher /></div>
                    <div className='mt-3 lg:mb-3 mr-4'><DarkModeButton /></div>
                </div>

            </div>

        </nav>
    )
}