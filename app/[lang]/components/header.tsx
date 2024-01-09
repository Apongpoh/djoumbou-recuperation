'use client'

import Image from 'next/image'
import scrapMetal from '/public/djoumbou_yard.jpg'

export default function Header({
    dictionary,
}: {
    dictionary: {
        bigFrHeader: string
        smallFrHeader: string
    }
}) {

    return (
        <div className="h-[90vh] relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center">
            <Image
                src={scrapMetal}
                width={0}
                height={0}
                layout="fill"
                objectFit="cover"
                alt=""
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <div className="flex h-full items-center justify-center">
                    <div className="text-white">
                        <h1 className="animate-bounce mb-4 text-4xl font-bold">{dictionary.bigFrHeader}</h1>
                        <h3 className="mb-6 text-xl text-zinc-400 font-bold">{dictionary.smallFrHeader}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}