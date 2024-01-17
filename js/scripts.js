class Todo {
    totalTasks = 0;

    constructor () {
        this.totalTasks = document.querySelectorAll(".task").length;
    }

    addTask(taskText) {
        // Clona Template
        let template = document.querySelector('.task').cloneNode(true);

        // Remove classe "hide"
        template.classList.remove('hide');

        // Manipular Texto
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;

        // Inserir tarefa na lista
        let list = document.querySelector("#tasks-container");
        list.appendChild(template);

        // adiciona eventos as tasks
        this.addEvents();

        this.checkTasks('add')
    }

    removeTask(trashOfTask) {
        // remover elemento Pai (task)
        trashOfTask.parentElement.remove();

        this.checkTasks('remove');
    }

    completeTask(completeOfTask) {
        // adiciona a classe done
        completeOfTask.classList.add('done');
    }

    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];

        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];

        // adicionar evento de remover
        removeBtn.addEventListener('click', (e) => todo.removeTask(e.target));

        // adicionar evento de completar tarefa
        doneBtn.addEventListener('click', (e) => todo.completeTask(e.target));
    }

    checkTasks(command) {
        let msg = document.querySelector('#empty-tasks');

        // Lógica de adicionar ou remover tasks
        if (command === 'add') this.totalTasks += 1;

        if (command === 'remove') this.totalTasks -= 1;


        // Checa se tem mais de uma task e adiciona ou remove a classe
        if (this.totalTasks == 1) msg.classList.remove('hide');
        if (this.totalTasks > 1) msg.classList.add('hide');
    }
}

let todo = new Todo();

// Events
let addBtn = document.querySelector("#add");

addBtn.addEventListener('click', e => {
    e.preventDefault();

    let taskText = document.querySelector("#task");

    if (taskText.value !== '') todo.addTask(taskText.value);

    // Limpa input
    taskText.value = '';
})