function add(){
    // alert("Hey")
let id=document.getElementById("ID").value
let name=document.getElementById("name").value
let designation=document.getElementById("desig").value
let salary=document.getElementById("salary").value
let company=document.getElementById("company").value


// console.log(id);
// console.log(name);
// console.log(designation);
// console.log(salary);
// console.log(company);

obj={ID:id,Name:name,Designation:designation,Salary:salary,Company:company}
// console.log(obj);
data=JSON.stringify(obj)
// console.log(data);

localStorage.setItem(id,data)
window.location.href=''

}