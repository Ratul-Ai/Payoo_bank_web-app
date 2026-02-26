let transactions = [];
let showAll = false;
let visibilityCount = 3;

function addTransaction(type, label, amount) {
  const sign = type === "add" ? +1 : -1;

  const card = {
    label: label,
    amount: amount,
    sign: sign,
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  };
  transactions.unshift(card);
  renderTransaction();
}

function toggle() {
  showAll = !showAll;
  renderTransaction();
}

function renderTransaction() {
  const list = document.getElementById("transaction-list");
  const btn = document.getElementById("view-btn");

  if (transactions.length > visibilityCount) {
    btn.classList.remove("invisible");
    btn.innerText = showAll ? "View Less" : "View All";
  } else {
    btn.classList.add("invisible");
  }

  let html = "";
  transactions.forEach((card, i) => {
    let rowClass;
    if (i < visibilityCount) {
      rowClass = "card-item";
    } else {
      rowClass = showAll ? "cardAll-show" : "cardAll";
    }
    const color = card.sign > 0 ? "add" : "minus";
    const prefix = card.sign > 0 ? "+" : "-";
    html += `
      <div class="${rowClass}">
        <div class="flex justify-between items-center bg-base-100 p-4 my-4 rounded-lg">

          <!-- Left: transaction name and date -->
          <div>
            <p class="font-semibold text-neutral">${card.label}</p>
            <p class="text-sm text-neutral/50">${card.date}</p>
          </div>

          <!-- Right: amount with sign and color -->
          <span class="font-bold ${color}">
            ${prefix}${card.amount.toLocaleString()} BDT
          </span>

        </div>
      </div>`;
  });
  list.innerHTML = html;
}
