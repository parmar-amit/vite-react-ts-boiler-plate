module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended", // Make sure this is always the last element in the array.
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "import", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
