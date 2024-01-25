const app = require("./app");
const connectDB = require("./db");
require("dotenv").config({ path: "./.env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("App Error : ", error);
      throw error;
    });
    app.listen(process.env.PORT || 5050, () => {
      console.log(`Server is running at Port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error while connect server ", error);
  });
