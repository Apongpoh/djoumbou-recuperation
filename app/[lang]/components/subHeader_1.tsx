"use client"

export default function SubHeader_1({
    dictionary,
}: {
    dictionary: {
        bigFrSubHeader1: string
        smallFrSubHeader1: string
    }
}) {
    return (
        <div className='mb-4 bg-white border border-white rounded-lg drop-shadow-2xl p-2'>
            <h1 className='text-2xl font-bold text-center text-red-800'>{dictionary.bigFrSubHeader1}</h1>
            <p className='text-teal-800'>{dictionary.smallFrSubHeader1}</p>
        </div>
    )
}