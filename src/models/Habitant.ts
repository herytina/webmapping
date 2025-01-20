import { TYPE_AGE, TYPE_SEXE } from "../enums/HabitantSexe"

export interface IHabitant {
    idHabitant ?: number
    sexe : TYPE_SEXE
    categorie : TYPE_AGE
}