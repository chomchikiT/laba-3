// Задача E2 — функция из logic.js
function helloFromLogic() {
  return "logic works";
}

// Фильтрация по статусу
function filterByStatus(items, status) {
  return items.filter(item => item.status === status);
}

// Поиск по id
function findById(items, id) {
  return items.find(item => item.id === id) || null;
}

// Сортировка по value по убыванию (через копию)
function sortByValueDesc(items) {
  const copy = items.slice();
  copy.sort((a, b) => b.value - a.value);
  return copy;
}

// Агрегация статистики
function buildStats(items) {
  return items.reduce((acc, item) => {
    acc.totalCount += 1;
    acc.sumValue += item.value;
    if (item.value > acc.maxValue) acc.maxValue = item.value;
    if (item.status === "new") acc.newCount += 1;
    return acc;
  }, { totalCount: 0, sumValue: 0, maxValue: 0, newCount: 0 });
}

// ===== Задания блока 2.1 =====

// A1
function calcTotal(a, b) {
  const result = a + b;
  console.log("A1 calcTotal:", result);
  return result;
}
calcTotal(10, 5);

// A2
function formatRecord(id, title, status) {
  const str = `#${id} ${title} [${status}]`;
  console.log("A2 formatRecord:", str);
  return str;
}
formatRecord(3, "Тестовая запись", "new");

// B1
const values = [1200, 500, 800, 1500];
let sumB = 0;
for (let i = 0; i < values.length; i++) { sumB += values[i]; }
console.log("B1 сумма:", sumB);

// B2
const filteredB = values.filter(v => v >= 800);
console.log("B2 filter >= 800:", filteredB);

// C1
const record = { id: 1, title: "Консультация по праву", value: 3500, status: "new", createdAt: "2026-03-01" };
console.log("C1 до:", record);
record.status = "done";
console.log("C1 после:", record);

// C2
function isNew(rec) { return rec.status === "new"; }
console.log("C2 isNew(new):", isNew({ status: "new" }));
console.log("C2 isNew(done):", isNew({ status: "done" }));

// D1
const testItems = [
  { id: 1, title: "Консультация 1", value: 2000, status: "new", createdAt: "2026-01-01" },
  { id: 2, title: "Консультация 2", value: 3000, status: "done", createdAt: "2026-01-02" },
  { id: 3, title: "Консультация 3", value: 1500, status: "new", createdAt: "2026-01-03" },
  { id: 4, title: "Консультация 4", value: 4000, status: "cancelled", createdAt: "2026-01-04" }
];
const found = testItems.find(item => item.id === 3) || null;
console.log("D1 find id=3:", found);

// D2
const stats = testItems.reduce((acc, item) => {
  acc.totalCount += 1;
  acc.sumValue += item.value;
  return acc;
}, { totalCount: 0, sumValue: 0 });
console.log("D2 reduce статистика:", stats);
