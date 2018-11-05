// Segunda Missão Estelar JS

/*
Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)
*/

var missao = 'Segunda Missão Estelar JS';
console.log(missao);
console.log('Tipo:', typeof missao);

var hiperespaco = new String('Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)');
console.log(hiperespaco.toString());
console.log('Tipo:', typeof hiperespaco);

var nomeCliente = 'Walerio';
var renda  = 8515.51;
var dataNascimento = new Date('1974-06-28');
var ativo = true;
function exibirDadosClienteVariaveis(){
    console.log('Cliente:', nomeCliente);
    console.log('Renda:', renda);
    console.log('Nascimento:', dataNascimento);
    console.log('Status:', ativo ? 'Sim' : 'Não');
}
exibirDadosClienteVariaveis();

var clienteArray = ['nomeCliente', 'walerio', 'renda', '8515.51', 'dataNascimento', 
                        '1974-06-28', 'ativo', 'true'];
function exibirDadosClienteArray(){
    for (var i of clienteArray)
        console.log(i);
}
exibirDadosClienteArray();

var clienteObject = {nomeCliente: 'Walerio', renda: 8515.51, dataNascimento: new Date('1974-06-28'), ativo: true};
function exibirDadosClienteObjeto(){
    for (var i in clienteObject){
        switch (i){
            case 'nomeCliente':
                console.log('Cliente:', clienteObject[i])
                break;
            case 'renda':
                console.log('Renda:', clienteObject[i])
                break;   
            case 'dataNascimento':
                console.log('Nascimento:', clienteObject[i])
                break;            
            case 'ativo':
                if (clienteObject[i])
                    console.log('Status: Sim')
                else 
                    console.log('Status: Não')
                break;            
        }
    }
}
exibirDadosClienteObjeto();

function retornaDataAtualFormatada(){
    var data = new Date();
    var dataString;
    if (data.getDate() > 9) 
        dataString = data.getDate();
    else {
        dataString = '0';
        dataString += data.getDate();
    }
    dataString += '/';
    if (data.getMonth()+1 > 9)
        dataString += data.getMonth()+1;
    else {
        dataString += '0';
        dataString += data.getMonth()+1;
    }
        
    dataString += '/'
    dataString += data.getFullYear();
    return dataString
}
console.log('Data:', retornaDataAtualFormatada());


var hiperEspacoRegExp = new RegExp('Estelar');
var textoMissao = 'Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)';
console.log('test:', hiperEspacoRegExp.test(textoMissao));
console.log('exec:', hiperEspacoRegExp.exec(textoMissao));

try {
    for (var decrescente = 30, iteracao = 1; decrescente >= 0; decrescente--, iteracao++){
        console.log('Decrescente:', decrescente);
        if(iteracao==29)
            throw new Error('Iteracao '+ iteracao +' com erro');
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Bloco Finally")
}

function recebeDadosFormBoot(objFormElementos){
    console.log('Tipo de objeto:', Object.prototype.toString.call(objFormElementos));
    var objDadosForm = new Object();
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emaiPromocionalChecklBoot = objFormElementos.emaiPromocionalChecklBoot.checked;
    objDadosForm.formaContatoRadioBoot = objFormElementos.formaContatoRadioBoot.value;
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    for (var i in objDadosForm) {
        console.log(i + ': ' + objDadosForm[i]);
    }

    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados){
    var formulario = document.querySelector("#formHtml");
    formulario.nomeHtml.value = objDados.nomeBoot;
    formulario.emailHtml.value = objDados.emailBoot;
    formulario.emaiPromocionalChecklHtml.checked = objDados.emaiPromocionalChecklBoot;
    formulario.formaContatoRadioHtml.value = objDados.formaContatoRadioBoot;
    formulario.estadoSelectHtml.value = objDados.estadoSelectBoot;
}