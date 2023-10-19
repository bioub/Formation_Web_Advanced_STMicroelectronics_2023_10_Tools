import style from './todos.module.css';

import { Todo } from '@formation/common/todo';

export function createTodo(todo: Todo): HTMLDivElement {
  const rowEl = document.createElement('div');
  rowEl.className = style.todosItem;
  rowEl.dataset.todoId = todo._id;

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = style.todosCompleted;
  checkboxEl.checked = todo.completed ?? false;

  const spanEl = createSpanValue(todo.title);

  const buttonEl = document.createElement('button');
  buttonEl.className = style.todosDeleteBtn;
  buttonEl.innerText = '-';

  rowEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return rowEl;
}

export function createSpanValue(val: string): HTMLSpanElement {
  const spanEl = document.createElement('span');
  spanEl.className = style.todosSpanValue;
  spanEl.innerText = val;
  return spanEl;
}

export function createInputValue(val: string): HTMLInputElement {
  const inputEl = document.createElement('input');
  inputEl.className = style.todosInputValue;
  inputEl.value = val;
  requestAnimationFrame(() => {
    inputEl.select();
  });
  return inputEl;
}
