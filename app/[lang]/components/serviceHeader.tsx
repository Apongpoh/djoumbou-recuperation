"use client"

import hvac from '../../../public/energysaving-hvac.webp'
import Image from 'next/image'
import machineshop from '../../../public/machin.jpg'
import plumbring from '../../../public/plumbering.png'


export default function ServiceHeader(
    {
        dictionary,
    }: {
        dictionary: {
            ch1: string
            ch5fr1: string
            cpfr1: string
            ch5fr2: string
            cpfr2: string
            ch5fr3: string
            cpfr3: string
        }
    }
) {
    return (
        <div>

            <div className='mb-4 bg-white border border-white rounded-lg drop-shadow-2xl p-2'>
                <h1 className='text-2xl font-bold text-center text-red-800'>{dictionary.ch1}</h1>
            </div>

            <div className='mb-12 grid lg:grid-cols-3 gap-3 bg-red-200'>

                <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                    <Image
                        src={hvac}
                        width={360}
                        height={0}
                        alt="DR logo"
                        className="w-[100%] rounded-t-md rounded-b-md"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.ch5fr1}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.cpfr1}</p>
                    </div>
                </div>

                <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                    <Image
                        src={plumbring}
                        width={360}
                        height={0}
                        alt="DR logo"
                        className="w-[100%] rounded-t-md rounded-b-md"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.ch5fr2}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.cpfr2}</p>
                    </div>
                </div>

                <div className="w-[100%] bg-white border border-white rounded-lg drop-shadow-2xl">
                    <Image
                        src={machineshop}
                        width={360}
                        height={0}
                        alt="DR logo"
                        className="w-[100%] rounded-t-md rounded-b-md"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-800 dark:text-white">{dictionary.ch5fr3}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dictionary.cpfr3}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}