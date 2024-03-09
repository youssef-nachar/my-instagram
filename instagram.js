const setAlet = (msg,type="danger")=>{
    return`<p class"alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"><?button></P>`;

}

//  @param { * } key


const getLSData=(key)=>{
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }else{
        return false;
    }
}
const createLSData