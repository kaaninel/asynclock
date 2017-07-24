module.exports = function(){
  const Locks = {};
  
  const Lock = (Id) => new Promise(res => {
    Locks[Id] = res;
  });

  const UnLock = (Id, Value) => {
    if(Id in Locks && Locks[Id] instanceof Function){
      Locks[Id](Value);
      Locks[Id] = null;
    }
  }

  return {
    Lock, UnLock
  }
}