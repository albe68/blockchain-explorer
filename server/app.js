import express from "express";
export const app = express();
import morgan from "morgan";
import { config } from "./config.js";
import { connection } from "./src/frameworks/database/connection.js";
import { router } from "./src/frameworks/webserver/server.js";
import Moralis from "moralis";
import cors from "cors";
if (config.ENV === `development`) {
  app.use(morgan(`dev`));
}
connection();
app.use(express.json());
app.use(cors());
Moralis.start({
  apiKey: config.MORAL,
}).then(() => {
  app.listen(config.PORT, (req, res) => {
    console.log(`connected at ${config.PORT} `);
  });
});
router(app);
