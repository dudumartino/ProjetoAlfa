const silabasFrasesContainer = document.getElementById("silabasFrasesContainer")
const letrasPontuacaoContainer = document.getElementById("letrasPontuacaoContainer")
const matematicaBasicaContainer = document.getElementById("matematicaBasica")
const bonusContainer = document.getElementById("bonusContainer")

// Criar botões das aulas

let isAulaSelectorClick = false // Variavel para conferir se container dos botões está aberto, para fechar e abrir
function getAulaSilabasFrases(){
    
    fetch("data.json")
    .then(res => res.json())
    .then(data => {

    if (isAulaSelectorClick == false) {
        
        isAulaSelectorClick = true

        let pos = 1;
        data.videos.silabasFrases.forEach(element => {
            
            
            silabasFrasesContainer.innerHTML += `
            <li>
            <button id="btnAula${pos}" onclick="showAulaSilabasFrases(${pos- 1})">AULA ${pos}</button>
            <div id="aulaSilabasFrasesContainer${pos}"></div>
            </li>
            `
            
            pos++
        });
        pos = 1;
    
    } else {
            
            
            silabasFrasesContainer.innerHTML = `
            
            `
            

        isAulaSelectorClick = false
    }

})
}
function getLetrasPontuacao(){
    
    fetch("data.json")
    .then(res => res.json())
    .then(data => {

    if (isAulaSelectorClick == false) {
        
        isAulaSelectorClick = true

        let pos = 1;
        data.videos.letrasPontuacao.forEach(element => {
            
            
            letrasPontuacaoContainer.innerHTML += `
            <li>
            <button id="btnAula${pos}" onclick="showAulaLetrasPontuacao(${pos- 1})">AULA ${pos}</button>
            <div id="aulaLetrasPontuacaoContainer${pos}"></div>
            </li>
            `
            
            pos++
        });
        pos = 1;
    
    } else {
            
            
            letrasPontuacaoContainer.innerHTML = `
            
            `
            

        isAulaSelectorClick = false
    }

})
}
function getAulaMatematica(){
    
    fetch("data.json")
    .then(res => res.json())
    .then(data => {

    if (isAulaSelectorClick == false) {
        
        isAulaSelectorClick = true

        let pos = 1;
        data.videos.matematicaBasica.forEach(element => {
            
            
            matematicaBasicaContainer.innerHTML += `
            <li>
            <button id="btnAula${pos}" onclick="showAulaMatematica(${pos- 1})">AULA ${pos}</button>
            <div id="aulaMatematicaContainer${pos}"></div>
            </li>
            `
            
            pos++
        });
        pos = 1;
    
    } else {
            
            
            matematicaBasicaContainer.innerHTML = `
            
            `
            

        isAulaSelectorClick = false
    }

})
}
function getAulaBonus(){
    
    fetch("data.json")
    .then(res => res.json())
    .then(data => {

    if (isAulaSelectorClick == false) {
        
        isAulaSelectorClick = true

        let pos = 1;
        data.videos.bonus.forEach(element => {
            
            
            bonusContainer.innerHTML += `
            <li>
            <button id="btnAula${pos}" onclick="showAulaBonus(${pos- 1})">AULA ${pos}</button>
            <div id="aulaBonusContainer${pos}"></div>
            </li>
            `
            
            pos++
        });
        pos = 1;
    
    } else {
            
            
            bonusContainer.innerHTML = ``
            

        isAulaSelectorClick = false
    }

})
}

let isVideoShowing = false; // Variavel para conferir se video está aberto, para fechar e abrir

// Mostrar Aulas de Silabas e Frases
function showAulaSilabasFrases(pos){
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
        
        if (isVideoShowing == false) {
            
            document.getElementById(`aulaSilabasFrasesContainer${pos+1}`).innerHTML = `
            
            <iframe width="511" height="383" src="https://www.youtube.com/embed/${data.videos.silabasFrases[pos]}" title="AULA N" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            `
            isVideoShowing = true;
        } else {
            document.getElementById(`aulaSilabasFrasesContainer${pos+1}`).innerHTML = "";
            isVideoShowing = false
        }
                
        })
    }

// Mostrar Aulas de Letras e Pontuações
function showAulaLetrasPontuacao(pos){
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
        
        if (isVideoShowing == false) {
            
            document.getElementById(`aulaLetrasPontuacaoContainer${pos+1}`).innerHTML = `
            
            <iframe width="511" height="383" src="https://www.youtube.com/embed/${data.videos.letrasPontuacao[pos]}" title="AULA N" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            `
            isVideoShowing = true;
        } else {
            document.getElementById(`aulaLetrasPontuacaoContainer${pos+1}`).innerHTML = "";
            isVideoShowing = false
        }
                
        })
    }

// Mostrar Aulas de Matemática Básica
function showAulaMatematica(pos){
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
        
        if (isVideoShowing == false) {
            
            document.getElementById(`aulaMatematicaContainer${pos+1}`).innerHTML = `
            
            <iframe width="511" height="383" src="https://www.youtube.com/embed/${data.videos.matematicaBasica[pos]}" title="AULA N" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            `
            isVideoShowing = true;
        } else {
            document.getElementById(`aulaMatematicaContainer${pos+1}`).innerHTML = "";
            isVideoShowing = false
        }
                
        })
    }

// Mostrar Aulas Bônus
function showAulaBonus(pos){
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
        
        if (isVideoShowing == false) {
            
            document.getElementById(`aulaBonusContainer${pos+1}`).innerHTML = `
            
            <iframe width="511" height="383" src="https://www.youtube.com/embed/${data.videos.bonus[pos]}" title="AULA N" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            `
            isVideoShowing = true;
        } else {
            document.getElementById(`aulaBonusContainer${pos+1}`).innerHTML = "";
            isVideoShowing = false
        }
                
        })
    }

