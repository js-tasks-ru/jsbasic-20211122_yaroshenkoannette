/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.table = this.createTable();
  }

  createTable() {
    this.table = document.createElement('table');
    const heads = '<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody></tbody>';
    let line;
    if (this.rows) {
      const arrOfLines = this.rows.map(element => {
        line = '<tr>';
        for (let key in element) {
          line = line + `<td>${element[key]}</td>`;
        }
        return line + '<td><button>X</button></td></tr>';
      });
      this.table.innerHTML = heads + arrOfLines.join('');
    }

    this.table.addEventListener('click', this.deleteRow);
    return this.table;
  }
  get elem() {
   return this.table 
  }

  deleteRow(ev) {
    if (ev.target.tagName !== 'BUTTON') return;
    const button = ev.target;
    button.closest('tr').remove();
  }
}

