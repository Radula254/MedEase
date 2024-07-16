import { useState } from "react";
import EditableImage from "./EditableImage";
import Trash from "../icons/Trash";
import Plus from "../icons/Plus";

export default function PharmaAppointmentForm({ user, onSave }) {
  const [prescriptionsAndFrequency, setPrescriptionsAndFrequency] = useState(user?.prescriptionsAndFrequency || "");
  const [drugs, setDrugs] = useState([]);
  const [prescriptionsStatus, setPrescriptionsStatus] = useState(true)


  function adddrugs() {
    setDrugs((oldDrugs) => {
      return [...oldDrugs, { medication: "", price: 0 }];
    });
  }

  function editDrugs(ev, index, prop) {
    const newValue = ev.target.value;
    setDrugs((prevDrugs) => {
      const newDrugs = [...prevDrugs];
      newDrugs[index][prop] = newValue;
      return newDrugs;
    });
  }

  function removeDrugs(indexToRemove) {
    setDrugs((prev) =>
      prev.filter((v, index) => index !== indexToRemove)
    );
  }

  return (
    <div className="flex gap-4 mx-auto">
      <div>
        <div className="p-2 rounded-lg relative max-w-[120px]">
          <EditableImage link={user?.image} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
            drugs,
            prescriptionsStatus,
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
        <label>Prescriptions and Frequency</label>
        <textarea
          type="text"
          placeholder="Prescriptions and Frequency"
          value={user?.prescriptionsAndFrequency}
          disabled={true}
        />
        <div className="bg-gray-200 p-2 rounded-md mb-2">
          <label className="pl-2">Medication:</label>
          {drugs?.length > 0 &&
            drugs.map((sizes, index) => (
              <div className="flex items-end gap-2 pl-2">
                <div>
                  <label>Prescriptions</label>
                  <input
                    type="text"
                    placeholder="Prescriptions"
                    className="mr-6"
                    value={drugs.medication}
                    onChange={(ev) => editDrugs(ev, index, "medication")}
                  />
                </div>
                <div>
                  <label>Price</label>
                  <input
                    type="text"
                    placeholder="Price"
                    className="mr-6"
                    value={drugs.price}
                    onChange={(ev) => editDrugs(ev, index, "price")}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => removeDrugs(index)}
                    className="bg-white mb-2"
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            ))}
          <button
            type="button"
            onClick={adddrugs}
            className="bg-white px-2 items-center"
          >
            <Plus className="w-4 h-4 " />
            Add Medication
          </button>
        </div>
        <button
          type="submit"
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Dispense
        </button>
      </form>
    </div>
  );
}
