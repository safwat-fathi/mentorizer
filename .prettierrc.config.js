/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	trailingComma: "es5",
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	printWidth: 120,
	tailwindConfig: "./tailwind.config.js",
	tailwindFunctions: ["clsx"],
	plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
