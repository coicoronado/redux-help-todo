import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar el Mundo'),
  new Todo('Comprar leche'),
  new Todo('Planchar Ropa'),
  new Todo('ver REdux'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  // on(borrar, (state, { id }) => state.filter(todo => id !== todo.id)),
  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        console.log({...todo, completado: !todo.completado});
        const resp = {...todo, completado: !todo.completado};
        return {...todo, completado: !todo.completado};
        // {
        //   ...todo,
        //   completado: !todo.completado
        // };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
