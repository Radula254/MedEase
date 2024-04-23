"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch("/api/bookedAppointments").then((response) => {
      response.json().then((users) => {
        setUsers(users);
        console.log(users);
      });
    });
  });

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData.doctor) {
    return "Unauthorised!!!";
  }

  return (
    <section className="max-w-2xl mx-auto mt-10 mb-20">
        <h1 className="font-bold text-2xl text-center text-primary">Appointment Booking</h1>
  <div className="mt-8">
    {users?.filter(user => user?.userInfo?.consultationPayment === true && user?.userInfo?.createdAppointment === true).length > 0 ?
      users.filter(user => user?.userInfo?.consultationPayment === true && user?.userInfo?.createdAppointment === true).map((user) => (
        <div key={user._id} className="bg-gray-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
            <div className="text-gray-700">
              {!!user.name && <span>{user.name}</span>}
              {!user.name && <span className="italic">No Name</span>}
            </div>
            <span className="text-gray-500">{user.email}</span>
          </div>
          <div>
            <Link className="button" href={"/appointments/nurse/" + user._id}>
              Book
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
