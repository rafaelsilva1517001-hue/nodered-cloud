FROM nodered/node-red:latest

# copiar configurações e flows para /data
COPY data /data

EXPOSE 1880
