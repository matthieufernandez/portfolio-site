type Props = {
  children: React.ReactNode,
  classes: string,
}

export default function Button(props: Props) {

  return (
    <button className={`${props.classes} + " bg-[#FF6F91] hover:bg-[#F9F871] hover:scale-95 hover:shadow-[2px_2px_0_black] transition ease-in-out duration-110 text-black font-bold py-2 px-4 shadow-[6px_6px_0_black] border-4 border-black "`}>
        {props.children}
    </button>
  )
}