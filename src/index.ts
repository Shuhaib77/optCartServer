import { AppDataSource } from "./config/database";
import app from './app';
import admin_route from './routes/admin_route'
AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established");

    app.use('/api/admin',admin_route)

    
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error: any) => console.log("Database connection failed:", error));
