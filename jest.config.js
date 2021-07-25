module.exports = {
    testMatch: [
        "<rootDir>/test/**/*.test.+(ts|tsx)",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testEnvironment: "jsdom",
}