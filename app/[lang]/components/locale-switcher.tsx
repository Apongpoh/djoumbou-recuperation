'use client'

import englishLanguageColor from '/public/english.svg'
import frenchLanguageColor from '/public/french.svg'
import Image from 'next/image'
import Link from 'next/link'
import { i18n } from '../../../i18n-config'
import { usePathname } from 'next/navigation'


export default function LocaleSwitcher() {
  
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='flex'>
      {
        i18n.locales.map((locale) => (
          <li key={locale} className='mr-4 list-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Link href={redirectedPathName(locale)}>{locale === 'fr' ?  <Image alt='FR' src={frenchLanguageColor} width={30} height={30} /> : <Image alt='EN' src={englishLanguageColor} width={30} height={30} /> }</Link>
          </li>
        )
      )}
    </div>
  )
}