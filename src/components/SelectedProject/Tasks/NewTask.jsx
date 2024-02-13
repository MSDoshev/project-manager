import { useRef, useState } from "react";
import Modal from "../../Modal";

export default function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('');

  const modal = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === ''){
        modal.current.open();
        return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-red-800 my-4">Invalid Input</h2>
        <p className='text-slate-950 mb-4'>You cannot submit empty tasks.</p>
    </Modal>
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-100 border-b-2 border-stone-300"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
    </>
  );
}
