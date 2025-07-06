const askFriendOut = new Promise((resolve, reject) =>
{
    setTimeout(() => {
        friendIsAvalaible = Math.random()>0.5;

        if (friendIsAvalaible){
            resolve(" lets go to the moves");
        }else{
            reject(" Im busy");
        };
    },2000);
});

askFriendOut
.then(Response => {
    console.log("friend said" + Response);
})
.catch(rejection => {
    console.log("friend said" + rejection);
});