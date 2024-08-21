// display details in the edit page 

function fetchData(){
   


    // console.log(window.location.search);
    const urlParams= new URLSearchParams(window.location.search)
    // console.log(urlParams);

    //get id from urlParams
    const id=urlParams.get("id")
    // console.log(id);
    str="";
        
        const data=JSON.parse(localStorage.getItem(id));
        // console.log(data);
        str+=` <tr>
                    <td>ID </td>
                    <td><input type="text" id="ID" value="${data.ID}" readonly></td>
                    
                </tr>
                <tr>
                    <td>Name </td>
                    <td><input type="text" id="name" value="${data.Name}"></td>
                    
                </tr>
                <tr>
                    <td>Designation</td>
                    <td><input type="text" id="desig" value="${data.Designation}"></td>
                    
                </tr>
                <tr>
                    <td>Salary</td>
                    <td><input type="text" id="salary" value="${data.Salary}"></td>
                    
                </tr>
                <tr>
                    <td>Company</td>
                    <td><input type="text" id="company" value="${data.Company}"></td>
                    
                </tr>
                <tr>
                    <td></td>
                    <td><button onclick="edit(${data.ID})" class="edit-btn">UPDATE</button></td>
                    
                </tr>
                `
        

    
    document.getElementById("table-body").innerHTML=str;
}
fetchData()

// To edit the details 
function edit(id){
    // console.log(id);

let name=document.getElementById("name").value
let designation=document.getElementById("desig").value
let salary=document.getElementById("salary").value
let company=document.getElementById("company").value

obj={ID:id,Name:name,Designation:designation,Salary:salary,Company:company}
localStorage.setItem(id,JSON.stringify(obj))
alert("Updated Succesfully")
window.location.href='../index.html'


}