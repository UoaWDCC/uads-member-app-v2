import { NavLink } from "react-router-dom";



export default function Home() {
  return (
    <>
      <Landing>
        <p className="h-20 w-full bg-red-50">Placeholder navbar</p>
      </Landing>

<Sponsor/>

    </>
  );
}

function Landing({ children }: { children: JSX.Element }) {


  return (
    
    <div className="min-h-screen flex flex-col  h-auto bg-gradient-to-b from-light-pink via-light-pink to-pink items-center relative">
      {children}
    </div>
  );
}

function Sponsor() {
  return (
    <div className="flex flex-col gap-10 h-screen pb-20 bg-pink">
      <PinkButton linkto="/sponsors" buttontext="See our sponsors" />
    </div>
  );
}






interface PinkButtonProps {
  linkto: string;
  buttontext: string;
}

function PinkButton({ linkto, buttontext }: PinkButtonProps) {
  return (
    <>
      <div className="text-center">
        <NavLink to={linkto}>
          <button className="bg-light-pink p-5 rounded-2xl text-brown font-bold text-2xl font-raleway">
            {buttontext}
          </button>
        </NavLink>
      </div>
    </>
  );
}