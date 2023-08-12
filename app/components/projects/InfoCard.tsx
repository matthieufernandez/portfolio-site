import Image from 'next/image'
type Props = {
    stack: TechStack,
}

export default function InfoCard( { stack }: Props ) {

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-8 place-items-center min-w-[25vw]">
    {stack.map((tec) => {
        return (
            <div key={tec.id}>
                <Image src={tec.img} alt={`${tec.name} icon`} height={50} width={50} title={`${tec.name}`}/>
            </div>
        )
    })}

    </div>
  )
}
