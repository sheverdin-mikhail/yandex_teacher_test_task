export function ClassNames(cls, mods={}, anotherClasses=[]){
//Функция для удобного использования классов
    return [
        cls,
        ...anotherClasses,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}

