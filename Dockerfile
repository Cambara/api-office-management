FROM node:14 as ui-build
WORKDIR /app
COPY . /app/

RUN npm install
RUN npm run build

FROM node:14

WORKDIR /app

COPY --from=ui-build /app/build .
COPY --from=ui-build /app/package.json .
COPY --from=ui-build /app/package-lock.json .
RUN npm install --only=prod

EXPOSE 3000

CMD ["npm", "run", "prod" ]
