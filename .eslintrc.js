module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
		"react-native/react-native": true,
		"jest/globals": true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"eslint:recommended",
		"plugin:jest/recommended",
	],

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},

	plugins: ["react", "react-native"], // 'detox'],
	ignorePatterns: ["!.*", "dist", "node_modules"],
	rules: {
		"no-mixed-spaces-and-tabs": 0, // disable rule
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"],
			},
		],
		"linebreak-style": ["error", "windows"],
		// "linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"no-console": ["error"],
		"no-unused-vars": "off", //['error', { vars: 'all' }],
		// '@typescript-eslint/no-unused-vars': 'off',
		"react/prop-types": "off",
		"react/display-name": "off",
	},

	settings: {
		react: {
			version: "detect",
		},
	},
}
