// import modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// app
const app = express();

// db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log('DB CONNECTION ERROR', err));

// swagger
const swaggerOption = {
  swaggerDefinition: {
    info: {
      title: 'hack to school AP!?',
      description:
        'A very very very amazing and powerful API for hack to school project!?',
      contact: {
        name: '!?!?!?!?',
      },
      servers: ['http://localhost:8080'],
    },
  },
  apis: ['./routes/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOption);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

// routes
app.use('/api', routes);

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`),
);
