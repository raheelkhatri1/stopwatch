var min = 0
var second = 0
var play = false;
var main__div = document.getElementById("root")
var watch = document.createElement("div")
main__div.appendChild(watch)
main__div.setAttribute("class","blue")
watch.classList.add("watch")
var boxContinar = document.createElement("div")
var box = document.createElement("div")
boxContinar.appendChild(box)
watch.appendChild(boxContinar)
boxContinar.classList.add("boxContinar")
box.setAttribute("class","box")
var pera = document.createElement("p")
var peratext = document.createTextNode(min+":"+second)
pera.appendChild(peratext)
box.appendChild(pera)
var playbtn = document.createElement("button")
var stopbtn = document.createElement("button")
var btndiv = document.createElement("div")
playbtn.setAttribute("class","bluebtn")
stopbtn.setAttribute("class","bluebtn")
playbtn.setAttribute("id","playbtn")
playbtn.setAttribute("onclick","myfunction()")
stopbtn.setAttribute("onclick","stopfunction()")
btndiv.appendChild(playbtn)
btndiv.appendChild(stopbtn)
watch.appendChild(btndiv)
var playBtnText = document.createTextNode("Play")
var stopBtnText = document.createTextNode("Reset")
playbtn.appendChild(playBtnText)
stopbtn.appendChild(stopBtnText)
btndiv.classList.add("btnDiv")

var btnsave = document.getElementById("playbtn")
function myfunction() {
    if(!play){
        btnsave.innerHTML = "pause"
        main__div.setAttribute("class","blue")
        playbtn.setAttribute("class","bluebtn")
        stopbtn.setAttribute("class","bluebtn")
        box.setAttribute("class","box")
        play = true
        interval = setInterval(() => {
            second += 1
            pera.innerHTML = min + ":" + second
            if(second >= 60){
                second = 0
                min += 1
            }
            
        }, 1000);

        
    }else{
        clearInterval(interval)
        play = false
        btnsave.innerHTML = "play"
        main__div.setAttribute("class","red")
        playbtn.setAttribute("class","redbtn")
        stopbtn.setAttribute("class","redbtn")
        box.setAttribute("class","unbox")
    }
    
}

function stopfunction() {
    clearInterval(interval)
    min = 0
    second = 0
    pera.innerHTML = min + ":" + second 
    play = false
    btnsave.innerHTML = "play"
    main__div.setAttribute("class","blue")
    playbtn.setAttribute("class","bluebtn")
    stopbtn.setAttribute("class","bluebtn")
    box.setAttribute("class","box")

}