import React, {useEffect, useState} from 'react';
import {AppHeader} from "./components/app-header/app-header";
import {BurgerIngredients} from "./components/burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "./components/burger-constructor/burger-constructor";

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetch(INGREDIENTS_URL)
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    throw new Error("Ошибка выполнения запроса");
                }
            })
            .then(data => setIngredients(data.data))
            .catch(e => console.log(e));
    }, [])

    return (
        <>
            <AppHeader/>
            <div className="container">
                <div className="content">
                    <BurgerIngredients ingredients={ingredients}/>
                    <BurgerConstructor />
                </div>
            </div>
        </>
    );
}

export default App;
