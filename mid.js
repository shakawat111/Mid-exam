const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const rst = document.getElementById("rst");
const insert = document.getElementById("insert");
const table = document.getElementById("table");


rst.addEventListener("click",reset);


function reset(){
    Fname.value = "";
    Lname.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
}


insert.addEventListener("click",saveData);


function saveData (){
    let tr = document.createElement("tr");
    let data1 = document.createElement("td");
    let data2 = document.createElement("td");
    let data3 = document.createElement("td");
    let data4 = document.createElement("td");
    let data5 = document.createElement("td");
    let data6 = document.createElement("td");
    let edit = document.createElement("a");
    let delt = document.createElement("a");
    data1.innerText = Fname.value;
    data2.innerText = Lname.value;
    data3.innerText = email.value;
    data4.innerText = phone.value;
    data5.innerText = address.value;
    edit.innerText = "Edit";
    delt.innerText = "Delete";
    data6.classList.add("buttons");
    edit.classList.add("edit");
    delt.classList.add("insert");
    edit.href = "#";
    delt.href = "#"
    tr.appendChild(data1);
    tr.appendChild(data2);
    tr.appendChild(data3);
    tr.appendChild(data4);
    tr.appendChild(data5);
    data6.appendChild(edit);
    data6.appendChild(delt);
    tr.appendChild(data6);
    table.appendChild(tr);
}