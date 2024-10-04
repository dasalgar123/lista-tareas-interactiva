function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    // Crear el elemento li para la nueva tarea
    const li = document.createElement('li');
    li.textContent = taskText;

    // Crear los botones de acción (completar y eliminar)
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Completar';
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = () => {
        li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => {
        taskList.removeChild(li);
    };

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);
    li.appendChild(taskActions);

    // Agregar la tarea a la lista
    taskList.appendChild(li);

    // Limpiar el campo de entrada
    taskInput.value = "";
}
