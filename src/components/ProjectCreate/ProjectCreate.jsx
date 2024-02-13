import InputField from "./InputField";

export default function ProjectCreate(){

    return(
              
        <div className="w-[35rem] mt-16">
            <div>
                <InputField label="Title" type='text'/>
                <InputField label="Description" textarea type='text'/>
                <InputField label="Due Date" type='date'/>
            </div>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
        </div>
      

        
    )


}