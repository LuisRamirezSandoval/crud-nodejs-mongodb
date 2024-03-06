import Task from '../models/Task'

export const Index = async (req,res)=>{
    const tasks = await Task.find().lean()// lean() convierte la consulta a array de javascript
    res.render("index", { Tasks : tasks });
};

export const update = async (req,res)=>{
    const task = await Task.findById(req.params.id).lean();
    res.render("update",{task:task});
};

export const updateTask = async (req,res)=>{
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
};

export const taskAdd = async (req,res)=>{
    const task = Task(req.body); // obtener datos del formulario
    await task.save(); // agrgar tarea
    res.redirect('/')//volver a pagina principal
};

export const taskDelete = async (req,res)=>{
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
};

export const toggleDone = async (req,res)=>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    task.save();
    res.redirect("/");
};