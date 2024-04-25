"use client";
import Link from "next/link";
import { useProfile } from "../../../components/UseProfile";
import { useEffect, useState } from "react";
import Left from "@/components/icons/Left";

export default function DoctorsPage() {
  const [users, setUsers] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch("/api/nurses").then((response) => {
      response.json().then((users) => {
        setUsers(users);
      });
    });
  });

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData.admin) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
          <p style={{ color: 'red' }}>Unauthorised!!!</p>
      </div>
    )
  }

  return (
    <section className="mx-auto mt-8 mb-20 px-3">
    <div className="mt-8">

      <div className="flex items-center justify-between ">
        <div className="flex-initial pr-40">
          <Link href="/admin" className="btn ">
            <Left />
            <span>Back to dashboard</span>
          </Link>
        </div>

       
        <div className="flex-grow flex justify-center mx-auto">
          <div className="form-control max-w-3xl w-full pl-20 mt-2"> 
            <label className="input-group">
              <input 
                type="text" 
                placeholder="Search by name or email..." 
                className="input input-bordered w-full" 
                value={null}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>
        </div>

        {/* Flex space filler */}
        <div className="flex-1"></div>
      </div>
      <div className="mt-8">
        <h1 className="text-center font-bold text-xl underline mb-3">
          MedEase Nurses Details
        </h1>
        {users?.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Country</th>
                <th>Phone</th>
                <th>Postal Code</th>
                <th>Salary</th>
                <th>Street Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={users._id || index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.nurseInfo?.city || "N/A"}</td>
                  <td>{user.nurseInfo?.country || "N/A"}</td>
                  <td>{user.nurseInfo?.phone || "N/A"}</td>
                  <td>{user.nurseInfo?.postalCode || "N/A"}</td>
                  <td>{user.nurseInfo?.salary || "N/A"}</td>
                  <td>{user.nurseInfo?.streetAddress || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="max-w-xs mx-auto mt-8 ml-2">
        <Link href={"/admin"} className="btn">
          <Left />
          <span>Back to dashboard</span>
        </Link>
      </div>
      </div>
      </div>
    </section>
  );
}
