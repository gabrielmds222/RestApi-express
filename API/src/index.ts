import express from "express";
import routes from "./routes";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  return app.listen(process.env.PORT);
});
