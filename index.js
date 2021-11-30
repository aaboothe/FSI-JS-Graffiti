let header = document.querySelector('#page-header')
header.style.textAlign = "left";
header.style.fontFamily = "sans-serif";
header.style.backgroundColor = 'blue';
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderStyle = 'dashed';
    dogImages[i].style.transform = 'rotate(180deg)'
}

let column = document.querySelectorAll('.column')
for(let c = 0; c < column.length; c++){
    column[c].style.backgroundColor = 'grey'
}

let dogname = document.querySelectorAll('.dog-name')
for(let n = 0; n < dogname.length; n++){
    dogname[n].style.textAlign = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = 'green';
footer.style.fontSize = '50px';

// Select some elements...