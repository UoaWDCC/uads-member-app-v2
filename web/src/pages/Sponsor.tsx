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
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SponsorCard
          image={placeholder}
          sponsorName="Tsujiri"
          sponsorDesc="Upsize and toppings for our club events"
        />
        <SponsorCard
          image={placeholder}
          sponsorName="Tsujiri"
          sponsorDesc="Upsize and toppings for our club events"
        />
        <SponsorCard
          image={placeholder}
          sponsorName="Tsujiri"
          sponsorDesc="Upsize and toppings for our club events"
        />
        <SponsorCard
         image={placeholder}
          sponsorName="Tsujiri"
          sponsorDesc="Upsize and toppings for our club events"
        />
        <SponsorCard
          image={placeholder}
          sponsorName="Tsujiri"
          sponsorDesc="Upsize and toppings for our club events"
        />
        <SponsorCard
         image={placeholder}
          sponsorName="Tsujiri"
          sponsorDesc="Upsize and toppings for our club events"
        />
      </div>
    </div>
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
    <div className="p-4">
      <div className="rounded-3xl rounded-t-none bg-pink shadow-lg flex flex-col lg:flex-row items-center lg:items-start p-10 pb-15">
        <img
          className="rounded-3xl w-1/2 lg:w-full object-cover sm:rounded-2xl"
          src={image}
          alt={`${sponsorName} logo`}
        />
        <div className="lg:ml-4 mt-4 lg:mt-0 text-center lg:text-left">
          <h2 className="text-lg text-light-pink font-semibold">{sponsorName}</h2>
          <p className="text-sm text-light-pink">{sponsorDesc}</p>
        </div>
      </div>
    </div>
  );
}