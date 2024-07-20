import Navbar from "@components/Navbar";
import icecream from "../assets/ice-cream.svg"
import Footer from "@components/Footer";
import ExecCard from "@components/ExecCard";
import { ExecType } from "../utils/FrontendTypes";
import { useState, useEffect } from "react";
import axios from "axios"

export default function About() {

  const [execs, setExecs] = useState<ExecType[]>([])

  useEffect(() => {
    async function fetchExecs() {
      try {
        const response = await axios.get("http://localhost:4000/api/execs/");
        setExecs(response.data);
      } catch (error) {
        console.error("Error fetching exec data from backend", error);
      }
    }
    fetchExecs()
  }, []);
  
  return (
    <>
      <Navbar />

      <section id="About Us" className="bg-light-pink h-fit w-screen overflow-hidden ">
        <div className="flex flex-row py-14 lg:pl-20 px-20 lg:px-0 ">
          <div className="flex flex-col lg:w-2/3 xl:w-3/4 2xl:w-7/12  text-brown font-semibold text-lg md:text-2xl md:tracking-tight lg:tracking-wide font-raleway relative">
            <div className="flex flex-row items-center mb-4 lg:mb-10 ">
              <h1 className="text-5xl font-bold item-center">About us</h1>
              <div className="lg:hidden relative top-0 left-0 flex items-center justify-center w-24 h-24 self-start">
                <div className="absolute bg-pink aspect-square rounded-full w-16 h-16">
                </div>
                <img src={icecream} className="absolute -rotate-12 w-36 h-36"></img>
              </div>
            </div>
            <p className="mb-5 lg:mb-10">Welcome to the sweetest corner of the University of Auckland – the Dessert Society!<br /></p>
            <p className="mb-5 lg:mb-10">Whether you're a baker, connoisseur, or simply love sweets, you'll find a home with us.<br /></p>
            <p className="mb-5 lg:mb-10">Explore classic recipes to innovative creations through our events, workshops, and gatherings. Join us on a delightful journey through dessert-making, from perfect bakes to annual dessert crawls.<br /></p>
            <p className="mb-5 lg:mb-10">No matter your skill level or background, everyone is welcome at the University of Auckland Dessert Society!</p>
          </div>
          <div className="hidden relative lg:flex items-center justify-center w-1/2 2xl:w-5/12 lg:ml-2 xl:ml-20 2xl:ml-40 ">
            <div className="absolute bg-pink aspect-square rounded-full lg:w-64 lg:h-64 xl:w-72 xl:h-72  2xl:w-96 2xl:h-96 ">
            </div>
            <img src={icecream} className="absolute -rotate-12 w-auto"></img>
          </div>
        </div>
      </section>

      <section id="Exec List" className="bg-pink h-fit w-screen ">
        <div className="flex flex-col py-24 px-20">
        <h1 className="text-6xl font-raleway text-light-pink justify-self-center self-center font-bold text-center">The Executive Team</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {execs.map((exec, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-light-pink text-center">{exec.role}:</h3>
                <p className="text-xl md:text-2xl font-normal mt-2 text-light-pink text-center">{exec.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Exec grid" className="bg-light-pink h-fit w-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-20 lg:mx-36 py-10">
            {execs.map((exec, index) => (
              <div key={index}>
                <ExecCard exec={exec} />
                </div>
            ))}
          </div>
      </section>
      
      <Footer />
    </>
  );
}

