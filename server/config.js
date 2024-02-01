import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  ENV: process.env.ENV,
  NODE: process.env.NODE_ENV,
  MORALIS: process.env.MORALIS,
  MORAL: process.env.MORAL
};
