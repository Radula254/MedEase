"use client";
import { useProfile } from "../../../components/UseProfile";
import { useEffect, useState } from "react";
import Link from "next/link";
import Left from "@/components/icons/Left";

export default function ReceptionistsPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loading: profileLoading, data: profileData } = useProfile();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/receptionists")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
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

  if (!profileData.admin) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
        <p style={{ color: "red" }}>Unauthorized!!!</p>
      </div>
    );
  }

  return (
    <section className="mx-auto mt-8 mb-20 px-3">
      <div className="mt-8">
        <h1 className="text-center font-bold text-xl underline mb-3">
          MedEase Receptionists Details
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
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user._id || index}>
                    <td>{index + 1}</td>
                    <td>{user?.name || "N/A"}</td>
                    <td>{user.email}</td>
                    <td>{user.receptionistInfo?.city || "N/A"}</td>
                    <td>{user.receptionistInfo?.country || "N/A"}</td>
                    <td>{user.receptionistInfo?.phone || "N/A"}</td>
                    <td>{user.receptionistInfo?.postalCode || "N/A"}</td>
                    <td>{user.receptionistInfo?.salary || "N/A"}</td>
                    <td>{user.receptionistInfo?.streetAddress || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center mt-20">
              <p className="font-extrabold text-2xl">No receptionists available</p>
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
