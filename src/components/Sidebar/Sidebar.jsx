import Button from "../Button";

export default function Sidebar({onStartAddProject, projects}){

return(
    // <aside className="flex flex-col basis-1/4 bg-slate-950  rounded-tr-lg items-start gap-10 p-12 text-2xl">
    <aside className="w-1/3 px-8 py-16 md:w-72 rounded-tr-lg bg-slate-950">
        <h2 className="text-2xl font-bold text-stone-200 pb-6 md:text-3xl">Your Projects</h2>
        <Button text='+ Add Project' onClick={onStartAddProject}/>
        {/* <button className="transition ease-in-out delay-100 text-xs md:text-base bg-slate-800 hover:bg-slate-700 rounded-lg py-2 px-3 text-slate-400 hover:text-slate-200">+ Add Project</button> */}
        <ul className="mt-8">
            {projects.map(project => <li key={project.id} className=" p-1 cursor-pointer ">
                <button className="w-full text-left px-2 py-1 my-1 transition ease-in delay-150 text-stone-300 hover:text-stone-100 hover:bg-slate-700 ">{project.title}</button>
            </li>)}
            
        </ul>
    </aside>
);

}