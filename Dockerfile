# Etapa de construcción
FROM node:16 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación Angular para producción
RUN npm run build-prod

# Etapa de ejecución
FROM nginx:alpine

# Copiar los archivos de la construcción (generados en la etapa de build) a la carpeta donde nginx sirve los archivos
COPY --from=build /app/dist/betca-tpv-angular /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Iniciar nginx en el contenedor
CMD ["nginx", "-g", "daemon off;"]
