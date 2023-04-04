import transactionHistory from "./data/trasactions.js";

{
  /* <tr>
<td>ID of transaction</td>
<td>Sum</td>
<td>Date</td>
<td>Who</td>
<td>Type of transaction</td>
<td>Name of account</td>
<td>Number of account</td>
</tr> */
}

const makeTransactionTableRowMarkup = ({
  id,
  amount,
  date,
  business,
  type,
  name,
  account,
}) => {
  return `
    <tr>
<td>${id}</td>
<td>${amount}</td>
<td>${date}</td>
<td>${business}</td>
<td>${type}</td>
<td>${name}</td>
<td>${account}</td>
</tr>
    `;
};

console.log(transactionHistory);
console.log(makeTransactionTableRowMarkup(transactionHistory[0]));

const tableEl = document.querySelector(".js-transaction-table");

const makeTransactionTableRows = transactionHistory
  .map(makeTransactionTableRowMarkup)
  .join("");

tableEl.insertAdjacentHTML("beforeend", makeTransactionTableRows);
