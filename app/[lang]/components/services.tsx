"use client"

import Image from 'next/image'
import pricePic from '../../../public/price.png'
import scrapPic from '../../../public/scrap.png'
import scrapYard from '../../../public/scrapyard.png'

export default function Service(
    {
        dictionary,
    }: {
        dictionary: {
            sh1: string
            sh5fr1: string
            spfr1: string
            sh5fr2: string
            spfr2: string
            sh5fr3: string
            spfr3: string
        }
    }) {
    return (
        <div id="services">
            <div className='mb-4 bg-white border border-white rounded-lg drop-shadow-2xl p-2'>
                <h1 className='text-2xl font-bold text-center text-red-800'>{dictionary.sh1}</h1>
            </div>

            <div className='mb-12 grid lg:grid-cols-3 gap-3 bg-red-200'>

                <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                    <Image
                        src={scrapPic}
                        width={360}
                        height={0}
                        alt="DR logo"
                        className="w-[100%] rounded-t-md rounded-b-md"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.sh5fr1}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.spfr1}</p>
                    </div>
                </div>

                <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                    <Image
                        src={pricePic}
                        width={360}
                        height={0}
                        alt="DR logo"
                        className="w-[100%] rounded-t-md rounded-b-md"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.sh5fr2}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.spfr2}</p>
                    </div>
                </div>

                <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                    <Image
                        src={scrapYard}
                        width={360}
                        height={0}
                        alt="DR logo"
                        className="w-[100%] rounded-t-md rounded-b-md"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.sh5fr3}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.spfr3}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}