import Button from "../Button";

export default function Sidebar({onStartAddProject}){

return(
    <div className="flex flex-col basis-1/4 bg-slate-950  rounded-tr-lg items-start gap-10 p-12 text-2xl">
        <h1 className="text-4xl font-bold text-stone-200">Your Projects</h1>
        <Button text='+ Add Project' onClick={onStartAddProject}/>
        {/* <button className="transition ease-in-out delay-100 text-xs md:text-base bg-slate-800 hover:bg-slate-700 rounded-lg py-2 px-3 text-slate-400 hover:text-slate-200">+ Add Project</button> */}
        <ul className="flex flex-col">
            <li className="transition ease-in delay-150 text-stone-300 hover:text-stone-100 hover:bg-slate-700 p-1 cursor-pointer w-80">Test!!!!!!!!!!!!!!!!!!!!!</li>
        </ul>
    </div>
);

}