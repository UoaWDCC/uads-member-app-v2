export interface ExecDataType {
	name: string;
	role: string;
}

interface ExecCardProps {
	exec: ExecDataType;
}

export default function ExecCard({ exec }: ExecCardProps) {
	return (
			<>
					<div className="w-64 h-64 bg-pink rounded-3xl hover:bg-brown hover:cursor-pointer m-2 flex justify-center items-center">
							<div className="w-full h-full flex flex-col justify-center items-center text-center opacity-0 hover:text-light-pink hover:opacity-100">
									<h2 className="font-bold">{exec.role}</h2>
									<p>{exec.name}</p>
							</div>
					</div>
			</>
	);
}