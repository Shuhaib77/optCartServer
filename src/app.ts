import express from "express"
import cors from "cors"
import super_admin_route from "./routes/super_admin_route"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api",super_admin_route)
export default app


