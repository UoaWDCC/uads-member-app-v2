import { ExecCardProps } from "../utils/FrontendTypes";

export default function ExecCard({ exec }: ExecCardProps) {
	const { name, role, image } = exec;

	return (
		<>
			<div
				className="w-44 h-44 rounded-3xl m-2 flex justify-center items-center hover:cursor-pointer hover:rounded-3xl"
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				data-testid="execCard"
			>
				<div className="w-full h-full flex flex-col justify-center items-center text-center rounded-3xl bg-black bg-opacity-50 opacity-0 hover:opacity-100 hover:rounded-3xl transition-opacity duration-300">
					<h2 className="font-bold text-light-pink">{role}</h2>
					<p className="text-light-pink">{name}</p>
				</div>
			</div>
		</>
	);
}
