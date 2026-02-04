let toDoArray=[];

function printToPage(){
    let toDoListHTML='';
    for(let i=0;i<toDoArray.length;i++){
        let html=`<p> 
        ${toDoArray[i].name}
        <span>${toDoArray[i].date}</span>
        <button onclick="deleteTask(${i});">Delete</button>
         </p>`;
        toDoListHTML+=html;
    }
    document.querySelector(`.js-container`).innerHTML=toDoListHTML;
}

function addToDo(){
    let inputElement=document.querySelector(`.js-name-input`);
    let inputDate=document.querySelector(`.js-date-input`);
    toDoArray.push({
        name:inputElement.value,
        date:inputDate.value
    });

    // console.log(toDoArray);
    inputElement.value='';
    inputDate.value='';
}

function deleteTask(i){
    toDoArray.splice(i,1);
    printToPage();
}