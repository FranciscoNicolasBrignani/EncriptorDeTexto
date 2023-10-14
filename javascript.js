
function myFunction() {
    
}

function encriptar (){
    var texto = document.querySelector("#texto-usuario").value;
    var textoencriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    document.querySelector(".mensaje-encriptado").value = textoencriptado;
    document.querySelector("#texto-usuario").value;

    var x = document.getElementById('no-texto');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
}

var botonEncriptar = document.querySelector("#bntEncriptar"); botonEncriptar.onclick = encriptar;

function desencriptar (){ var texto = document.querySelector("#texto-usuario").value; 
			var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".mensaje-encriptado").value = textoCifrado; document.querySelector("#texto-usuario").value;

}


var botonDesencriptar = document.querySelector("#bntDesencriptar"); botonDesencriptar.onclick = desencriptar;

function read(){
  let text = document.querySelector('#caja-desencriptado').value

  return text;
}

async function copy(){
  let txt = read ()
  await navigator.clipboard.writeText(txt)
}

let btn = document.querySelector('#btn')

btn.addEventListener('click', copy)