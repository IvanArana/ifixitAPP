import {Router} from "express";
import {
    createTask,
    deleteTask,
    renderTasks,
    taskToggleDone,
    renderTaskEdit,
    editTask
} from "../controllers/tasks.controllers";

const router = Router();

//rederiza todas las Tasks
router.get("/",renderTasks);

router.post("/tasks/add", createTask); //envia por metodo POST los valores del formulario a la funcion createTask.

router.get("/tasks/:id/toggleDone", taskToggleDone); //envia el id de la tarea para saber si la tarea esta hecha.

router.get("/tasks/:id/edit", renderTaskEdit); //muestra la task ya editada

router.post("/tasks/:id/edit", editTask); //envia por metodo POSt la tarea editada

router.get("/tasks/:id/delete", deleteTask); //elimina la tarea

export default router;