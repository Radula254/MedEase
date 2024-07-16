"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    if (profileData?.doctor) {
      const userId = profileData?._id; 
      const role = profileData?.doctor;

      fetch(`/api/bookedAppointments?userId=${userId}&role=${role}`).then((response) => {
        response.json().then((users) => {
          setUsers(users);
          console.log(users);
        });
      });
    }
  }, [profileData]);

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData?.doctor) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
          <p style={{ color: 'red' }}>Unauthorised!!!</p>
      </div>
    )
  }

  return (
    <section className="max-w-2xl mx-auto mt-10 mb-20">
      <div className="mt-8">
        {users?.filter(user => user?.userInfo?.status === true || user?.userInfo?.labResultsDone === true).length > 0 ?
          users.filter(user => user?.userInfo?.status === true || user?.userInfo?.labResultsDone === true).map((user) => (
            <div key={user._id} className="bg-gray-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
                <div className="text-gray-700">
                  {!!user.name && <span>{user.name}</span>}
                  {!user.name && <span className="italic">No Name</span>}
                </div>
                <span className="text-gray-500">{user.email}</span>
              </div>
              <div className="  ">
                <Link className="button" href={"/appointments/" + (profileData?.doctor ? "doctor" : "nurse") + "/" + user._id}>
                  Consult
                </Link>
              </div>
            </div>
          )) :
          <p className="text-center text-gray-500">No Appointments Booked</p>
        }
      </div>
    </section>
  );
}
