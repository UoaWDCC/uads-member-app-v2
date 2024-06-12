<<<<<<< HEAD
import Navbar from "../components/Navbar";

=======
import image from "../assets/uads_logo.svg";
>>>>>>> main
export default function Home() {
  return (
    <>
    <Navbar />
    <div className="container px-4 pt-24 mx-auto content-center">
      <h1 className=" text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
        Home Page
      </h1>
      <img src={image} alt="" />
    </div>
    </>
  );
}
