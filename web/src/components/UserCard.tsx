import axios from "axios";

export type UserType = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

type UserCardProps = {
  user: UserType;
};

export default function UserCard({ user }: UserCardProps) {
  async function deleteUser(id: string) {
    try {
      await axios.delete(`http://localhost:4000/api/users/${id}`);
    } catch (error) {
      console.error("Error deleting user", error);
    }
  }

  return (
    <>
      <div className="w-96 h-96 bg-pink rounded-3xl p-5 flex flex-col items-center">
        <h1 className="text-white text-2xl font-bold">{user.name}</h1>
        <h1 className="text-white text-2xl font-bold">{user.email}</h1>
        <button
          className="px-10 rounded-xl py-3 bg-brown text-white"
          onClick={() => deleteUser(user._id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
