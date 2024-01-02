FROM node:alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

RUN npm run build


FROM nginx
# For Deployment Purpose
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html

# Command to run the container
CMD ["nginx", "-g", "daemon off;"]
