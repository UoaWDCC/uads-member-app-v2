import { Request, Response } from "express";
import { Client } from "@notionhq/client";
import { config } from "dotenv";
config();

const notionSecret = process.env.NOTION_SECRET;
const execID = process.env.EXEC_DB_ID;

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
};

type rowsStructured = {
	name: string;
	role: string;
	image: string;
}[];

const getExecs = async (req: Request, res: Response) => {
	if (!notionSecret || !execID) {
		throw new Error("Missing creds");
	}

	const query = await notion.databases.query({
		database_id: execID,
	});

	// @ts-ignore
	const rows = query.results.map((res) => res.properties) as Row[];

	const rowsStructured: rowsStructured = rows.map((row) => ({
		name: row.Name.title[0].text.content,
		role: row.Role.rich_text[0].text.content,
		image: row.Image.files[0].file.url,
	}));

	const orderedRowsStructured = rowsStructured.reverse();

	res.status(200).json(orderedRowsStructured);
};

export { getExecs };
