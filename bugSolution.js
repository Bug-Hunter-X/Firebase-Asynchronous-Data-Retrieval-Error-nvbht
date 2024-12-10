The solution involves ensuring all data-dependent operations are performed within the promise's `then` block:

```javascript
// Correct asynchronous handling
db.ref('users').once('value').then(snapshot => {
  const users = snapshot.val();
  console.log(users);
  someFunctionThatUsesUsers(users);
});

function someFunctionThatUsesUsers(users){
  //This now correctly uses the data after it has been retrieved
  console.log("Users data:", users);
}
```
This ensures that `someFunctionThatUsesUsers` only executes after the data has been successfully retrieved from Firebase, eliminating the undefined error.