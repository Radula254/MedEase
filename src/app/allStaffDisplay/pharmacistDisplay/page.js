"use client";
import { useProfile } from "../../../components/UseProfile";
import { useEffect, useState } from "react";

export default function DoctorsPage() {
  const [users, setUsers] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch("/api/pharmacy").then((response) => {
      response.json().then((users) => {
        setUsers(users);
      });
    });
  });

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData.patient) {
    return "Unauthorised!!!";
  }

  console.log(users);

  return (
    <section className="mx-auto mt-8 mb-20 px-3">
      <div className="mt-8">
        <h1 className="text-center font-bold text-xl underline mb-3">
          MedEase Pharmacists' Details
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
                  <td>{user.pharmacistInfo.city || "N/A"}</td>
                  <td>{user.pharmacistInfo.country || "N/A"}</td>
                  <td>{user.pharmacistInfo.phone || "N/A"}</td>
                  <td>{user.pharmacistInfo.postalCode || "N/A"}</td>
                  <td>{user.pharmacistInfo.salary || "N/A"}</td>
                  <td>{user.pharmacistInfo.streetAddress || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
