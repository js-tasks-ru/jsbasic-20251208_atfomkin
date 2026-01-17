export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');

    this.elem.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    let tbody = this.elem.querySelector('tbody');

    for (let row of rows) {
      let tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button>X</button></td>
      `;

      tr.querySelector('button').addEventListener('click', () => {
        tr.remove();
      });

      tbody.appendChild(tr);
    }
  }
}
