FROM node:14.1-alpine
WORKDIR /app
#COPY Source Destination(Container)
COPY ./package*.json ./
RUN npm install
#COPY Source Destination(Container)
COPY . ./
# CMD [ "npm", "start"]
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html

#docker build .