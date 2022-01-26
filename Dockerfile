#Step 1 Builder
FROM node:16.13.2-alpine AS builder

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build


#Step 2
FROM node:16.13.2-alpine

RUN mkdir /app
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 5050

CMD ["npm", "run", "start:prod"]