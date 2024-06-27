import background from "../assets/pink_sponsor_background.png";

export interface SponsorType {
  name: string;
  description: string;
  image: string;
}

interface SponsorCardProps {
  sponsor: SponsorType;
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  const { name, description, image } = sponsor;

  return (
    <>
      <div className="w-96 h-52 bg-brown flex rounded-b-3xl overflow-hidden relative">
        <div className="w-full absolute top-0">
          <img src={background} alt="Pink Swiggly Background" />
        </div>

        <div className="w-2/5 pl-5 pt-10 pb-5 flex justify-center items-center">
          <img
            src={image}
            alt="Sponsor Image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-3/5 h-full flex flex-col px-5 py-9 text-light-pink">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-bold text-sm">{description}</p>
        </div>
      </div>
    </>
  );
}
