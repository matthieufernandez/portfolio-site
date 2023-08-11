import React from 'react'
import { devops, frontend } from '../../lib/stack'
import Image from 'next/image'

export default function InfoCard() {

  return (
    <div className='flex'>

    {devops.map((tec) => {
        return (
            <div key={tec.id}>
                <Image src={tec.img} alt={`${tec.name} icon`} height={50} width={50} title={`${tec.name}`}/>
            </div>
        )
    })}

    </div>
  )
}
