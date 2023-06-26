'use strict'

let d =document;

function excuseitor(selector){

 let $btn = d.querySelector(selector),
 who = ['The dog', 'My grandma', 'His turtle', 'My bird'],
 action = ['ate', 'peed', 'crushed', 'broke'],
 what = ['my homework', 'the keys', 'the car'],
 when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
 


d.addEventListener("click", e=>{
    if(e.target.matches(selector)){
        let h2 = d.createElement("h2"),
        calc = Math.floor(Math.random() * 4);
        document.body.appendChild(h2);
        h2.textContent = who[calc] + action[calc] + what[calc] + when[calc];
        $btn.insertAdjacentElement('beforebegin',h2);
    }

})


}


excuseitor('#excusas');