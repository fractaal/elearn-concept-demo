export default {
    "General Settings": [
        {
            name: "showNavbarLabels",
            type: "boolean",
            displayName: "Show navigation bar labels",
            description: "Always show navigation button labels, regardless if the interface is mobile or not",
            value: false,
        }
    ],

    "Debugging": [
        {
            name: "loggedIn",
            type: "boolean",
            description: "Internal application value used to check if you're 'logged in' - Changing this value results in undefined behavior",
            value: false,
        },
        {
            name: "shownIntroScreen",
            type: "boolean",
            description: "Internal application value used to check if the black 'welcome to eLearn' screen was shown or not",
            value: false,
        },
    ]
}