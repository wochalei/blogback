class Bus {  
    constructor() {  
      this.callbacks = {};   // 存放事件的名字  
    }  
    $on(name, fn) {  
      this.callbacks[name] = this.callbacks[name] || [];  
      this.callbacks[name].push(fn);  
    }  
    $emit(name, args) {  
      if (this.callbacks[name]) {  
        this.callbacks[name].forEach((cb) => cb(args));  
      }  
    }  
}  
const eventBus = new Bus();
export {
    eventBus
}