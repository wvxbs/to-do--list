const Current = new Date()

const CurrentDayOfTheWeek = Current.toLocaleDateString("pt-BR", {
    weekday: 'long'
})
export const ParsedCurrentDayOfTheWeek = CurrentDayOfTheWeek.charAt(0).toUpperCase() + CurrentDayOfTheWeek.slice(1)

export const CurrentDate = "Dia " + Current.getDay() + " do " + (Current.getMonth() + 1) + "de " + Current.getFullYear()