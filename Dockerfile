FROM node:10-alpine

WORKDIR /srv

COPY . .
RUN npm i

# RUN npm run lint
# RUN npm test

RUN npm run build

RUN npm prune --production

RUN rm -rf webpack __tests__ .babelrc

RUN chown -R node:node /srv
USER node

EXPOSE 5000 5000

CMD ["npm", "run", "serve"]
