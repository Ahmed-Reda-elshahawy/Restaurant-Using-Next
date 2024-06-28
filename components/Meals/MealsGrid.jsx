import MealItem from "./MealItem";
import cssClasses from "./MealsGrid.module.css";


export default function MealsGrid({ meals }) {
    return (
        <ul className={cssClasses.meals}>
            {meals.map((meal) => {
                return (
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                );
            })}
        </ul>
    )
}