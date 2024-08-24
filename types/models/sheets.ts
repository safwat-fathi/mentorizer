import { GoogleSpreadsheetRow } from "google-spreadsheet";

export type Row = {
  name: string;
  email: string;
  join_as: string;
  experience?: string;
  field_of_interests?: string;
  expertise?: string;
};

export type SheetRow = GoogleSpreadsheetRow<Row>;
