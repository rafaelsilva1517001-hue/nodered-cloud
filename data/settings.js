module.exports = {
    flowFile: 'flows.json',
    adminAuth: {
        type: "credentials",
        users: [{
            username: "rafa",
            password: "$2b$08$zKf4H7Mmuq7LkQ5vfj1CHe6Jo2xXMj2cFzv3hYXNHDWXf2r.7.bhe", // senha = 12345
            permissions: "*"
        }]
    },
    httpNodeAuth: {user: "rafa", pass: "$2b$08$zKf4H7Mmuq7LkQ5vfj1CHe6Jo2xXMj2cFzv3hYXNHDWXf2r.7.bhe"},
    httpStaticAuth: {user: "rafa", pass: "$2b$08$zKf4H7Mmuq7LkQ5vfj1CHe6Jo2xXMj2cFzv3hYXNHDWXf2r.7.bhe"},
    uiPort: process.env.PORT || 1880
}
