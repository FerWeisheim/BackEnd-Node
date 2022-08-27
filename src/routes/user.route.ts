import {Router} from 'express';
import {crearUser,deleteUser,getUsers,updateUser} from '../controllers/user.controller';

const router= Router();

router.post("/user",crearUser);

router.get("/users",getUsers);

router.put("/user/:id",updateUser);

router.delete("/user/delete/:id",deleteUser);
export default router;