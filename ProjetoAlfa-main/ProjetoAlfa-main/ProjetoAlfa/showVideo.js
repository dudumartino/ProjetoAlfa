const videoContainer = document.getElementById("videoContainer")

let videos

let isShowingVideo = false;

function showAula(pos){
    fetch("data.json")
    .then(res => res.json())
    .then(data => {

        console.log(data.videos[pos])

        if (isShowingVideo == false) {

            document.getElementById(`aulaContainer${pos+1}`).innerHTML = `
            
                <iframe width="511" height="383" src="https://www.youtube.com/embed/${data.videos[pos]}" title="AULA N" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
                `
                isShowingVideo = true;
        } else {
                    
            document.getElementById(`aulaContainer${pos+1}`).innerHTML = ``

                isShowingVideo = false
        }

        
    })
}

fetch("data.json")
.then(res => res.json())
.then(data => {
    
    let pos = 1;
    data.videos.forEach(element => {
        
        
        videoContainer.innerHTML += `
        <li>
        <button id="btnAula${pos}" onclick="showAula(${pos- 1})">AULA ${pos}</button>
        <div id="aulaContainer${pos}"></div>
        `

        pos++
    });

})


