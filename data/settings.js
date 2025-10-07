module.exports = {
    flowFile: 'flows.json',

    // adminAuth removido temporariamente

    // Porta padrão (Render usa variável de ambiente)
    uiPort: process.env.PORT || 1880,

    editorTheme: {
        projects: { enabled: true }
    }
};
