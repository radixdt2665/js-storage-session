function initiate(){

    var saveBtn = document.getElementById('save');
    var retriveBtn = document.getElementById('retrive');

    saveBtn.addEventListener('click',saveData);
    retriveBtn.addEventListener('click',retriveData);
}


function saveData(){
    var regData = new Object();

    regData .fName = document.getElementById('fName').value;
    regData .lName = document.getElementById('lName').value;
    regData .bDate = document.getElementById('bDate').value;
    regData .emailId = document.getElementById('emailId').value;
    regData .pwd = document.getElementById('pwd').value;

    if(sessionStorage.registerData)
    {
     registerData= JSON.parse(sessionStorage.getItem('registerData'));
    }else{
     registerData=[];
    }
    registerData.push(regData)
    sessionStorage.setItem('registerData', JSON.stringify(registerData));
    
}

function retriveData(){
    
    var retrievedObject = sessionStorage.getItem('registerData');
    var storedData = JSON.parse(retrievedObject);
    let text = "";
    for (let i = 0; i < storedData.length; i++) {
        text += `
        <div class="card p-4 mt-4">
            <div>
                <p><span class="fw-bold">First Name : </span>${storedData[i].fName}</p>
                <p><span class="fw-bold">Last Name : </span>${storedData[i].lName}</p>
                <p><span class="fw-bold">Birth Date : </span>${storedData[i].bDate}</p>
                <p><span class="fw-bold">Email Id : </span>${storedData[i].emailId}</p>
            
                
            </div>
        </div>`
    }
    document.getElementById("data").innerHTML = text;
}
addEventListener ("load", initiate)