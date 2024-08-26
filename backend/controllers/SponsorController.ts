import { Request, Response } from "express";
import { Client } from "@notionhq/client";
import { SponsorRow, sponsorRowsStructured } from "../utils/BackendTypes";
import { config } from "dotenv";
config();

const notionSecret = process.env.NOTION_SECRET;
const sponsorID = process.env.SPONSOR_DB_ID;

const notion = new Client({
	auth: notionSecret,
});


const getSponsors = async (req: Request, res: Response) => {
	if (!notionSecret || !sponsorID) {
		throw new Error("Missing creds");
	}

	const query = await notion.databases.query({
		database_id: sponsorID,
	});

	// @ts-ignore
	const rows = query.results.map((res) => res.properties) as SponsorRow[];

	const rowsStructured: sponsorRowsStructured = rows.map((row) => ({
		name: row.Name.title[0].text.content,
		description: row.Description.rich_text[0].text.content,
		image: row.Image.files[0].file.url,
	}));

	const orderedRowsStructured = rowsStructured.reverse();

	res.status(200).json(orderedRowsStructured);
};

export { getSponsors };
