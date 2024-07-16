import { useState } from "react";
import EditableImage from "./EditableImage";

export default function PatientAppointmentForm({ user, onSave }) {
  const [symptoms, setSymptoms] = useState('');
  const [createdAppointment, setCreatedAppointment] = useState(false);

  function handleBooking(ev) {
    setSymptoms(ev.target.value);
    setCreatedAppointment(true);
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
            name: user?.name,
            email: user?.email,
            symptoms,
            createdAppointment,
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
        <label>Symptoms</label>
        <textarea
          type="text"
          placeholder="Provide any symptoms experienced"
          value={symptoms}
          onChange={handleBooking}
        />
        <button
          type="submit"
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
