import Navbar from "@components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "@components/UserCard";
import { UserType } from "@components/UserCard";

export default function User() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/users", {
        name,
        email,
        password,
      });
      console.log("User added:", response.data);
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen h-screen bg-light-pink px-20 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-raleway text-brown">
          Users
        </h1>

        <div className="w-full px-40 flex flex-col items-center mt-10">
          <form
            onSubmit={handleSubmit}
            className="w-full h-96 bg-pink flex flex-col items-center space-y-4 p-4"
          >
            <h1 className="font-bold text-white text-2xl">Create a User</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-3/4 p-2 border-2 border-brown bg-white rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/4 p-2 border-2 border-brown bg-white rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-3/4 p-2 border-2 border-brown bg-white rounded-md"
              required
            />
            <button type="submit" className="bg-brown text-white px-4 py-2 rounded-md">
              Add User
            </button>
          </form>
        </div>

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
