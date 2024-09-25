module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg|png|gif|webp|svg|scss|css)$": "jest-transform-stub",
  },
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};
