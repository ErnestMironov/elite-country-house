import { pluralize } from "pluralize-ru-ts";

export const createFloorsString = (count) => {
  return {
    1: 'Этаж',
    2: 'Этажа',
    3: 'Этажа',
    4: 'Этажа',
  }[count] ?? 'Этажей'
}



export const daysPluralize = pluralize('день', 'дня', 'дней');
export const hoursPluralize = pluralize('час', 'часа', 'часов');
export const personsPluralize = pluralize('человек', 'людей', 'людей');