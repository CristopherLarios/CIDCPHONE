function case_action(){
    btncancel = document.getElementById("btn-cancel");
    btncancel.style.display = '';
    btnsave = document.getElementById("btn-save");
    btnsave.style.display = '';
    btnupdate = document.getElementById("btn-update");
    btnupdate.disabled = true;
    btnupdate.style.opacity =0.3;
    btndelete = document.getElementById("btn-delete");
    btndelete.disabled = true;
    btndelete.style.opacity =0.3;
}

function case_noaction(){
   btncancel = document.getElementById("btn-cancel");
   btnsave = document.getElementById("btn-save");
   btnupdate = document.getElementById("btn-update");
   btndelete = document.getElementById("btn-delete");
   btncancel.style.display = 'none';   
   btnsave.style.display = 'none';
   btnupdate.disabled = false;
   btnupdate.style.opacity =1;
   btndelete.disabled = false;
   btndelete.style.opacity =1;
}

function case_Update(){
    case_action();
    alert("Se actualizo Correctamente");
}
function case_Delete(){
    case_action();
    alert("Se elimino Correctamente");
}
function case_Cancel(){
    case_noaction();
    alert("Se cancelo Correctamente");
}
function case_Save(){
    case_noaction();
    alert("Se guardo Correctamente");
}
