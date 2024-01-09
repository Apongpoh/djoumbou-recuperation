"use client"

import Image from 'next/image'
import logoDR from '../../../public/scrap_metal.jpg'
import scrapPay from '../../../public/djoumbou_yard.jpg'
import scrapPickup from '../../../public/scrap_pickup.jpg'
import scrapPrice from '../../../public/scrap_price.jpg'

export default function SubHeader_2({
    dictionary,
}: {
    dictionary: {
        h5fr1: string
        pfr1: string
        h5fr2: string
        pfr2: string
        h5fr3: string
        pfr3: string
        h5fr4: string
        pfr4: string
    }
}) {
    return (
        <div className='mb-12 grid lg:grid-cols-4 gap-3'>

            <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                <Image
                    src={logoDR}
                    width={360}
                    height={0}
                    alt="DR logo"
                    className="w-[100%] rounded-t-md rounded-b-md"
                />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.h5fr1}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.pfr1}</p>
                </div>
            </div>

            <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                <Image
                    src={scrapPrice}
                    width={360}
                    height={0}
                    alt="DR logo"
                    className="w-[100%] rounded-t-md rounded-b-md"
                />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.h5fr2}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.pfr2}</p>
                </div>
            </div>

            <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                <Image
                    src={scrapPay}
                    width={360}
                    height={0}
                    alt="DR logo"
                    className="w-[100%] rounded-t-md rounded-b-md"
                />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.h5fr3}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.pfr3}</p>
                </div>
            </div>

            <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                <Image
                    src={scrapPickup}
                    width={360}
                    height={0}
                    alt="DR logo"
                    className="w-[100%] rounded-t-md rounded-b-md"
                />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.h5fr4}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.pfr4}</p>
                </div>
            </div>

        </div>
    )
}