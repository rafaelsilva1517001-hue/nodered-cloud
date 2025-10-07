# Imagem oficial do Node-RED
FROM nodered/node-red:latest

# Copiar dados para dentro do container
COPY data /data

# Expor porta padrão
EXPOSE 1880

# Forçar Node-RED a usar /data como userDir
CMD ["npm", "start", "--", "--userDir", "/data"]
