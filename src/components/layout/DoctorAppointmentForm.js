import { useState } from "react";
import EditableImage from "./EditableImage";
import LabTestButton from "../LabTest";
import toast from "react-hot-toast";

export default function DoctorAppointmentForm({user, onSave}) {
  const [diagnosis, setDiagnosis] = useState(user?.diagnosis || '');
  const [labResults, setLabResults] = useState(user?.labResults || '');
  const [prescriptionsAndFrequency, setPrescriptionsAndFrequency] = useState(user?.prescriptionsAndFrequency || '');
  const [labResultStatus, setLabResultStatus] = useState(null);
  const [consulted, setConsulted] = useState(user?.consulted || false);

  function handleLabratoryTest() {
    setLabResultStatus(true);
    toast.success('Lab Test Requested');
  }

  function handleDiagnosisChange(ev) {
    setDiagnosis(ev.target.value);
    setConsulted(true);
  }

  console.log(user?.labResults)

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
           diagnosis,
           prescriptionsAndFrequency,
           labResultStatus,
           consulted,
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
          value={user?.labResults}
          disabled={true}
        />
        <div>
          <LabTestButton label='Request Lab Test' onTest={handleLabratoryTest}/>
        </div>
        <label>Diagnosis</label>
        <textarea
          type="text"
          placeholder="Diagnosis"
          value={diagnosis}
          onChange={handleDiagnosisChange}
        />
        <label>Prescriptions and Frequency</label>
        <textarea
          type="text"
          placeholder="Prescriptions and Frequency"
          value={prescriptionsAndFrequency}
          onChange={(ev) => setPrescriptionsAndFrequency(ev.target.value)}
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
