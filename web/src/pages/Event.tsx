import Navbar from "../components/Navbar";
import cupcake from "../assets/cupcake.svg";


export default function Event() {
  return (
    <>
      <Navbar />

      <div className="max-w-screen bg-light-pink h-96 p-10">
        <div className="w-full h-auto flex justify-between">
          <h1 className="pt-5 text-brown text-4xl font-raleway font-bold">Events</h1>
          <img className="h-24" src={cupcake} alt="Cupcake" />
        </div>
        <div className="w-full h-auto"> 
          <input
							type="text"
              className="bg-white w-full h-14 px-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink"
							placeholder="Search Events..."
						/>
        </div>
      </div>
      
    </>
  );
}
