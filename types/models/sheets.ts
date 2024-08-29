import { GoogleSpreadsheetRow } from "google-spreadsheet";

export type Test = {
  name: string;
  age: any;
};

export type Row = {
  name: string;
  email: string;
  join_as: string;
  experience?: string;
  field_of_interests?: string;
  expertise?: string;
};

export type SheetRow = GoogleSpreadsheetRow<Row>;
