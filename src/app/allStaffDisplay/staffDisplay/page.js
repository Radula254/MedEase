"use client";
import { useProfile } from "../../../components/UseProfile";
import { useEffect, useState } from "react";
import Link from "next/link";
import Left from "@/components/icons/Left";

export default function StaffPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const { loading: profileLoading, data: profileData } = useProfile();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/allStaff")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoading(false); // Set loading to false after data is fetched
      });
  }, []);

  const filteredUsers = users.filter((user) => 
    user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user?.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (profileLoading || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="loader"></div>
          <p className="mt-2">Loading ...</p>
        </div>
        <style jsx>{`
          .loader {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #4f46e5;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  if (!profileData?.admin) { // Check for profileData existence and admin status
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
        <p style={{ color: 'red' }}>Unauthorized!!!</p>
      </div>
    );
  }

  const getOccupation = (user) => {
    if (user.doctor) return "Doctor";
    if (user.labTech) return "Lab Technician";
    if (user.nurse) return "Nurse";
    if (user.receptionist) return "Receptionist";
    if (user.pharmacist) return "Pharmacist";
    return "Unknown";
  }

  return (
    <section className="mx-auto mt-8 mb-20 px-3">
      <div className="mt-8">
        <h1 className="text-center font-bold text-xl underline mb-3">
          MedEase Staff Details
        </h1>
        <div className="flex items-center justify-center">
          <div className="form-control max-w-3xl w-full pl-20 mt-2"> 
            <label className="input-group">
              <input 
                type="text" 
                placeholder="Search by name or email..." 
                className="input input-bordered w-full" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="mt-8">
          {filteredUsers.length > 0 ? (
            <table className="table table-bordered mx-auto">
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
                  <th>Occupation</th> {/* New column for Occupation */}
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user._id || index}> {/* Use user._id if available */}
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.city || "N/A"}</td>
                    <td>{user.country || "N/A"}</td>
                    <td>{user.phone || "N/A"}</td>
                    <td>{user.postalCode || "N/A"}</td>
                    <td>{user.salary || "N/A"}</td>
                    <td>{user.streetAddress || "N/A"}</td>
                    <td>{getOccupation(user)}</td> {/* Display the occupation */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center mt-20">
              <p className="font-extrabold text-2xl">No staff members available</p>
            </div>
          )}
          <div className="max-w-xs mx-auto mt-8 ml-2">
            <Link href="/admin" className="btn">
              <Left />
              <span>Back to dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
