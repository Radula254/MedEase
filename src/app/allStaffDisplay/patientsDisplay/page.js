"use client";
import { useProfile } from "../../../components/UseProfile";
import { useEffect, useState } from "react";

export default function PatientsPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

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
          MedEase Patients Details
        </h1>
        {users?.length > 0 ? (
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
                <th>Street Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id || index}>
                  <td>{index + 1}</td>
                  <td>{user?.name || "N/A"}</td>
                  <td>{user.email}</td>
                  <td>{user.userInfo?.city || "N/A"}</td>
                  <td>{user.userInfo?.country || "N/A"}</td>
                  <td>{user.userInfo?.phone || "N/A"}</td>
                  <td>{user.userInfo?.postalCode || "N/A"}</td>
                  <td>{user.userInfo?.streetAddress || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center mt-20">
            <p className="font-extrabold text-2xl">No patients available</p>
          </div>
        )}
      </div>
    </section>
  );
}
