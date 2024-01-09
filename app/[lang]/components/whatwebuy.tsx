"use client"

export default function Wws({
    dictionary,
}: {
    dictionary: {
        wh1: string
        whfr1: string
        wpfr1: string
        whfr2: string
        wpfr2: string
        whfr3: string
        wpfr3: string
        whfr4: string
        wpfr4: string
        whfr5: string
        wpfr5: string
        whfr6: string
        wpfr6: string
        whfr7: string
        wpfr7: string
        whfr8: string
        wpfr8: string
        whfr9: string
        wpfr9: string
        whfr10: string
        wpfr10: string
        whfr11: string
        wpfr11: string
        whfr12: string
        wpfr12: string
        whfr13: string
        wpfr13: string
        whfr14: string
        wpfr14: string
    }
}) {
    return (
        <div id="whatwebuy">
            <div className='mb-4 bg-white border border-white rounded-lg drop-shadow-2xl p-2'>
                <h1 className='text-2xl font-bold text-center text-red-800'>{dictionary.wh1}</h1>
            </div>

            <div className='mb-8'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">{dictionary.whfr1}</h5>
                <p className='mb-4'>{dictionary.wpfr1}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr2}</h6>
                <p className='mb-2'>{dictionary.wpfr2}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr3}</h6>
                <p className='mb-2'>{dictionary.wpfr3}</p>


                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr4}</h6>
                <p className='mb-2'>{dictionary.wpfr4}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr5}</h6>
                <p className='mb-2'>{dictionary.wpfr5}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr6}</h6>
                <p className='mb-2'>{dictionary.wpfr6}</p>
            </div>

            <div className='mb-8'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">{dictionary.whfr7}</h5>
                <p className="mb-3 font-normal">{dictionary.wpfr7}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr8}</h6>
                <p className='mb-2'>{dictionary.wpfr8}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr9}</h6>
                <p className='mb-2'>{dictionary.wpfr9}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr10}</h6>
                <p className='mb-2'>{dictionary.wpfr11}</p>
            </div>

            <div className='mb-4'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">{dictionary.whfr11}</h5>
                <p className="mb-3 font-normal">{dictionary.wpfr11}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr12}</h6>
                <p className='mb-2'>{dictionary.wpfr12}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr13}</h6>
                <p className='mb-2'>{dictionary.wpfr13}</p>

                <h6 className='font-bold tracking-tight text-red-500'>{dictionary.whfr14}</h6>
                <p className='mb-2'>{dictionary.wpfr14}</p>
            </div>
        </div>
    )
}