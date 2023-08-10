import React from 'react'
import { frontend } from '../../lib/stack'
import Image from 'next/image'

export default function InfoCard() {

  return (
    <div className='flex'>

    {frontend.map((tec) => {
        return (
            <>
                <Image src={tec.img} alt={`${tec.name}`} height={50} width={50} title={`${tec.name}`}/>
            </>
        )
    })}

    </div>
  )
}
