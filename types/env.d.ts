declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production";
			NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID: string;
			NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL: string;
			NEXT_PUBLIC_GOOGLE_PRIVATE_KEY: string;
		}
	}
}
