export default function Container({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="bg-slate-100 p-4 border-4 border-black shadow-[6px_6px_0_black]">
        {children}
    </div>
  )
}
