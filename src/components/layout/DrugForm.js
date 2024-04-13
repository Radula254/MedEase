import EditableImage from "@/components/layout/EditableImage";
import { useEffect, useState } from "react";

export default function DrugForm({onSubmit,drugs}) {
  const [image, setImage] = useState(drugs?.image || '');
  const [name, setName] = useState(drugs?.name || '');
  const [description, setDescription] = useState(drugs?.description || '');
  const [details, setDetails] = useState(drugs?.details || '');
  const [price, setPrice] = useState(drugs?.price || '');
  const [selectedCategory, setSelectedCategory] = useState(drugs?.selectedCategory || '');
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/api/drugCategory').then(res => {
      res.json().then(categories => {
        setCategory(categories);
      });
    });
  }, []);

  return (
    <form onSubmit={ev => onSubmit(ev, {image,name,description,details,price,selectedCategory})} className="mt-8 max-w-2xl mx-auto">
      <div
        className="grid items-start gap-4"
        style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label>Drug Name</label>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <label>Description</label>
          <textarea
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
          <label>Details</label>
          <textarea
            type="text"
            value={details}
            onChange={(ev) => setDetails(ev.target.value)}
            className=""
          />
          <label>Category</label>
          <select value={selectedCategory} onChange={(ev) => setSelectedCategory(ev.target.value)}>
          <option value="" disabled selected>Select a category</option>
            {category?.length > 0 && category.map(c => (
              <option value={c._id}>{c.name}</option>
            ))}
          </select>
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
          <button
            type="submit"
            className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
