"use client";
import { useState } from "react";
import EditableImage from "./EditableImage";

export default function CategoryForm({ onSubmit, category}) {
    const [image, setImage] = useState(category?.image || "");
    const [name, setName] = useState(category?.name || "");
    const [details, setDetails] = useState(category?.details || "");
    const [description, setDescription] = useState(category?.description || "");


    return(
       <form className="mt-8 max-w-2xl mx-auto" onSubmit={(ev) => onSubmit(ev, { image, name, details, description})}>
        <div className="grid items-start gap-4" style={{ gridTemplateColumns: ".3fr .7fr" }}>
            <div>
                <EditableImage link={image} setLink={setImage}/>
            </div>
            <div>
                <label>Category name</label>
                <input type="text" value={name} onChange={(ev) => setName(ev.target.value)}/>
                <label>Details</label>
                <textarea type="text" value={details} onChange={(ev) => setDetails(ev.target.value)}/>
                <label>Description</label>
                <textarea type="text" value={description} onChange={(ev) => setDescription(ev.target.value)}/>
                <button type="submit">Save</button>
            </div>
        </div>
       </form>
    )
}