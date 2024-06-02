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
      <div className="flex flex-col h-auto bg-light-pink content-center">
        <h1 className="p-10 text-left text-6xl font-bold text-brown font-raleway">
          Our Sponsors
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

    <div>
    <div className="grid grid-cols-3">

<div className="">
<img
                className=" rounded-3xl rounded-b-none"
                src={image}
                
              />
</div>

<div className="">
<img
                className=" rounded-3xl rounded-b-none"
                src={image}
                
              />
</div>

<div className="">
<img
                className=" rounded-3xl rounded-b-none"
                src={image}
                
              />
</div>



    </div>
    </div>
      
    </>
  );
}

