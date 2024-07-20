import Navbar from "@components/Navbar";
import icecream from "../assets/ice-cream.svg"

export default function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <ExecutiveTeam />
    </>
  );
}

function AboutUs() {
  return (
    <>
    <div className="bg-light-pink h-fit w-screen">
      <div className="flex flex-row py-36 px-20">
        <div className="flex flex-col w-7/12 mr-52 text-brown font-semibold text-2xl tracking-wide font-raleway">
          <h1 className="text-6xl mb-10 font-bold">About us</h1>
          <p className="mb-10">Welcome to the sweetest corner of the University of Auckland – the Dessert Society!<br /></p>

          <p className="mb-10">Whether you're a baker, connoisseur, or simply love sweets, you'll find a home with us.<br /></p>

          <p className="mb-10">Explore classic recipes to innovative creations through our events, workshops, and gatherings. Join us on a delightful journey through dessert-making, from perfect bakes to annual dessert crawls.<br /></p>

          <p className="mb-5">No matter your skill level or background, everyone is welcome at the University of Auckland Dessert Society!</p>
        </div>
        <div className="self-center justify-self-center w-1/2">
          <div className="bg-pink aspect-square rounded-full">
            <img src={icecream} className="-rotate-12"></img>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

function ExecutiveTeam() {
  const members = [
    { role: "President", name: "Kai" },
    { role: "Co-president", name: "Kai" },
    { role: "Social", name: "Kai" },
    { role: "Marketing", name: "Kai" },
    { role: "Tech Head", name: "Kai" },
    { role: "Tech Member", name: "Kai" },
    { role: "Tiktok", name: "Kai" },
    { role: "Marketing Member", name: "Kai" },
  ];

  return (
    <>
    <div className="bg-pink min-h-screen w-screen">
      <div className="flex flex-col py-24 px-20">
      <h1 className="text-6xl font-raleway text-light-pink justify-self-center self-center font-bold text-center">The Executive Team</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {members.map((member, index) => (
            <div key={index} className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-light-pink text-center">{member.role}:</h3>
              <p className="text-xl md:text-2xl font-normal mt-2 text-light-pink text-center">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
