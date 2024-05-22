import placeholder from "../assets/download.jpg";
import donut from "../assets/dessert-donut-doughnut-svgrepo-com 1.svg";

export default function Sponsor() {
    return (
      <>
      <p className="h-20 w-full bg-red-50">
        Placeholder navbar
        </p>
      <SponsorSection />
      </>
    )
}



function SponsorSection() {
  return (
    <>
      <div className="flex flex-col h-auto bg-light-pink content-center">
        <div className="mx-20 z-10">
          <h1 className="mt-10 mb-5 text-6xl font-bold text-brown font-raleway">
            Our Sponsors
          </h1>
          <SearchBar />
          {/* event group cards not centered */}
          <SponsorGroups />
        </div>
        <img className="absolute md:top-32 md:right-36 md:w-36 invisible md:visible " src={donut}></img>
      </div>
      
    </>
  );
}

function SearchBar() {
  return (
    <>
      <div className="pt-2 mx-auto text-gray-600 w-full">
        <input className="bg-white h-14 px-5 rounded-xl text-lg focus:outline-none font-raleway font-thin justify-center w-full" type="search" name="search" placeholder="Search Sponsors..."></input>
      </div>
    </>
  )
}

function SponsorGroups() {
  return (
    <>
      <div className=" flex flex-wrap justify-between my-10">
        <SponsorCard
          image={placeholder}
          sponsorName="Sparkle Gala Dinner"
          sponsorDesc="Come and enjoy this dinner where our sponsors will be present"
        />
        <SponsorCard
          image={placeholder}
          sponsorName="Tsujiri"
          sponsorDesc="Free upsize and free topping"
        />
      </div>
    </>
  );
}

interface SponsorCardProps {
  image: string;
  sponsorName: string;
  sponsorDesc: string;
}

function SponsorCard({
  image,
  sponsorName,
  sponsorDesc,
}: SponsorCardProps) {
  return (
    <>
      <div className="bg-pink rounded-2xl flex flex-row p-8 min-w-fit">
        <div className="w-36 h-36 align-middle flex overflow-hidden">
          <img className="rounded-xl align-center aspect-auto w-fit" src={image}
          />
        </div>
        <div className="px-5">
          <h1 className="text-light-pink font-raleway text-2xl font-bold truncate">
            {sponsorName}
          </h1>
          <p className="text-light-pink font-raleway text-lg font-medium truncate">
            {sponsorDesc}
          </p>
        </div>
      </div>
    </>
  );
}

