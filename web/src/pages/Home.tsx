export default function Home() {
  return (
    <>
      <Landing>
        <p className="h-20 w-full bg-red-50">Placeholder navbar</p>
      </Landing>

      <ExampleComponent />
    </>
  );
}

function Landing({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col h-screen bg-slate-500 items-center gap-10">
      {children}
      <h1 className=" text-center text-3xl font-bold text-gray-900">
        Home page
      </h1>
    </div>
  );
}

function ExampleComponent() {
  return (
    <div className="w-screen h-80 bg-orange-500">
      <h1 className=" text-center text-3xl font-bold text-gray-900">
        EXAMPLE COMPONENT
      </h1>
    </div>
  );
}
