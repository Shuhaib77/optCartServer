import  express  from "express"
import { branchGetControl, branchUpdated, createBranch, deleteUser, productCreate, productDeleteControl, productGetControl, productUpdate, updateUser, userAdd, userGet } from "../controllers/admin_controller";

const router=express.Router()
router.post("/branches",createBranch);
router.get('/branches', branchGetControl);
router.put('/branches/:branchId', branchUpdated);

//product 
router.post('/products', productCreate); 
router.put('/products/:product_id', productUpdate);
router.get('/products/branch/:branchId',productGetControl);
router.delete('/products/:productId',productDeleteControl);

//user 
router.post('/users',userAdd);
router.put('/users/:user_id',updateUser);
router.get('/users/branch/:branchId',userGet);
router.delete('/users/:userId',deleteUser);

export default router


