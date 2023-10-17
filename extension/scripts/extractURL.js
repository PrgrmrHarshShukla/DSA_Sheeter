let url;
let questionTitle;

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    url = tabs[0].url
    const title = tabs[0].title;
    // console.log(title);
    // questionTitle = title.slice(0, title.length - 11);
    questionTitle = title;
})

const button = document.getElementById('addButton');
button.addEventListener('click', function () {
    let oldListArray = JSON.parse(localStorage.getItem('dsaSheeterListArray'));
    
    let toAdd;
    
    if(oldListArray){
        toAdd = JSON.stringify(
            [
                ...oldListArray,
                {
                    "url": url,
                    "questionTitle": questionTitle
                }
            ]
        )
    }
    else{
        toAdd = JSON.stringify(
            [
                {
                    "url": url,
                    "questionTitle": questionTitle
                }
            ]
        )
    }
    
    
    localStorage.setItem('dsaSheeterListArray', toAdd);

    location.reload();


})
