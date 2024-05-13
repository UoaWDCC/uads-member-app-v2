import placeholder from "../assets/download.jpg";

export default function Sponsor() {
    return (
      <>
     <SponsorSection />
      </>
    )
}


function SponsorSection() {
  return (
    <>
      <div className="flex flex-col h-auto bg-brown content-center">
        <h1 className="p-10 text-center text-6xl font-bold text-light-pink font-raleway">
          Our Upcoming Events
        </h1>
        {/* event group cards not centered */}
        <SponsorGroups />
      </div>
    </>
  );
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

