export default function Button({text, ...props}) {
  return (
    <button className="transition ease-in-out delay-100 text-xs md:text-base bg-slate-800 hover:bg-slate-700 rounded-lg py-2 px-3 text-slate-400 hover:text-slate-200" {...props}>
      {text}
    </button>
  );
}
