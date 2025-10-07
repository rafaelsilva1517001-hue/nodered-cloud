module.exports = {
    flowFile: 'flows.json',

    adminAuth: {
        type: "credentials",
        users: [{
            username: "Drezry",
            password: "$2b$08$uQFgGPhF9Je3/5Wx4XK1De8aW6MFxwJZ0sbhTnC6p2iOeb1g0rhN2",
            permissions: "*"
        }]
    },

    httpNodeAuth: {
        user: "Drezry",
        pass: "$2b$08$uQFgGPhF9Je3/5Wx4XK1De8aW6MFxwJZ0sbhTnC6p2iOeb1g0rhN2"
    },

    httpStaticAuth: {
        user: "Drezry",
        pass: "$2b$08$uQFgGPhF9Je3/5Wx4XK1De8aW6MFxwJZ0sbhTnC6p2iOeb1g0rhN2"
    },

    uiPort: process.env.PORT || 1880,

    editorTheme: {
        projects: { enabled: true }
    }
};
