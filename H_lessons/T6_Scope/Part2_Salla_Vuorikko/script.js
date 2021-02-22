(function () {

  let table = document.querySelector("table");
  let oldest;

/* Task 1: copy function */

  const getUsers = () => [
    {
      studentNo: 123,
      name: "harry",
      age: 15,
    },
    {
      studentNo: 234,
      name: "Ron",
      age: 16,
    },
    {
      studentNo: 135,
      name: "Hermione",
      age: 17,
    },
    {
      studentNo: -1,
      name: "Snape",
      age: 55,
    },
    {
      studentNo: -1,
      name: "Hagrid",
      age: 65,
    },
  ];

  let userObject = [];

    /* Task 3: iterate through array and call addUser */
  
  getUsers().forEach((userInfo) => {
    addUser(userInfo);
    userObject.push(userInfo);

    /* Task 2: define function addUser */
    /* Task 5: new isStaff -column to table */

    function addUser() {
      let row = table.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);

      cell1.innerHTML = userInfo.studentNo;
      cell2.innerHTML = userInfo.name;
      cell3.innerHTML = userInfo.age;

      if (userInfo.studentNo >= 0) {
        userInfo.isStaff = "student";
        cell4.innerHTML = "student";
      } else {
        userInfo.isStaff = "staff";
        cell4.innerHTML = "staff";
      }
    }
  });

  /* Task 4: define function getOldest */

  getOldest = function () {
    let getAge = 0;
    userObject.forEach((user) => {
      if (user.age > getAge) {
        getAge = user.age;
      }
    });
    userObject.forEach((user) => {
      if (user.age === getAge) {
        oldest = user.name;
        return oldest;
      }
    });
  };

  /* Task 6: define function and create button to sort persons by age (descendingly) */

  const sortTable = () => {
    let i = 0;
    while (i < userObject.length) {
      table.deleteRow(1);
      i++;
    }
    let ind = 0;
    while (ind < (userObject.length)) {
      userObject.forEach((user) => {
        getOldest();
        if (user.name == oldest) {
          let row = table.insertRow();
          let cell1 = row.insertCell(0);
          let cell2 = row.insertCell(1);
          let cell3 = row.insertCell(2);
          let cell4 = row.insertCell(3);

          cell1.innerHTML = user.studentNo;
          cell2.innerHTML = user.name;
          cell3.innerHTML = user.age;
          cell4.innerHTML = user.isStaff;

          ind++;
          delete user.age;
          
        }
      });
    }
  };

  document.querySelector("button").addEventListener("click", sortTable);
})();
