//your code here

function swapTheme() {
    var appDiv = document.getElementById('app');
    var swapButton = document.getElementById('swap');
    
    if(appDiv.classList.contains('day')) {
        appDiv.classList.remove('day');
        appDiv.classList.add('night');
        
        swapButton.classList.remove('button_day');
        swapButton.classList.add('button_night');
    } else {
        appDiv.classList.remove('night');
        appDiv.classList.add('day');
        
        swapButton.classList.remove('button_night');
        swapButton.classList.add('button_day');
    }
}

document.getElementById('swap').onclick = swapTheme;