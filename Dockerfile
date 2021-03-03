FROM node:14.15.1-alpine
WORKDIR /app
#COPY Source Destination(Container)
COPY ./package*.json ./
RUN npm install
#COPY Source Destination(Container)
COPY . ./
#CMD [ "npm", "start" ]
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html
#Configuring Nginx for React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

#docker build . -t <TAG_NAME>

#docker image list

#docker run -it -p <PORT_COMPUTER>:<80> <IMAGE_ID>