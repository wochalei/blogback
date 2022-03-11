/* 白名单赛选 */
function check(value,allowSchemes=["http", "https"]){
    for (let index = 0; index < allowSchemes.length; index++) {
        const element = allowSchemes[index];
        let tmp = new RegExp("^" +  element ,"gi");
        if(tmp.test(value)){
           return false;
        }
    }
    return true; 
}
function changXss(str,value='http'){
    let tmp = new RegExp("^javascript","gi");   
    return str.replace(tmp,value); 
}
export{
    check,
    changXss
}