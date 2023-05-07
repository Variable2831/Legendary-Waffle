
// Decorator
function Decorator(method){
    this.method = method;
  }
  
  Decorator.prototype.decorate = function(func){
    var self = this;
    return function(){
      self.method.apply(this,arguments);
      func.apply(this,arguments);
    }
  }
  
  // Forwarding
  function Forwarding(method, target){
    this.method = method;
    this.target = target;
  }
  
  Forwarding.prototype.forward = function(func){
    var self = this;
    return function(){
      self.method.apply(self.target, arguments);
      func.apply(this,arguments);
    }
  }
  
  // Example
  var myDecorator = new Decorator(function(a,b){
    console.log(a+b);
  });
  
  var myForwarding = new Forwarding(function(c,d){
    console.log(c-d);
  }, myDecorator);
  
  var decorated = myDecorator.decorate(function(e,f){
    console.log(e*f);
  });
  
  var forwarded = myForwarding.forward(function(g,h){
    console.log(g/h);
  });
  
  decorated(1,2); // 3, 1*2
  forwarded(3,4); // -1, 3-4, 3*4