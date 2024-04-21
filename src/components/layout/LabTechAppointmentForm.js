import { useState } from "react";
import EditableImage from "./EditableImage";

export default function LabTechAppointmentForm({user, onSave}) {
  const [labResults, setLabResults] = useState(user?.labResults || '');
  const [labResultsDone, setLabResultsDone] = useState(user?.admin || false);

  function handleLabResultsChange(ev) {
    setLabResults(ev.target.value);
    setLabResultsDone(true);
  }

  return (
    <div className="flex gap-4 ">
      <div>
        <div className="p-2 rounded-lg relative max-w-[120px]">
          <EditableImage link={user?.image} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
           labResults,
           labResultsDone,
          })
        }
      >
        <label>First and Last name:</label>
        <input
          type="text"
          placeholder="First and last name"
          value={user?.name}
          disabled={true} 
        />
        <label>Email:</label>
        <input type="email" disabled={true} value={user?.email} />
        <label>Lab Results</label>
        <textarea
          type="text"
          placeholder="Lab Results"
          value={labResults}
          onChange={handleLabResultsChange}
        />
        <button
          type="submit"
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Save
        </button>
      </form>
    </div>
  );
}
