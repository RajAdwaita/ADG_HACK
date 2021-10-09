let userinput;
let button = document.getElementById("clicked");
button.addEventListener("click",function(event){
    userinput=document.getElementById("userinput");
    let message = userinput.value;
    let params={
        active : true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs)
    {
        let msg ={
            txt : message
        };
        chrome.tabs.sendMessage(tabs[0].id,msg);
    }
    event.preventDefault();
});