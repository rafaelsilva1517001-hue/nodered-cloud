module.exports = {
    flowFile: 'flows.json',
    adminAuth: {
        type: "credentials",
        users: [{
            username: "Drezry",
            password: "$2b$08$ju.N5Z5eYCF0yY.TO1A2qeEP4qmtYeP2jRPRciwVy6yqAwWk3jA8G", // senha: Junk@1517
            permissions: "*"
        }]
    },
    httpNodeAuth: {user: "Drezry", pass: "$2b$08$ju.N5Z5eYCF0yY.TO1A2qeEP4qmtYeP2jRPRciwVy6yqAwWk3jA8G"},
    httpStaticAuth: {user: "Drezry", pass: "$2b$08$ju.N5Z5eYCF0yY.TO1A2qeEP4qmtYeP2jRPRciwVy6yqAwWk3jA8G"},
    uiPort: process.env.PORT || 1880
}
