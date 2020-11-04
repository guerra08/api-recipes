import { Schema } from "mongoose";

export interface IRecipe {
    name: string;
    prepTime: number;
    portions: number;
    ingredients: Array<string>;
    preparation: string;
}

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    prepTime: {
        type: Number,
        required: true,
    },
    portions: {
        type: Number,
        required: true,
    },
    ingredients: [
        {
            type: String,
        },
    ],
    preparation: {
        type: String,
        required: true,
    },
});

RecipeSchema.virtual("getIngredientsString").get(function (this: IRecipe) {
    return this.ingredients.reduce((acc, cur) => (acc += `${cur}\n`));
});
