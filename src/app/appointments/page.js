"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "../../components/UseProfile";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch("/api/appointments").then((response) => {
      response.json().then((users) => {
        setUsers(users);
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
    <section className="max-w-2xl mx-auto mt-8">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        {users?.length > 0 &&
          users.map((user) => (
            <div className="bg-gray-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
                <div className="text-gray-700">
                  {!!user.name && <span>{user.name}</span>}
                  {!user.name && <span className="italic">No Name</span>}
                </div>
                <span className="text-gray-500">{user.email}</span>
              </div>
              <div>
                <Link className="button" href={"/appointments/" + user._id}>
                  Edit
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
