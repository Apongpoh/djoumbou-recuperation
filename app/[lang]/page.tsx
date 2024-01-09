import BodyContent from './components/body-content'
import Header from './components/header'
import SubHeader_1 from './components/subHeader_1'
import SubHeader_2 from './components/subHeader_2'
import Footer from './components/footer'
import Service from './components/services'
import ServiceHeader from './components/serviceHeader'
import Wws from './components/whatwebuy'
import Menu from './components/menu'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import ShowHideContent from './components/hide_show'


export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  const dictionary = await getDictionary(lang)

  return (
    <div>
      <Menu dictionary={dictionary.menu} />

      <Header dictionary={dictionary.header} />

      <BodyContent>
        <SubHeader_1 dictionary={dictionary.subHeader_1} />
      </BodyContent>

      <BodyContent>
        <SubHeader_2 dictionary={dictionary.subHeader_2} />
      </BodyContent>

      <BodyContent>
        <Service dictionary={dictionary.serHeader} />
      </BodyContent>

      <BodyContent>
        <ServiceHeader dictionary={dictionary.cHeader} />
      </BodyContent>

      <BodyContent>
        <Wws dictionary={dictionary.wwb} />
      </BodyContent>

      <BodyContent>
        <h1 className='mb-2 text-2xl text-red-900 font-bold'>FAQ</h1>
        <ShowHideContent dictionary={dictionary.faq} />
      </BodyContent>

      <BodyContent>
        <iframe className='mb-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254708.61179985505!2d9.732095999999999!3d4.0566784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061127bb7cdeded%3A0x4922c9ee08fdb854!2sNew%20Deido%2C%20Douala!5e0!3m2!1sen!2scm!4v1704554952546!5m2!1sen!2scm" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </BodyContent>

      <Footer dictionary={dictionary.foot} />

      <div>
        This text is rendered on the server:{' '}
        {dictionary['server-component'].Bienvenue}
      </div>

    </div>
  )
}
