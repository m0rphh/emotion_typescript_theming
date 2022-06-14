module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  plugins: ["react", "@emotion", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  env: { browser: true },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  globals: {
    fetch: false,
    JSX: false
  },
  rules: {
    "import/prefer-default-export": 0,
    "import/no-useless-path-segments": 0,
    "import/no-named-as-default": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": [1, { forbid: ["any", "array"] }],
    "react/jsx-curly-newline": "off",
    "@emotion/jsx-import": "error",
    "@emotion/no-vanilla": "error",
    "@emotion/import-from-emotion": "error",
    "@emotion/styled-import": "error",
    "vero/styled-tagged-template": "warn",
    "vero/typescript-migration": "warn",
    "vero/tooltip-import": "error",
    "no-useless-rename": [1, { ignoreDestructuring: true }],
    // NOTE: must disable the base rules as they can report incorrect errors.
    // Enabled the "@typescript-eslint" versions instead.
    "no-use-before-define": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ]
  },
  overrides: [
    {
      files: ["src/index.tsx"],
      globals: {
        document: true
      },
      rules: {
        "react/no-render-return-value": 0,
        "global-require": 0
      }
    },
    {
      files: [
        "*.test.js",
        "*.test.jsx",
        "**/*/__mocks__/*.js",
        "**/*/__mocks__/*.jsx",
        "**/test-util.js",
        "*.test.ts",
        "*.test.tsx",
        "**/*/__mocks__/*.ts",
        "**/*/__mocks__/*.tsx"
      ],
      globals: {
        expect: true,
        React: true,
        render: true,
        tearDown: true,
        configureStore: true,
        nock: true,
        IconMock: true,
        iconMockContent: true
      },
      env: {
        jest: true
      },
      rules: {
        "react/jsx-no-undef": ["error", { allowGlobals: true }],
        "react/destructuring-assignment": 0
      }
    },
    {
      files: [
        "**/*/__mocks__/*.js",
        "**/*/__mocks__/*.jsx",
        "**/*/__mocks__/*.ts",
        "**/*/__mocks__/*.tsx"
      ],
      rules: {
        "react/prop-types": 0
      }
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "react/prop-types": 0
      }
    },
    {
      files: [
        "src/jest.*",
        "src/**/*.stories.jsx",
        "src/**/*.stories.tsx",
        "config-overrides.js",
        "*.test.ts",
        "*.test.tsx"
      ],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: true
          }
        ],
        "react/prop-types": 0
      }
    }
  ]
};
