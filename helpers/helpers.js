export const createFloorsString = (count) => {
  return {
      1: 'Этаж',
      2: 'Этажа',
      3: 'Этажа',
      4: 'Этажа',
    }[count] ?? 'Этажей'
}

export const createHoursString = (count) => {
  return {
    1: 'час',
    21: 'час',
    31: 'час',
    2: 'часа',
    3: 'часа',
    4: 'часа',
    22: 'часа',
    23: 'часа',
    24: 'часа',
    32: 'часа',
    33: 'часа',
    34: 'часа',
  }[count] ?? 'часов'
}
