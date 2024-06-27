export type EventRow = {
    Name: {
		id: string;
		title: {
			text: {
				content: string;
			};
		}[];
	};
	Date: {
		id: string;
		date: {
			start: string;
		};
	};
	Description: {
		id: string;
		rich_text: {
			text: {
				content: string;
			};
		}[];
	};
	Image: {
		id: string;
		files: {
			file: {
				url: string;
			};
		}[];
	};
}

export type eventRowsStructured = {
    name: string;
	date: string;
	description: string;
	image: string;
}[];

export type ExecRow = {
    Name: {
		id: string;
		title: {
			text: {
				content: string;
			};
		}[];
	};
	Role: {
		id: string;
		rich_text: {
			text: {
				content: string;
			};
		}[];
	};
	Image: {
		id: string;
		files: {
			file: {
				url: string;
			};
		}[];
	};
}

export type execRowsStructured = {
    name: string;
	role: string;
	image: string;
}[];

export type SocialRow = {
    Name: {
		id: string;
		title: {
			text: {
				content: string;
			};
		}[];
	};
	Link: {
		id: string;
		url: string;
	};
}

export type socialRowsStructured = {
    name: string;
	link: string;
}[];

export type SponsorRow = {
    Name: {
		id: string;
		title: {
			text: {
				content: string;
			};
		}[];
	};
	Description: {
		id: string;
		rich_text: {
			text: {
				content: string;
			};
		}[];
	};
	Image: {
		id: string;
		files: {
			file: {
				url: string;
			};
		}[];
	};
}

export type sponsorRowsStructured = {
    name: string;
	description: string;
	image: string;
}[];