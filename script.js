function insert(num){

    var numero = document.getElementById('resultado').innerHTML;   
    document.getElementById('resultado').innerHTML = numero + num;
}
function clr(){
    document.getElementById('resultado').innerHTML = '';
}
function blackspace(){
    var result = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = result.substring(0,result.length - 1);
}
function calcular(){
    var result = document.getElementById('resultado').innerHTML
    
    if(result){
        
        if(result.includes('%')){
            var hist = document.getElementById("campo").value;
            hist = hist + result + '\n';
            document.getElementById('campo').value = hist;
            var perc
            if(result.includes('+')){
                perc = result.split('+');
                perc[1] = perc[1].replace('%','');
                perc[1] = parseFloat(perc[1]);
                perc[0] = parseFloat(perc[0]);
                perc[0] = perc[0] + (perc[0] * (perc[1]/100));
            }else if(result.includes('-')){
                perc = result.split('-');
                perc[1] = perc[1].replace('%','');
                perc[1] = parseFloat(perc[1]);
                perc[0] = parseFloat(perc[0]);
                perc[0] = perc[0] - (perc[0] * (perc[1]/100));
            }else if(result.includes('/')){
                perc = result.split('/');
                perc[1] = perc[1].replace('%','');
                perc[1] = parseFloat(perc[1]);
                perc[0] = parseFloat(perc[0]);
                perc[0] = perc[0] /  (perc[1]/100);
            }else if(result.includes('x')){
                perc = result.split('x');
                perc[1] = perc[1].replace('%','');
                perc[1] = parseFloat(perc[1]);
                perc[0] = parseFloat(perc[0]);
                perc[0] = perc[0] * (perc[1]/100);
            }
            document.getElementById('resultado').innerHTML = perc[0];
            hist = hist + perc[0] + '\n';
            document.getElementById('campo').value = hist;
        }else if(result.includes('x')){
            var hist = document.getElementById("campo").value;
            hist = hist + result + '\n';
            document.getElementById('campo').value = hist;
            result = result.replace('x','*');
            document.getElementById('resultado').innerHTML = eval(result);
            hist = hist + eval(result) + '\n';
            document.getElementById('campo').value = hist;
        }else{
            var hist = document.getElementById("campo").value;
            console.log(hist);
            hist = hist + result + '\n';
            document.getElementById('campo').value = hist;
            document.getElementById('resultado').innerHTML = eval(result);
            hist = hist + eval(result) + '\n';
            document.getElementById('campo').value = hist;
        }
        
    }
    else{
        document.getElementById('resultado').innerHTML = "nada ...";
    }
    
}

function historico(str){
    if(str == 'h' || str == 'H'){
        var visible = document.getElementById('campo');
        var botoes = document.getElementsByClassName('btn');
                
        if (window.matchMedia("(min-width: 600px)").matches) {
            var botoes = document.getElementsByClassName('btn');
            /* a viewport tem pelo menos 600 pixels de largura */
            if(visible.style.display == 'block'){
                visible.style.display = 'none';
                for(var i=0; i<botoes.length; i++){
                    botoes[i].style.height = 90 +'px';
                }
    
            }else{
                visible.style.display= 'block';
                for(var i=0; i<botoes.length; i++){
                    botoes[i].style.height = 57 +'px';
                }
            }
        }else {
            /* a viewport menos que 600 pixels de largura */
            var tamCalc = document.getElementsByClassName('calculadora');
            if(visible.style.display == 'block'){
                visible.style.display = 'none';
                for(var i=0; i<tamCalc.length; i++){
                tamCalc[i].style.height = '370px';
                }
    
            }else{
                for(var i=0; i<tamCalc.length; i++){
                tamCalc[i].style.height = '530px';
                }
                visible.style.display= 'block';
                
            }
        }
    }
}
function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    console.log(key);
    return String.fromCharCode(key); 
}
document.onkeypress = function(evt) {
    var str = keyPressed(evt);

    if(str == 'c' || str == 'C'){
        clr();
    }
    else if(str == 'b' || str == 'B'){
        blackspace();
    }
    else if(str == '.' || str == '+' || str == '-' || str == 'x' || str == '/' || str == '%' || str >= 0 && str <= 9){
        insert(str);
    }
    else if(str == '='){
        calcular();
    }
    else if(str == 'h' || str == 'H'){
        historico(str);
    }
        
}