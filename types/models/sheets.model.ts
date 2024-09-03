import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { User } from "./user.model";

export type SheetRow = GoogleSpreadsheetRow<User>;
