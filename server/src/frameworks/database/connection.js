import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(`mongodb://0.0.0.0:27017/etherexplorer`)
    .then(() => {
      console.log(`database connected`);
    })
    .catch((er) => {
      console.error(er);
    });
};
