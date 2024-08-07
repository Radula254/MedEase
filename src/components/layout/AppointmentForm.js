import { useEffect, useState } from "react";
import EditableImage from "./EditableImage";

export default function AppointmentForm({user, onSave}) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [preConditions, setPreConditions] = useState('');
  const [status, setStatus] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');


  useEffect(() => {
    fetch('/api/doctors').then(res => {
      res.json().then(doctors => {
        setDoctor(doctors);
        console.log(doctors)
      });
    });
  }, []);

  function handleConsultationChange(ev) {
    setPreConditions(ev.target.value)
    setStatus(true);
  }

  console.log(doctor)

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
           height,
           weight,
           heartRate,
           preConditions,
           status,
           selectedDoctor,
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
        <label>Height in cm</label>
        <input
          type="tel"
          placeholder="Height"
          value={height}
          onChange={(ev) => setHeight(ev.target.value)}
        />
        <label>Weight in kg</label>
        <input
          type="text"
          placeholder="Weight"
          value={weight}
          onChange={(ev) => setWeight(ev.target.value)}
        />
        <label>Heart Rate</label>
        <input
          type="text"
          placeholder="Heart Rate"
          value={heartRate}
          onChange={(ev) => setHeartRate(ev.target.value)}
        />
        <label>Pre-Conditions</label>
        <textarea
          type="text"
          placeholder="Pre-Conditions"
          value={preConditions}
          onChange={handleConsultationChange}
        />
        <label>Doctor</label>
        <select value={selectedDoctor} onChange={(ev) => setSelectedDoctor(ev.target.value)}>
        <option value="" disabled selected>Assign a doctor</option>
          {doctor?.length > 0 && doctor.map(d => (
            <option value={d._id}>{d.name}</option>
          ))}
        </select>
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
