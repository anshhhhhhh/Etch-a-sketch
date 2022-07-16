let a=16;
let body = document.getElementsByTagName("body")[0];
const reset = document.createElement('button');
reset.classList.add('reset');
let container=document.getElementById('container');
reset.textContent = "Change grid";
body.appendChild(reset);

makeGrid(a, a);


function makeGrid(rowsnum, columns){
    for(let i = 0; i<rowsnum; i++){
        const row = document.createElement('div');
        row.classList.add('rows');
        for(let j=0; j<columns; j++){
            const cell = document.createElement('div');
            cell.textContent = " ";
            cell.classList.add('cells');
            row.appendChild(cell);
            cell.style.width=(935/columns)-1+"px";
            cell.style.height=(935/columns)-1+"px";
            cell.addEventListener("mouseover", ()=>{
                cell.style.background ="black";
            })
        }
       row.style.height=(935/columns)-1+"px";
       row.style.width= 960+"px";
        container.appendChild(row);
    }
}

reset.addEventListener('click', ()=>{
    for(let i=0; i<a; i++){
        container.removeChild(container.firstElementChild);
    }
    a = window.prompt("Enter new grid length:");
    makeGrid(a,a);
    
})