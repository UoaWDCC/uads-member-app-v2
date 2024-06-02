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
    <div className="container mx-auto p-10 pl-10 pr-10">
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
      <div className="rounded-3xl rounded-t-none bg-pink shadow-lg pl-10 pt-10">
        <img
          className="rounded-3xl w-1/2 object-cover"
          src={image}
          alt={`${sponsorName} logo`}
        />
        <div className="text-center mt-2 p-4">
          <h2 className="text-lg font-semibold">{sponsorName}</h2>
          <p className="text-sm">{sponsorDesc}</p>
        </div>
      </div>
    </div>
  );
}

