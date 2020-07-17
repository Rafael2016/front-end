//Methodo Assign - Juntar 2 objetos

const obj1 = {a:1 ,b:2};
const obj2 = {b: 4, e:5, a:2};
const novo = Object.assign({}, a , d));
console.log(novo);

//Map,Reduce e filter
dados = [{
    nome:'Bill', idade:3, especie:'dog'},{
    nome:'Rex', idade:10, especie:'dog'},{
    nome:'Fiona', idade:10, especie:'cat'
}];
let dogs        = dados.filter((dado)=> dado.especie ==='dog');
let idadeReal   = dogs.map((dog)=>({nome:dog.nome, idade:dog.idade * 7}));
console.log(dogs);
console.log(idadeReal); 

// ###INTERANDO OBJETO JSON DE FORMA DINAMICA,SEM SABER AS PROPRIEDADES
		//Objeto JSON	
for(key in data){	
	//Pega as chaves do objeto
    if(typeof data[key] !=='object'){
    
        console.log("Chave: " + key + " - Valor: " + data[key]);

    }else{
    	//Loop para pegar os valores
        data[key].forEach(function(value) {
	      for (key2 in value) {
	        console.log("Chave: " + key2 + " - Valor: " + value[key2]);
	      }
    }); 


    }

}

## Validação Vázio atribuição

var a = undefined;

var b = a != undefined ? a : 'vazia';
console.log(a);

## namespace POO 

var dados = (function)

## Gerar elemento HTML

const element        = document.getElementById('container-justificativa');
        const div            = document.createElement('div');
        
        div.innerHTML      = `<div class="jumbotron jumbotron-fluid" id="box-just-`+atividade+`">
                                <div class="container">
                                <div class="col-sm-2 col-md-2 col-xs-6">
                                    <div class="form-group">
                                        <label for="justificativaChapa">Chapa</label>
                                        <input type="text" class="form-control" name="justificativaChapa_`+
                                        atividade+`" id="justificativaChapa_`+atividade+`">
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label for="justificativaNome">Nome</label>
                                        <input type="text" class="form-control" name="justificativaNome_`+atividade+`" id="justificativaNome_`+atividade+`">
                                    </div>
                                </div>
                                <div class="col-sm-4 col-md-4 col-xs-6">
                                    <div class="form-group">
                                        <label for="nivel">Nível Processo</label>
                                        <input type="text" class="form-control" name="nivel_`+atividade+`" id="nivel_`+atividade+`">
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12">
                                    <label for="justificativ" class="control-label">
                                        <strong>Justificativa:</strong>
                                    </label>
                                    <textarea class="form-control" name="justificativa_`+atividade+`" cols="50" rows="5">                                                
                                    </textarea>
                                </div>
                            </div>`;

        element.appendChild(div);

### SPLIT seperar string

## O separador também pode ser uma expressão regular.

var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';
names.split(/\s*;\s*/)

 
 ##FORMATA 

 //Moeda Local 
 parseFloat(sd).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});

/* ##Pegar data da tag */

var idCentro = htmlElement.getAttribute('data-modal');

/* ## Somar Valores do CheckBox selecionados */

 $('.ted').change(function (e) {
            var total = $('input[class="ted"]:checked').get().reduce(function (tot, el) {
                let numberf = el.getAttribute('data-valor').toString().replace('.', '').replace(',', '.');
                return (parseFloat(tot) + parseFloat(numberf)).toFixed(2);
            }, 0);

            $('#vlrTotal').val(moneyBr(total));
        });
/* ## SetTimeout, SetInterval */

const mostrar = () =>{
    alert('SetTimeout');
};
setTimeout(mostrar, 3000);

const testeInterval = setInterval (() => {console.log('Teste');},1000);
/*Cancela setInterval*/ 
setTimeout(()=>{clearInterval(testeInterval)},1000);



