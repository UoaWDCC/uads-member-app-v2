import Navbar from "@components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "@components/UserCard";
import { UserType } from "@components/UserCard";

export default function User() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:4000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    }
    fetchUsers();
  }, [users]);

  console.log(users);

  return (
    <>
      <Navbar />
      <div className="max-w-screen h-screen bg-light-pink px-20 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-brown">
          Users
        </h1>
        <div className="flex flex-wrap justify-center mt-10">
          {users.map((user) => (
            <div className="mx-10">
              <UserCard key={user._id} user={user} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
