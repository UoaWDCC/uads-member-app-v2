import { Client } from "@notionhq/client";
import { config } from "dotenv";
config();

const notionSecret = process.env.NOTION_SECRET;
const sponsorID = process.env.SPONSOR_DB_ID;

const notion = new Client({
	auth: notionSecret,
});

export default async function getSponsorData() {
	if (!notionSecret || !sponsorID) {
		throw new Error("Missing creds");
	}

	const query = await notion.databases.query({
		database_id: sponsorID,
	});

	console.log("------------ ALL RESULTS --------------------");
	console.log(query.results);

	console.log("------------ 1ST RESULT --------------------");
	console.log(query.results[0]);

	console.log("------------ ALL PROPERTIES --------------------");
	// @ts-ignore
	console.log(query.results[0].properties);

	console.log("------------ Name --------------------");
	// @ts-ignore
	console.log(query.results[0].properties.Name.title[0].plain_text);

	console.log("------------ Description --------------------");
	// @ts-ignore
	console.log(query.results[0].properties.Description.rich_text[0].plain_text);
}

getSponsorData();
