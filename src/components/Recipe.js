import React from "react";

import IngredientsList from "./IngredientsList";

export default function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients}/>
            <instructions title="Cooking instructions" steps={steps}></instructions>

        </section>
    );
}