var objects = [{ id: 2, name: "Организация", parent_id: null },
{ id: 3, name: "Бухгалтерия", parent_id: 2 },
{ id: 6, name: " Отдел охраны", parent_id: 2 },
{ id: 7, name: "Караульная служба", parent_id: 6 },
{ id: 8, name: "Бюро пропусков", parent_id: 6 },
{ id: 12, name: "Патентный отдел", parent_id: 2 },
{ id: 13, name: "Лётная служба", parent_id: 2 },
{ id: 14, name: "Лётный отряд Боинг 737", parent_id: 13 },
{ id: 17, name: "Лётный отряд Боинг 747", parent_id: 13 },
{ id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14 },
{ id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14 },
{ id: 21, name: "Лётно-методический отдел", parent_id: 13 }]
var list = '';

for (let i of objects) {
    if (i.parent_id == null) {
        getList(i);
    }
}

document.write(list);

function getList(parent) {
    list += '<ul>';
    list += `<li>${parent.name}</li>`;
    for (let i of objects) {
        if (i.parent_id == parent.id) {
            getList(i);
        }
    }
    list += '</ul>';
}