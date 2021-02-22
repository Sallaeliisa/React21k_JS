(function () {

  let table = document.querySelector("table");
  
  executeScript = () => {
    let row = table.insertRow(2);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = "123";
    cell2.innerHTML = "test user name";
    cell3.innerHTML = "999";
  };

  /* code doesn't work if javascript injection is in the header part of HTML. */

  window.addEventListener("DOMContentLoaded", (event) => {
    executeScript();

    /*   Test user is still getting added. Maybe because all code is inside an anonymous function? */
  });
})();
