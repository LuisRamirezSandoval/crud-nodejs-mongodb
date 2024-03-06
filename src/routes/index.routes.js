import {Router} from 'express'
import {Index,update,updateTask,taskAdd,taskDelete,toggleDone} from '../controllers/taskController'

const router = Router();

router.get("/", Index);
router.get("/update/:id",update);
router.post("/update/:id",updateTask);
router.post("/tasks/add", taskAdd);
router.get("/delete/:id", taskDelete);
router.get("/toggleDone/:id", toggleDone);

export default router;