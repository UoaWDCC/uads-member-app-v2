import icecream from "../assets/ice-cream.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExecCard from "../components/ExecCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { ExecType } from "../utils/FrontendTypes";
import { Loader } from "@mantine/core";
import { motion } from "framer-motion";
import { cardVariant, parentVariant } from "../utils/AnimationUtils";

export default function About() {
  const [execs, setExecs] = useState<ExecType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchExecs() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/execs/`);
        setExecs(response.data);
      } catch (error) {
        console.error("Error fetching exec data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchExecs();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-screen h-auto bg-light-pink overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.15 }}
          className="w-full h-auto md:min-h-[500px] px-6 md:px-14 py-4 flex flex-col md:flex-row justify-between items-center"
        >
          <div
            className="w-full md:w-1/2 text-brown font-bold mb-10 md:mb-0"
            data-testid="aboutSection"
          >
            <h1 className="text-3xl mb-10">About Us</h1>
            <p>
              Welcome to the sweetest corner of the University of Auckland – the Dessert Society!
            </p>
            <br />
            <p>
              Whether you're a baker, connoisseur, or simply love sweets, you'll find a home with
              us.
            </p>
            <br />
            <p>
              Explore classic recipes to innovative creations through our events, workshops, and
              gatherings. Join us on a delightful journey through dessert-making, from perfect bakes
              to annual dessert crawls.
            </p>
            <br />
            <p>
              No matter your skill level or background, everyone is welcome at the University of
              Auckland Dessert Society!
            </p>
            <br />
          </div>

          <div
            className="w-52 h-52 md:h-80 md:w-80 rounded-full bg-pink flex justify-center items-center mb-5 overflow-hidden"
            data-testid="icecreamPhoto"
          >
            <img
              className="w-full h-full object-cover transform -rotate-45"
              src={icecream}
              alt="ice-cream photo"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="w-full h-auto bg-pink text-light-pink flex flex-col items-center pt-8"
        >
          <h1 className="text-2xl font-bold md:text-3xl">The Executive Team</h1>
          {loading ? (
            <div className="flex justify-center py-10">
              <Loader size="lg" color="blue" />
            </div>
          ) : (
            <motion.div
              variants={parentVariant}
              initial="hidden"
              animate="show"
              className="w-full h-auto flex flex-wrap justify-evenly"
            >
              {execs.map((exec, index) => (
                <motion.div
                  variants={cardVariant}
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center py-6 md:py-10"
                  data-testid="execTitleContainer"
                >
                  <h2 className="font-bold">{exec.role}</h2>
                  <p>{exec.name}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="w-full h-auto bg-light-pink text-light-pink flex flex-col items-center"
        >
          {loading ? (
            <div className="flex justify-center py-10">
              <Loader size="lg" color="blue" />
            </div>
          ) : (
            <motion.div
              variants={parentVariant}
              initial="hidden"
              animate="show"
              className="w-full h-auto flex flex-wrap justify-center my-10"
            >
              {execs.map((exec, index) => (
                <motion.div
                  variants={cardVariant}
                  key={index}
                  className="flex justify-center px-10"
                  data-testid="execCardContainer"
                >
                  <ExecCard exec={exec} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
