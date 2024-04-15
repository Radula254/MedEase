"use client";
import { useProfile } from "../../../components/UseProfile";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DoctorsPage() {
  const [users, setUsers] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch("/api/doctors").then((response) => {
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

  console.log(users)

  return (
    <section className="mx-auto mt-8 mb-20 px-3">
      <div className="mt-8">
        <h1 className="text-center font-bold text-xl underline mb-3">MedEase Doctors' Details</h1>
        {users?.length > 0 &&
        <table className="table table-bordered">
            <thead>
                <tr>
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
           { users.map(user => <tr key={users._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.doctorInfo.city}</td>
            <td>{user.doctorInfo.country}</td>
            <td>{user.doctorInfo.phone}</td>
            <td>{user.doctorInfo.postalCode}</td>
            <td>{user.doctorInfo.salary}</td>
            <td>{user.doctorInfo.streetAddress}</td>
           </tr>)}
            </tbody>
          </table>
          }
      </div>
    </section>
  );
}
