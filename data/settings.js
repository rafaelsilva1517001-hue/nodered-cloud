module.exports = {
    flowFile: 'flows.json',
    adminAuth: {
        type: "credentials",
        users: [{
            username: "Drezry",
            password: "$2b$08$1a5V9ZpN7BtElW4tWKoZqetqZB4nZQz7Kaoq0Rrb8Cmf.Ih5Sr58a", // senha: Junk@1517
            permissions: "*"
        }]
    },
    httpNodeAuth: {user: "Drezry", pass: "$2b$08$1a5V9ZpN7BtElW4tWKoZqetqZB4nZQz7Kaoq0Rrb8Cmf.Ih5Sr58a"},
    httpStaticAuth: {user: "Drezry", pass: "$2b$08$1a5V9ZpN7BtElW4tWKoZqetqZB4nZQz7Kaoq0Rrb8Cmf.Ih5Sr58a"},
    uiPort: process.env.PORT || 1880
}
