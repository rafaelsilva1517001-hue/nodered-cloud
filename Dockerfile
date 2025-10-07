# Usando imagem oficial do Node-RED
FROM nodered/node-red:latest

# Copiar configurações e fluxos para dentro da imagem
COPY data /data

# Expor porta padrão do Node-RED (Render usa variável de ambiente PORT)
EXPOSE 1880

# Instrução padrão (Node-RED já inicia automaticamente)
CMD ["npm", "start", "--", "--userDir", "/data"]
