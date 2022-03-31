import Task from "../models/Task";

//muestra la vista.
export const renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

//Crea una nueva tarea
export const createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

//cambia el estado de la tarea a "hecho"
export const taskToggleDone = async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};

//muestra la tarea editada
export const renderTaskEdit = async (req, res, next) => {
  const task = await Task.findById(req.params.id).lean();
  res.render("edit", { task });
};

//edita la tarea
export const editTask = async (req, res, next) => {
  const { id } = req.params;
  await Task.updateOne({ _id: id }, req.body);
  res.redirect("/");
};

//elimina la tarea
export const deleteTask = async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({ _id: id });
  res.redirect("/");
};
