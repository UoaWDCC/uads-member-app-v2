import { Request, Response } from "express";
import { Client } from "@notionhq/client";
import { config } from "dotenv";
import { date } from "zod";
config();

const notionSecret = process.env.NOTION_SECRET;
const eventID = process.env.EVENT_DB_ID;

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
};

type rowsStructured = {
	name: string;
	date: string;
	description: string;
	image: string;
}[];

const getEvents = async (req: Request, res: Response) => {
	if (!notionSecret || !eventID) {
		throw new Error("Missing creds");
	}

	const query = await notion.databases.query({
		database_id: eventID,
	});

	// @ts-ignore
	const rows = query.results.map((res) => res.properties) as Row[];

	const rowsStructured: rowsStructured = rows.map((row) => ({
		name: row.Name.title[0].text.content,
		date: row.Date.date.start,
		description: row.Description.rich_text[0].text.content,
		image: row.Image.files[0].file.url,
	}));

	const orderedRowsStructured = rowsStructured.reverse();

	res.status(200).json(orderedRowsStructured);
};

const createEvent = async (req: Request, res: Response) => {
	res.json({ msg: "Implement POST endpoint" });
};

const deleteEvent = async (req: Request, res: Response) => {
	res.json({ msg: "Implement DELETE endpoint" });
};

const updateEvent = async (req: Request, res: Response) => {
	res.json({ msg: "Implement PATCH endpoint" });
};

export { getEvents, createEvent, deleteEvent, updateEvent };
