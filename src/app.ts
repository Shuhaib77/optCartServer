import express from "express"
import cors from "cors"
import super_admin_route from "./routes/super_admin_route"
import admin_route from './routes/admin_route'
import hr_route from './routes/hr_routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/superadmin",super_admin_route)
app.use("/api/admin",admin_route)
app.use('/api/hr',hr_route)

export default app


