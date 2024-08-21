function fetchData(){
    // console.log(localStorage.length);
        str="";
        for(i=0;i<localStorage.length;i++){
            const key=localStorage.key(i);
            // console.log(key);
            
            const data=JSON.parse(localStorage.getItem(key));
            // console.log(data);
            str+=`<tr>
                    <td>${data.ID}</td>
                    <td>${data.Name}</td>
                    <td>${data.Designation}</td>
                    <td>${data.Salary}</td>
                    <td>${data.Company}</td>
                    <td><span>
                     <a href="./pages/edit.html?id=${data.ID}"><button class="edit-btn">EDIT</button></a>
                      <button class="delete-btn"  onclick="deleteEmployee(${data.ID})" >DELETE</button>
                   </span>
                    </td>
                </tr>`
            

        }
        if(localStorage.length==0){
            alert("Please add employees to view")
        }
        else{
            document.getElementById("table-body").innerHTML=str;
        }
    
    
    
}
fetchData()

// To search data 
document.getElementById("search").addEventListener("keyup",(e)=>{
    str=""
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        // console.log(key);
        const data=JSON.parse(localStorage.getItem(key))
        // console.log(data);
        // console.log(data.Name);
        // console.log(e.target.value);
        
        if(data.Name.toLowerCase().includes(e.target.value.toLowerCase())){
            str+=`<tr>
                    <td>${data.ID}</td>
                    <td>${data.Name}</td>
                    <td>${data.Designation}</td>
                    <td>${data.Salary}</td>
                    <td>${data.Company}</td>
                    <td><span>
                     <a href="./pages/edit.html?id=${data.ID}"><button class="edit-btn">EDIT</button></a>
                      <button class="delete-btn"  onclick="deleteEmployee(${data.ID})" >DELETE</button>
                   </span>
                    </td>
                </tr>`
        }
       
         
    }
    document.getElementById("table-body").innerHTML=str;



})




// To delete employee by passing id 

function deleteEmployee(id){
    // console.log(id);
   if( confirm("Are you sure you want to delete this employee?")){
        localStorage.removeItem(id)
        fetchData()

   }
    

}

