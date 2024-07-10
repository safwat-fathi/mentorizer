import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";

import { JWT } from "google-auth-library";

import { SheetRow } from "@/types/models/sheets";

const { GOOGLE_SPREADSHEET_ID, GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } =
  process.env;

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

export class SheetsService {
  private static _instance: SheetsService;

  private _doc: GoogleSpreadsheet | null = null;
  private _sheet: GoogleSpreadsheetWorksheet | null = null;

  private constructor() {
    this._init();
  }

  public static Instance(): SheetsService {
    if (!SheetsService._instance) {
      SheetsService._instance = new SheetsService();
    }

    return SheetsService._instance;
  }

  private async _init() {
    await this._loadDoc();
  }

  private async _loadSheet(sheetIndex = 0) {
    try {
      if (this._doc) {
        await this._doc.loadInfo();
        this._sheet = this._doc.sheetsByIndex[sheetIndex]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
      }
    } catch (err) {
      throw new Error(`SheetsService::loadSheet::${err}`);
    }
  }

  private async _loadDoc(): Promise<void> {
    try {
      if (!GOOGLE_SPREADSHEET_ID) throw new Error("No sheet ID found");
      if (!GOOGLE_CLIENT_EMAIL) throw new Error("No client email found");
      if (!GOOGLE_PRIVATE_KEY) throw new Error("No private key found");

      // authenticate
      const jwt = new JWT({
        email: GOOGLE_CLIENT_EMAIL,
        key: GOOGLE_PRIVATE_KEY,
        scopes: SCOPES,
      });

      // fetch doc data
      this._doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID, jwt);
    } catch (err) {
      throw new Error(`SheetsService::loadDoc::${err}`);
    }
  }

  async addRow(row: SheetRow): Promise<boolean> {
    try {
      await this._loadSheet();

      const { email, joinAs } = row;

      if (this._sheet) {
        const rowData = [email, joinAs];

        await this._sheet.addRow(rowData);

        return true;
      } else return false;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
