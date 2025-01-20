import  express  from "express"
import { branchGetControl, branchUpdated, createBranch, productCreate, productDeleteControl, productGetControl, productUpdate } from "../controllers/admin_controller";

const router=express.Router()
router.post("/createBranch",createBranch);
router.get('/branches',branchGetControl);
router.put('/update/branch/:branchId',branchUpdated);
router.post('/product/create',productCreate);
router.put('/edit/product/:product_id',productUpdate);
router.get('/product/:branchId',productGetControl);//this is error
router.delete('/delete/product/:productId',productDeleteControl);
export default router


