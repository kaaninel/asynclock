# asynclock
A helper for pausing functions.

Example Usage
```js
const asynclock = require("asynclock")
const al = asynclock();

const send = (data) => {
    const Random = 123; // Generate Random ID
    const Pack = JSON.stringify({id: Random, data}); // Pack Data with Id
    // Send Data Package 
    // Socket.send(Pack);
    
    setTimeout(function(){onmessage(Pack);}, 1000); // For simulating response 
    
    // Return Lock
    return al.Lock(Random);
}

const onmessage = (Pack)=> {
    const Unpacked = JSON.parse(Pack);
    al.UnLock(Unpacked.id, Unpacked.data);
}

const test = async function(){
    const retValue = await send({query: "getUsers"});
    console.log("retValue", retValue);
}

test();
```

Library
```js
{
    Lock: function(Id){}, // (Promise) call when you need to pause
    UnLock: function(Id, Value){} // (undefined) call when you need to continue
}
```

Id can be any javascript object key. 
