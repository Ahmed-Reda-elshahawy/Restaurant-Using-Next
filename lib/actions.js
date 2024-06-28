'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function ShareMeal(prevState, formData) {
    function IsInvalidInput(inputText) {
        return !inputText || inputText.trim() === '';
    }

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    if (
        IsInvalidInput(meal.title) ||
        IsInvalidInput(meal.summary) ||
        IsInvalidInput(meal.instructions) ||
        IsInvalidInput(meal.creator) ||
        IsInvalidInput(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size == 0
    ) {
        // throw new Error('Invalid input');
        return {
            message: 'Invalid input value'
        }
    }

    await saveMeal(meal);
    revalidatePath('/meals'); // by default only one page === revalidatePath('/meals', 'page');
    // revalidatePath('/meals', 'layout'); // if revalidate the nested pages
    // revalidatePath('/', 'layout'); // if revalidate all pages
    redirect('/meals');
}