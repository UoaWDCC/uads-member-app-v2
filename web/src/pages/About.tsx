import people from "../assets/people.jpg";
import discord from "../assets/discord.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook-app-symbol.png";
import insta from "../assets/instagram.png";
import tiktok from "../assets/tik-tok.png";

export default function About() {
  return (
    <>
      <img src={people} alt="people" className="w-screen" />

      <div className="w-screen h-auto bg-[#FFBBBB] flex justify-center items-center py-10 px-40 flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-center text-[#5F4444] mb-10 font-bold">
            {" "}
            What we do
          </h1>
          {/* Add UADS logo */}
          {/* <p>ADD UADS LOGO</p> */}
          <p className="text-2xl text-center text-[#5F4444] font-semibold">
            Welcome to the sweetest corner of the University of Auckland – the
            Dessert Society!
          </p>{" "}
          <br />
          <p className="text-2xl text-center text-[#5F4444] font-semibold">
            At the University of Auckland Dessert Society, we're more than just
            a club; we're a community united by our love for all things sweet.
            Whether you're an avid baker, a dessert connoisseur, or simply
            someone with a sweet tooth, you'll find a home among us.
          </p>{" "}
          <br />
          <p className="text-2xl text-center text-[#5F4444] font-semibold">
            Our society is dedicated to exploring the diverse world of desserts,
            from classic recipes to innovative creations. Through our events,
            workshops, and gatherings, we aim to inspire creativity, foster
            friendships, and indulge in the joy of sharing delicious treats.
          </p>{" "}
          <br />
          <p className="text-2xl text-center text-[#5F4444] font-semibold">
            Join us as we embark on a delightful journey through the art of
            dessert-making. From mastering the perfect bakes to our annual
            dessert crawls, there's always something new to experience and
            savor.
          </p>{" "}
          <br />
          <p className="text-2xl text-center text-[#5F4444] font-semibold">
            No matter your skill level or background, everyone is welcome at the
            University of Auckland Dessert Society. So come join us, and let's
            satisfy our sweet cravings together!{" "}
          </p>
        </div>
	  </div>
</>
	)
}