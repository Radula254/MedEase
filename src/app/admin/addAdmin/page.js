"use client";
import EditableImage from "@/components/layout/EditableImage";
import { useState } from "react";

export default function AddAdminPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  
  return (
    <section className="mt-10 mb-20 max-w-2xl mx-auto">
      <h1 className="text-center font-bold text-xl">Add Administrator</h1>
      <div className="md:flex gap-4">
        <div>
          <div className="p-2 rounded-lg relative max-w-[120px">
            <EditableImage />
          </div>
        </div>
        <form className="grow">
          <label>First and last name</label>
          <input type="text" placeholder="First and last name" />
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <label>Phone</label>
          <input type="text" placeholder="Phone" />
          <label>Street Address</label>
          <input type="text" placeholder="Street Address" />
          <label>Postal Code</label>
          <input type="text" placeholder="Postal Code" />
          <label>City</label>
          <input type="text" placeholder="City" />
          <label>Country</label>
          <input type="text" placeholder="Country" />
          <button
            type="submit"
            className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
}
