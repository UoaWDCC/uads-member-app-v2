import { Request, Response } from "express";
import { Client } from "@notionhq/client";
import { SocialRow, socialRowsStructured } from "../utils/BackendTypes";
import { config } from "dotenv";
config();

const notionSecret = process.env.NOTION_SECRET;
const socialID = process.env.SOCIAL_DB_ID;

const notion = new Client({
	auth: notionSecret,
});

const getSocials = async (req: Request, res: Response) => {
	if (!notionSecret || !socialID) {
		throw new Error("Missing creds");
	}

	const query = await notion.databases.query({
		database_id: socialID,
	});

	// @ts-ignore
	const rows = query.results.map((res) => res.properties) as SocialRow[];

	const rowsStructured: socialRowsStructured = rows.map((row) => ({
		name: row.Name.title[0].text.content,
		link: row.Link.url,
	}));

	const orderedRowsStructured = rowsStructured.reverse();

	res.status(200).json(orderedRowsStructured);
};

export { getSocials };
