import { useEffect, useState } from "react";
import EditableImage from "./EditableImage";

export default function ReceptionistForm({user, onSave}) {
  const [consultationPrice, setConsultationPrice] = useState('');
  const [nurse, setNurse] = useState([]);
  const [selectedNurse, setSelectedNurse] = useState('');
  const [consultationPayment, setConsultationPayment] = useState(false);


  useEffect(() => {
    fetch('/api/nurses').then(res => {
      res.json().then(nurses => {
        setNurse(nurses);
      });
    });
  }, []);

  function handleConsultationChange(ev) {
    setConsultationPrice(ev.target.value);
    setConsultationPayment(true)
  }

  console.log(user)

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
           consultationPrice,
           selectedNurse,
           consultationPayment,
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
        <label>Nurse</label>
        <select value={selectedNurse} onChange={(ev) => setSelectedNurse(ev.target.value)}>
        <option value="" disabled selected>Select a nurse</option>
          {nurse?.length > 0 && nurse.map(d => (
            <option value={d._id}>{d.name}</option>
          ))}
        </select>
        <label>Consultation Price</label>
        <input
          type="text"
          placeholder="Consultation Price"
          value={consultationPrice}
          onChange={handleConsultationChange}
        />
        <button
          type="submit"
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Paid
        </button>
      </form>
    </div>
  );
}
