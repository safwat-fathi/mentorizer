import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from "google-spreadsheet";

import { JWT } from "google-auth-library";

import { SheetRow } from "@/types/models/sheets.model";
import { User } from "@/types/models/user.model";
import { replaceNewlines } from "../utils/string";

import { isValidEmail } from "../utils/validations";

const { GOOGLE_SPREADSHEET_ID, GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive.file"];

type CacheKey = string;
type CacheValue = SheetRow[];

export class SheetsService {
  private static _instance: SheetsService;
  private _doc: GoogleSpreadsheet | null = null;
  private _sheet: GoogleSpreadsheetWorksheet | null = null;
  private _cache: Map<CacheKey, CacheValue> = new Map();

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
        this._sheet = this._doc.sheetsByIndex[Number(sheetIndex)]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
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
        key: replaceNewlines(GOOGLE_PRIVATE_KEY),
        scopes: SCOPES,
      });

      // fetch doc data
      this._doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID, jwt);
    } catch (err) {
      throw new Error(`SheetsService::loadDoc::${err}`);
    }
  }

  async addRow(row: User): Promise<boolean> {
    try {
      await this._loadSheet();

      if (this._sheet) {
        this._sheet.setHeaderRow([
          "name",
          "email",
          "join_as",
          "field_of_interests",
          "experience",
          "expertise",
        ] as (keyof User)[]);
        await this._sheet.addRow(row);

        return true;
      } else return false;
    } catch (err: unknown) {
      throw new Error(`SheetsService::addRow::${err}`);
    }
  }

  async addContactUsMessage(email: string, message: string): Promise<boolean> {
    try {
      await this._loadSheet(1);

      if (this._sheet) {
        this._sheet.setHeaderRow(["email", "message"]);
        await this._sheet.addRow({ email, message });

        return true;
      } else return false;
    } catch (err: unknown) {
      throw new Error(`SheetsService::addRow::${err}`);
    }
  }

  async searchColumn(columnName: keyof User, value: string): Promise<SheetRow[]> {
    if (!isValidEmail(value)) return [];

    try {
      await this._loadSheet();

      if (this._sheet) {
        const rows = await this._sheet.getRows<User>();

        return rows.filter((row) => row.get(columnName) === value);
      } else return [];
    } catch (err: unknown) {
      throw new Error(`${err}`);
    }
  }
}
