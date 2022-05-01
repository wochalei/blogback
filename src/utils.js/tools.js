function matchImg(content, img) {
  let deleted,tmp=[];

  content.replace(/!\[.+?\]\((.+?)\)/g, (a, b) => {
    
    tmp.push(b);
  })
  
 deleted=img.filter((item)=>{
       
     if(tmp.indexOf(item)==-1){
       return true;
     }
  })
  
  return deleted;
}
function readImg(file) {
  let reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = function (event) {

      resolve(event.target.result);
    }
    reader.readAsDataURL(file);
  })

}

  function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
function timestampToTime(timestamp) {
  var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  return Y+M+D+h+m+s;
}
function timeToYm(timestamp){
  var date = new Date(timestamp );
  var Y = date.getFullYear();
  var M = (date.getMonth()+1);
  var D = date.getDate();
  return {Y,M,D}
}
function dataToTree(data){
  
  let tmp = new Map();
      let d_tmp = [], count = 0;
      data.forEach((item, index) => {
       let{Y,M} =timeToYm(item.created);
       
        if (tmp.has(Y)) {
          let current = tmp.get(Y);
          let y_index = current.index;
          if (M in current) {
           let m_index = current[M];
            d_tmp[y_index].kids[m_index].kids.push(item);
          }
          else {
            current[M]=d_tmp[y_index].kids.length;
            d_tmp[y_index].kids.push({name:M,kids:[item]});
            
          }
        } else {
          d_tmp[count] = { name: Y, kids: [{ name: M, kids: [item] }] }
          tmp.set(Y, { index: count++, [M]: 0 });
        }
      })
      return d_tmp;
}
function debounce(func, wait) {
  let timeout=null;
   
  return function (...arr) {
      let context = this; // 保存this指向
     
        console.log(this); 
      clearTimeout(timeout)
      timeout = setTimeout(function(){
          func.apply(context, arr)
      }, wait);
  }
}
export {
  matchImg,
  readImg,
  getNowFormatDate,
  timestampToTime,
  timeToYm,
  dataToTree,
  debounce
}