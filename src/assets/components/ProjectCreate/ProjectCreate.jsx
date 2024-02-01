import InputField from "./InputField";

export default function ProjectCreate(){

    return(
        
        <div className="basis-3/4 p-11 text-3xl font-mono font-bold flex flex-col gap-4 items-center" >
            <InputField label="Title" type='text'/>
            <InputField label="Description" textarea type='text'/>
            <InputField label="Due Date" type='date'/>
            <div className="flex flex-row-reverse gap-7">
            <button>Save</button>
            <button>Cancel</button>
            </div>
        </div>
        
    )


}