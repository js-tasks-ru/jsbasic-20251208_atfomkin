function highlight(table) {
  const rows = table.tBodies[0].rows;

  for (let row of rows) {
    const cells = row.cells;

    const age = Number(cells[1].textContent);
    const gender = cells[2].textContent;
    const statusCell = cells[3];

    if (statusCell.hasAttribute('data-available')) {
      const available = statusCell.getAttribute('data-available');

      if (available === 'true') {
        row.classList.add('available');
      } else if (available === 'false') {
        row.classList.add('unavailable');
      }
    } else {
      row.hidden = true;
    }

    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
