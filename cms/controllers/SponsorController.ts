import { Request, Response } from "express";
import { Client } from "@notionhq/client";
import { config } from "dotenv";
config();

const notionSecret = process.env.NOTION_SECRET;
const sponsorID = process.env.SPONSOR_DB_ID;

const notion = new Client({
	auth: notionSecret,
});

type Row = {
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
};

type rowsStructured = {
	name: string;
	description: string;
}[];

const getSponsors = async (req: Request, res: Response) => {
	if (!notionSecret || !sponsorID) {
		throw new Error("Missing creds");
	}

	const query = await notion.databases.query({
		database_id: sponsorID,
	});

	// @ts-ignore
	const rows = query.results.map((res) => res.properties) as Row[];

	const rowsStructured: rowsStructured = rows.map((row) => ({
		name: row.Name.title[0].text.content,
		description: row.Description.rich_text[0].text.content,
	}));

	res.status(200).json(rowsStructured);
};

export { getSponsors };
