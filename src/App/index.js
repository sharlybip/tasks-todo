import React from 'react';
import { AppUi } from './AppUi';
import { TodoProvider} from '../TodoContext';


// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Apagar la leche', completed: false},
//   {text: 'Cry whit the cryer', completed: false},
//   {text: 'Riendo con la risueña', completed: false},
// ];


const App = () => {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;



