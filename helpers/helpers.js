export const createFloorsString =(count)=>{
  let str 
  switch (count) {
    case (1):
      str = 'Этаж'
      break;
    case (2||3||4):
      str = 'Этажа'
      break;
    default: str = 'Этажей'
      break;
  }

  return str
}