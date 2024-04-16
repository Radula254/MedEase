import { useState } from "react";
import EditableImage from "./EditableImage";

export default function AppointmentForm({user, onSave}) {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");

  return (
    <div className="flex gap-4 ">
      <div>
        <div className="p-2 rounded-lg relative max-w-[120px]">
          <EditableImage link={image}/>
        </div>
      </div>
      <form className="grow" onSubmit={ev => onSave(ev, {name:userName, image, phone, streetAddress, postalCode, city, country})}>
        <label>First and Last name:</label>
        <input
          type="text"
          disabled={true}
          placeholder="First and last name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <label>Email:</label>
        <input type="email" disabled={true} value={user?.email} />
        <label>Height</label>
        <input
          type="tel"
          placeholder="Height"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <label>Weight</label>
        <input
          type="text"
          placeholder="Weight"
          value={streetAddress}
          onChange={(ev) => setStreetAddress(ev.target.value)}
        />
        <label>Heart Rate</label>
        <input
          type="text"
          placeholder="Heart Rate"
          value={streetAddress}
          onChange={(ev) => setStreetAddress(ev.target.value)}
        />
        <label>Pre-Conditions</label>
        <textarea
          type="text"
          placeholder="Pre-Conditions"
          value={country}
          onChange={(ev) => setCountry(ev.target.value)}
        />
        <label>Consultation Price</label>
        <input
          type="text"
          placeholder="Consultation Price"
          value={streetAddress}
          onChange={(ev) => setStreetAddress(ev.target.value)}
        />
        <label>Lab Results</label>
        <textarea
          type="text"
          placeholder="Lab Results"
          value={country}
          onChange={(ev) => setCountry(ev.target.value)}
        />
        <label>Prescriptions and Frequency</label>
        <textarea
          type="text"
          placeholder="Prescriptions and Frequency"
          value={country}
          onChange={(ev) => setCountry(ev.target.value)}
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
