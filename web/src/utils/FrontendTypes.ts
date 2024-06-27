export interface SponsorType {
	name: string;
	description: string;
	image: string;
}

export interface SponsorCardProps {
	sponsor: SponsorType;
}

export interface EventType {
	name: string;
	date: string;
	description: string;
	image: string;
}

export interface EventCardProps {
	event: EventType;
}

export interface ExecType {
	name: string;
	role: string;
	image: string;
}

export interface ExecCardProps {
	exec: ExecType;
}

export interface SocialType {
	name: string;
	link: string;
}

export interface SocialsProps {
	background: string;
	hoverBackground: string;
	iconColor: string;
	hoverIconColor: string;
}