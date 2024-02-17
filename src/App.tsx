import React from 'react';
import './App.css';
import {AppHeader} from "./components/app-header/app-header";
import {BurgerIngredients} from "./components/burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "./components/burger-constructor/burger-constructor";

function App() {
  return (
      <>
          <AppHeader/>
          <div className="container">
            <div className="content">
                <BurgerIngredients />
                <BurgerConstructor />
            </div>
          </div>
      </>
  );
}

export default App;
