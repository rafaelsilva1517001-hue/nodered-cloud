module.exports = {
    // Arquivo de fluxos
    flowFile: 'flows.json',

    // Autenticação do painel (admin)
    adminAuth: {
        type: "credentials",
        users: [{
            username: "Drezry",
            // Hash bcrypt compatível Node-RED 3.x
            password: "$2b$08$uQFgGPhF9Je3/5Wx4XK1De8aW6MFxwJZ0sbhTnC6p2iOeb1g0rhN2",
            permissions: "*"
        }]
    },

    // Autenticação HTTP Node
    httpNodeAuth: {
        user: "Drezry",
        pass: "$2b$08$uQFgGPhF9Je3/5Wx4XK1De8aW6MFxwJZ0sbhTnC6p2iOeb1g0rhN2"
    },

    // Autenticação para conteúdo estático
    httpStaticAuth: {
        user: "Drezry",
        pass: "$2b$08$uQFgGPhF9Je3/5Wx4XK1De8aW6MFxwJZ0sbhTnC6p2iOeb1g0rhN2"
    },

    // Porta padrão (Render usa variável de ambiente)
    uiPort: process.env.PORT || 1880,

    // Habilitar projetos (opcional)
    editorTheme: {
        projects: {
            enabled: true
        }
    }
};
