import { AppDataSource } from "./config/database";
import app from ".";
AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error: any) => console.log("Database connection failed:", error));
