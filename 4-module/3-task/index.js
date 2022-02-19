function highlight(table) {
    for (const row of table.tBodies[0].rows) {
        if (row.cells[3].dataset.available == 'true') {
            row.classList.add(`available`);
        } else if (row.cells[3].dataset.available == 'false') {
            row.classList.add(`unavailable`);
        } else {
            row.hidden = true;
        }
        if (row.cells[2].textContent == `m`) {
            row.classList.add(`male`);
        } else if (row.cells[2].textContent == `f`) {
            row.classList.add(`female`);
        }
        if (Number(row.cells[1].textContent) < 18) {
            row.style.textDecoration = `line-through`;
        }
    }


}
