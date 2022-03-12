class strategies {
    constructor() {
        this.cache = [];
    }
    isEmpty(obj) {
        let length = obj.value.trim().length;
        if(length==0){
            obj.valueFlag="不能为空";
            return false;
        }
        return true;
    }
    isEmail(obj) {
        let re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        if (re.test(obj.value)) { 
            return true;
		}
        obj.valueFlag="email格式错误";
        return false;
    }
    isUrl(obj){
        
            var strRegex = '^((https|http|ftp|rtsp|mms)?://)' 
            + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
            + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
            + '|' // 允许IP和DOMAIN（域名） 
            + '([0-9a-z_!~*\'()-]+.)*' // 域名- www. 
            + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名 
            + '[a-z]{2,6})' // first level domain- .com or .museum 
            + '(:[0-9]{1,4})?' // 端口- :80 
            + '((/?)|' // a slash isn't required if there is no file name 
            + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$'; 
            var re=new RegExp(strRegex); 

            if (re.test(obj.value)) { 
            return true; 
            }
            obj.valueFlag="网址格式错误";
            return false;
    }
    add(obj, method) {
        
        let tmp = () => this[method].call(this, obj);
        this.cache.push(tmp);
        return this;
    }
    check() {
        let arr = this.cache, length = arr.length ;
        for (let i = 0; i < length; i++) {
            let flag = arr[i]();
            if (!flag) {
                return false;
            }
        }
        return true;
    }
}
export default strategies