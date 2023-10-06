// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint", "unused-imports"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": "off",
    "no-param-reassign": ["error"],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "var", "directive"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["block", "block-like"], next: "*" },
      { blankLine: "always", prev: "*", next: ["function"] },
      {
        blankLine: "always",
        prev: "import",
        next: ["const", "let", "var", "function", "export", "block-like"],
      },
    ],
    "no-nested-ternary": "error",
  },
};

module.exports = config;
