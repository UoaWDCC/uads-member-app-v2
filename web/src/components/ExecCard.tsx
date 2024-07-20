import { ExecCardProps } from "@utils/FrontendTypes";


export default function ExecCard({ exec }: ExecCardProps) {
    const { image, name, role } = exec
    return (
        <div className="relative w-fit aspect-square group overflow-hidden rounded-3xl bg-pink xl:m-5">
              <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-50"
              />
              <div className="bg-pink absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-95 transition-opacity duration-300 ease-in-out">
                <h3 className="text-sm md:text-xl font-semibold text-light-pink text-center">{role}:</h3>
                <p className="text-sm md:text-xl font-normal mt-2 text-light-pink text-center">{name}</p>
              </div>
          </div>
    )
}
