const todoList=[
  {
    name:'write',
  dueDate:'2024-07-02'
  }
];
renderTodoList();
function renderTodoList(){
  let todoHTML='';
  for(let i=0;i<todoList.length;++i){
  const todoobject=todoList[i];
  const name=todoobject.name;
  const dueDate=todoobject.dueDate;
  const html=`
  <div>${name}</div>
  <div>${dueDate} </div>
  <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
  " class="delete-todo-button">Delete</button> `;
  todoHTML+=html;
  }
  //console.log(todoHTML);
  document.querySelector('.js-todo-list')
  .innerHTML=todoHTML;
}
function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;
  const dateInputElement=document.querySelector('.js-due-date-input');
  const dueDate=dateInputElement.value;
  todoList.push({
    //name:name,
    //dueDate:dueDate
    name,
    dueDate
  });
  //console.log(todoList);
  inputElement.value='';
  renderTodoList();
  
}

        