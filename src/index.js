import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//si se envia en el argumento el propio elemento del foreach a la funcion llamada no es necesario ingresarle el argumento
todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );