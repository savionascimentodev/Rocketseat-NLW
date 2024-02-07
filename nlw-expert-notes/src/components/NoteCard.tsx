export function NoteCard() {
  return (
    <button className="rounded-lg text-left outline-none bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600  focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">Há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quis
        animi, maxime molestias repellendus natus magni labore est soluta quod
        aliquam? Eligendi voluptatibus nulla modi enim earum qui soluta
        consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Neque quis animi, maxime molestias repellendus natus magni labore est
        soluta quod aliquam? Eligendi voluptatibus nulla modi enim earum qui
        soluta consequuntur.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  )
}