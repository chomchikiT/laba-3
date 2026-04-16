// ===== Задача E2 — проверка =====
console.log("E2:", helloFromLogic());

// ===== Задача F1 — DOM =====
const messageDemoEl = document.getElementById("message-demo");
messageDemoEl.textContent = "DOM работает";

// ===== Задача F2 — список параграфов =====
const demoListEl = document.getElementById("demoList");
const demoTexts = ["Первый параграф — консультация по праву", "Второй параграф — консультация по финансам", "Третий параграф — консультация по IT"];
for (let i = 0; i < demoTexts.length; i++) {
  const p = document.createElement("p");
  p.textContent = demoTexts[i];
  demoListEl.appendChild(p);
}

// ===== Основная логика предметной области =====
const listEl = document.getElementById("list");
const messageEl = document.getElementById("message");

function getBadgeClass(status) {
  if (status === "new") return "badge--new";
  if (status === "done") return "badge--done";
  return "badge--cancelled";
}

function renderList(itemsToRender) {
  listEl.textContent = "";
  for (const item of itemsToRender) {
    const card = document.createElement("div");
    card.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = item.title;

    const info = document.createElement("p");
    info.className = "card__info";
    info.textContent = `id=${item.id} | Стоимость: ${item.value} руб. | Специалист: ${item.specialist} | Длительность: ${item.duration} мин. | Категория: ${item.category} | Дата: ${item.createdAt}`;

    const statusBadge = document.createElement("span");
    statusBadge.className = `badge ${getBadgeClass(item.status)}`;
    statusBadge.textContent = item.status;

    const btnRemove = document.createElement("button");
    btnRemove.className = "btn btn--danger";
    btnRemove.textContent = "Удалить";
    btnRemove.dataset.action = "remove";
    btnRemove.dataset.id = String(item.id);

    card.appendChild(h3);
    card.appendChild(info);
    card.appendChild(statusBadge);
    card.appendChild(document.createElement("br"));
    const br2 = document.createElement("div");
    br2.style.marginTop = "10px";
    br2.appendChild(btnRemove);
    card.appendChild(br2);

    listEl.appendChild(card);
  }
}

// Делегирование событий для кнопок "Удалить"
listEl.addEventListener("click", (e) => {
  if (e.target.dataset.action === "remove") {
    const id = Number(e.target.dataset.id);
    const idx = items.findIndex(item => item.id === id);
    if (idx !== -1) items.splice(idx, 1);
    renderList(items);
  }
});

// Кнопки управления
const btnAll = document.getElementById("btnAll");
const btnNew = document.getElementById("btnNew");
const btnSort = document.getElementById("btnSort");
const btnStats = document.getElementById("btnStats");

btnAll.addEventListener("click", () => {
  messageEl.classList.remove("visible");
  renderList(items);
});

btnNew.addEventListener("click", () => {
  messageEl.classList.remove("visible");
  renderList(filterByStatus(items, "new"));
});

btnSort.addEventListener("click", () => {
  messageEl.classList.remove("visible");
  renderList(sortByValueDesc(items));
});

btnStats.addEventListener("click", () => {
  const s = buildStats(items);
  messageEl.textContent =
    `Всего записей: ${s.totalCount}\nСумма стоимостей: ${s.sumValue} руб.\nМаксимальная стоимость: ${s.maxValue} руб.\nКоличество status="new": ${s.newCount}`;
  messageEl.classList.add("visible");
});

// Автозагрузка при старте
renderList(items);
