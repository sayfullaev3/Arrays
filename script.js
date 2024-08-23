let list = ['johongir', "alan", "safina", "laylo", "azim", "farxod", "alisher", "jasur", "islom"]
let DeleteStudent = prompt('Введите имя студента которого хотите исключить: alan, azim, alisher, farhod, islom, jasur, jahongir, safina, laylo.').toLowerCase()
let index = list.indexOf(DeleteStudent)
if (list.includes(DeleteStudent)) {
    list.splice(index, 1)
    alert('Успешно')
} else {alert("У вас не получилось удалить стундента")}
console.log(list);
