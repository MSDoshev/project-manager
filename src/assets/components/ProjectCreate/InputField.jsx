export default function InputField({label, textarea, ...props }){
    return(
    <p>
        <label className="block">{label}</label>
        {textarea? <textarea {...props}/> : <input {...props}/>}
    </p>
    );
}