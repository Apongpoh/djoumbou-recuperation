"use client"
import { useState } from 'react';

function ShowHideContent(
  {
    dictionary,
  }: {
    dictionary: {
      fhfr1: string
      fpfr01: string
      fpfr02: string
      fhfr2: string
      fpfr2: string
      fhfr3: string
      fpfr3a: string
      fpfr3b: string
      fpfr3c: string
      fpfr3d: string
      fpfr3e: string
      fpfr3f: string
      fpfr3g: string
      fpfr3h: string
      fpfr3i: string
      fpfr3j: string
      fpfr3k: string
      fpfr3l: string
      fhfr4: string
      fpfr4: string
      fhfr5: string
      fpfr5: string
      fhfr6: string
      fpfr6: string
      fhfr7: string
      fpfr7: string
      fhfr8: string
      fpfr8: string
      fhfr9: string
      fpfr9: string
      fhfr10: string
      fpfr10: string
      fhfr11: string
      fhfr12: string
      fpfr12a: string
      fpfr12b: string
      fpfr12c: string
      fpfr12d: string
      fpfr12e: string
      fpfr12f: string
      fpfr12g: string
      fpfr12h: string
      fpfr12i: string
      fpfr12j: string
      fpfr12k: string
      fpfr12l: string
      fpfr12m: string
      fpfr12n: string
      fpfr12o: string
      fpfr12p: string
      fhfr13: string
      fpfr13a: string
      fpfr13b: string
      fpfr13c: string
      fpfr13d: string
      fpfr13e: string
      fpfr13f: string
      fpfr13g: string
      fpfr13h: string
      fpfr13i: string
      fpfr13j: string
      fhfr14: string
      fpfr14a: string
      fpfr14b: string
      fpfr14c: string
      fpfr14d: string
      fpfr14e: string
      fpfr14f: string
      fpfr14g: string
      fpfr14h: string
      fpfr14i: string
      fpfr14j: string
      fpfr15: string
    }
  }) {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  const [isVisible11, setIsVisible11] = useState(false);

  return (
    <div id="faqs">
      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible1(!isVisible1)}>
          {isVisible1 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr1}</span>
        {isVisible1 && (
          <div className='mb-8 pl-10'>
            <p>{dictionary.fpfr01}</p>
            <br></br>
            <p>{dictionary.fpfr02}</p>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible2(!isVisible2)}>
          {isVisible2 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr2}</span>
        {isVisible2 && (
          <div className='mb-8 pl-10'>
            <p>{dictionary.fpfr2}</p>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible10(!isVisible10)}>
          {isVisible10 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr3}</span>
        {isVisible10 && (
          <div className='mb-8 pl-10'>
            <ul className='font-bold'>
              <li>- {dictionary.fpfr3a}</li>
              <li>- {dictionary.fpfr3b}</li>
              <li>- {dictionary.fpfr3c}</li>
              <li>- {dictionary.fpfr3d}</li>
              <li>- {dictionary.fpfr3e}</li>
              <li>- {dictionary.fpfr3f}</li>
              <li>- {dictionary.fpfr3g}</li>
              <li>- {dictionary.fpfr3h}</li>
              <li>- {dictionary.fpfr3i}</li>
              <li>- {dictionary.fpfr3j}</li>
              <li>- {dictionary.fpfr3k}</li>
              <li>- {dictionary.fpfr3l}</li>
            </ul>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible3(!isVisible3)}>
          {isVisible3 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr4}</span>
        {isVisible3 && (
          <div className='mb-8 pl-10'>
            <p>{dictionary.fpfr4}</p>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible4(!isVisible4)}>
          {isVisible4 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr5}</span>
        {isVisible4 && (
          <div className='mb-8 pl-10'>
            <p>{dictionary.fpfr5}</p>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible5(!isVisible5)}>
          {isVisible5 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr6}</span>
        {isVisible5 && (
          <div className='mb-8 pl-10'>
            <p>{dictionary.fpfr6}</p>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible6(!isVisible6)}>
          {isVisible6 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr7}</span>
        {isVisible6 && (
          <div className='mb-8 pl-10'>
            <p>{dictionary.fpfr7}</p>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible7(!isVisible7)}>
          {isVisible7 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr8}</span>
        {isVisible7 && (
          <div className='mb-8 pl-10'>
            <p>{dictionary.fpfr8}</p>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible8(!isVisible8)}>
          {isVisible8 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr9}</span>
        {isVisible8 && (
          <div className='mb-8 pl-10'>
            <p>{dictionary.fpfr9}</p>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible9(!isVisible9)}>
          {isVisible9 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr10}</span>
        {isVisible9 && (
          <div className='mb-8 pl-10'>
            <p>{dictionary.fpfr10}</p>
          </div>
        )}
      </div>

      <div className='mb-4'>
        <button className='mb-2 mr-2 bg-red-500 rounded text-3xl font-bold lg:w-[3%] text-white' onClick={() => setIsVisible11(!isVisible11)}>
          {isVisible11 ? '-' : '+'}
        </button>
        <span className='mb-2 text-1xl font-bold text-red-500'>{dictionary.fhfr11}</span>
        {isVisible11 && (
          <div className='mb-8 pl-10'>

            <h5 className='mb-2 text-red-500'>{dictionary.fhfr12}</h5>
            <ul className='font-bold'>
              <li>- {dictionary.fpfr12a}</li>
              <li>- {dictionary.fpfr12b}</li>
              <li>- {dictionary.fpfr12c}</li>
              <li>- {dictionary.fpfr12d}</li>
              <li>- {dictionary.fpfr12e}</li>
              <li>- {dictionary.fpfr12f}</li>
              <li>- {dictionary.fpfr12g}</li>
              <li>- {dictionary.fpfr12h}</li>
              <li>- {dictionary.fpfr12i}</li>
              <li>- {dictionary.fpfr12j}</li>
              <li>- {dictionary.fpfr12k}</li>
              <li>- {dictionary.fpfr12l}</li>
              <li>- {dictionary.fpfr12m}</li>
              <li>- {dictionary.fpfr12n}</li>
              <li>- {dictionary.fpfr12o}</li>
              <li className='mb-4'>- {dictionary.fpfr12p}</li>
            </ul>

            <h5 className='mb-2 text-red-500'>{dictionary.fhfr13}</h5>
            <ul className='font-bold'>
              <li>- {dictionary.fpfr13a}</li>
              <li>- {dictionary.fpfr13b}</li>
              <li>- {dictionary.fpfr13c}</li>
              <li>- {dictionary.fpfr13d}</li>
              <li>- {dictionary.fpfr13e}</li>
              <li>- {dictionary.fpfr13f}</li>
              <li>- {dictionary.fpfr13g}</li>
              <li>- {dictionary.fpfr13h}</li>
              <li>- {dictionary.fpfr13i}</li>
              <li className='mb-2'>- {dictionary.fpfr13j}</li>
            </ul>

            <h5 className='mb-2 text-red-500'>{dictionary.fhfr14}</h5>
            <ul className='font-bold'>
              <li>- {dictionary.fpfr14a}</li>
              <li>- {dictionary.fpfr14b}</li>
              <li>- {dictionary.fpfr14c}</li>
              <li>- {dictionary.fpfr14d}</li>
              <li>- {dictionary.fpfr14e}</li>
              <li>- {dictionary.fpfr14f}</li>
              <li>- {dictionary.fpfr14g}</li>
              <li>- {dictionary.fpfr14h}</li>
              <li>- {dictionary.fpfr14i}</li>
              <li className='mb-2'>- {dictionary.fpfr14j}</li>
            </ul>

            <p>{dictionary.fpfr15}</p>

          </div>
        )}
      </div>

    </div>
  );
}

export default ShowHideContent;