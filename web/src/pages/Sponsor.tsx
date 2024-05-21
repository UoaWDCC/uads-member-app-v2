import placeholder from "../assets/download.jpg";

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
        <div className="mx-20">
          <h1 className="my-10 text-6xl font-bold text-brown font-raleway">
            Our Sponsors
          </h1>
          <SearchBar />
          {/* event group cards not centered */}
          <SponsorGroups />
        </div>
      </div>
    </>
  );
}

function SearchBar() {
  return (
    <>
      <div className="pt-2 mx-auto text-gray-600 w-full">
        <input className="bg-white h-14 px-5 pr-16 rounded-xl text-lg focus:outline-none font-raleway font-thin justify-center w-full" type="search" name="search" placeholder="Search Sponsors..."></input>
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        </button>
      </div>
    </>
  )
}

function SponsorGroups() {
  return (
    <>
      <div className=" flex flex-wrap justify-start m-10">
        <SponsorCard
          image={placeholder}
          sponsorName="Sparkle Gala Dinner"
          sponsorDesc="Come and enjoy this dinner where our sponsors will be present"
        />
        <SponsorCard
          image={placeholder}
          sponsorName="Sparkle Gala Dinner"
          sponsorDesc="Come and enjoy this dinner where our sponsors will be present"
        />
        <SponsorCard
          image={placeholder}
          sponsorName="Sparkle Gala Dinner"
          sponsorDesc="Come and enjoy this dinner where our sponsors will be present"
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
        
            <div className="h-64 overflow-hidden">
              <img
                className=" rounded-3xl rounded-b-none"
                src={image}
                
              />
            <div className="flex flex-row justify-evenly m-5 pb-5">
            
                <h2 className="text-center md:text-left font-bold text-light-pink text-xl font-raleway">
                  {sponsorName}
                </h2>
                <p className="text-light-pink text-sm font-raleway">{sponsorDesc}</p>
            </div>
          </div>
    </>
  );
}

