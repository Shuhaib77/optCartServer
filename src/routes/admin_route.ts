import  express  from "express"
import { createBranch } from "../controllers/admin_controller";

const router=express.Router()
router.post("/createBranch",createBranch);
router.get("/test", (req, res) => res.send("Route works!"));

export default router


