function Select() {
    var input = document.getElementsByClassName()
}

function recur(resultSpeak,flag) {
    let Vetor = resultSpeak.toLowerCase().split(' ');
    let r = '';
    let aux = '';
    let auxValor = [];
    let auxAtr = [];
    let cont = 0;
    if(Vetor[0] == 'Adicionar' || Vetor[0] == 'adicionar'){  
        for(let i = Vetor.length-1; i >= 1; i--){
            if (Vetor[i] == 'texto' || Vetor[i] == 'Texto') {
                r = '' + r;
            }else{
                r = Vetor[i]+' ' + r ;
            } 
        }
    }else{
    if(Vetor[0] == 'estilo' || Vetor[0] == 'Stilo'|| Vetor[0] == 'stilo'|| Vetor[0] == 'Estilo'){  
        for(let i = Vetor.length-1; i >= 1; i--){
            if (Vetor[i] == 'fundo' || Vetor[i] == 'Fundo') {
                r = '\tbackground:' + r + ';\n';
            }else if (Vetor[i] == 'cor' || Vetor[i] == 'Cor') {
                r = '\tcolor:'  + r +';\n';
            }else if (Vetor[i] == 'largura' || Vetor[i] == 'Largura') {
                r = '\twidth:'  + r +';\n';
            }else if (Vetor[i] == 'altura' || Vetor[i] == 'Altura') {
                r = '\theight:'  + r +';\n';
            }else if (Vetor[i] == 'sombra' || Vetor[i] == 'Sombra') {
                r = '\tbox-shadow:'  + r +';\n';
            }else if (Vetor[i] == 'borda' || Vetor[i] == 'Borda') {
                r = '\tborder:'  + r +';\n';
            }else if (Vetor[i] == 'decoração' || Vetor[i] == 'Decoração') {
                r = '\ttext-decoration:'  + r +';\n';
            }else if (Vetor[i] == 'fonte' || Vetor[i] == 'font') {
                r = '\tfont-size:'  + r +';\n';
            }else if (Vetor[i] == 'identificador' || Vetor[i] == 'Identificador') {
                r = '#' + r;
            }else if (Vetor[i] == 'classe' || Vetor[i] == 'Classe') {
                r = '.' + r;
            }else if (Vetor[i] == 'marcador' || Vetor[i] == 'Marcador') {
                r = '' + r;
            }else{
                r = Vetor[i]+' { \n' + r + ' \n }';
            }
            
        }
    }else{
        
    if(Vetor[0] == 'criar' || Vetor[0] == 'Criar'|| Vetor[0] == 'cria'|| Vetor[0] == 'criai'){
    for (let i = Vetor.length-1; i >= 1; i--) {
        //comando tags
        if (Vetor[i] == 'div' || Vetor[i] == 'divi') {
            r = '<div' + aux + '>\n\t' + r + '\n</div>';
            aux = '';
        } else if (Vetor[i] == 'parágrafo') {
            r = '<p' + aux + '>\n\t' + r + '\n</p>';
            aux = '';
        } else if (Vetor[i] == 'quadro') {
            r = '<iframe' + aux + '>\n\t' + r + '\n</iframe>';
            aux = '';
        } else if (Vetor[i] == 'tabela') {
            r = '<table' + aux + '>\n\t' + r + '<tr>\n'+ '\t\t<td>\n' + '\t\t</td>\n'+'\t</tr>\n'+'\n</table>';
            aux = '';
        } else if (Vetor[i] == 'botão' || Vetor[i] == 'botao') {
            r = '<button' + aux + '>\t' + r + '</button>';
            aux = '';
        } else if (Vetor[i] == 'link') {
            r = '<a' + aux + '>\n\t' + r + '\n</a>';
            aux = '';
        } else if (Vetor[i] == 'h1'|| Vetor[i] == 'H1') {
            r = '<h1' + aux + '>\n\t' + r + '\n</h1>';
            aux = '';
        } else if (Vetor[i] == 'h2'|| Vetor[i] == 'H2') {
            r = '<h2' + aux + '>\n\t' + r + '\n</h2>';
            aux = '';
        } else if (Vetor[i] == 'h3'|| Vetor[i] == 'H2') {
            r = '<h3' + aux + '>\n\t' + r + '\n</h3>';
            aux = '';
        } else if (Vetor[i] == 'h4'|| Vetor[i] == 'H4') {
            r = '<h4' + aux + '>\n\t' + r + '\n</h4>';
            aux = '';
        } else if (Vetor[i] == 'h5' || Vetor[i] == 'H5') {
            r = '<h5' + aux + '>\n\t' + r + '\n</h5>';
            aux = '';
        } else if (Vetor[i] == 'h6'|| Vetor[i] == 'H6') {
            r = '<h6' + aux + '>\n\t' + r + '\n</h6>';
            aux = '';
        } else if (Vetor[i] == 'contato'|| Vetor[i] == 'Contato') {
            r = '<address' + aux + '>\n\t' + r + '\n</address>';
            aux = '';
        } else if (Vetor[i] == 'menu'|| Vetor[i] == 'Menu') {
            r = '<nav' + aux + '>\n\t' + r + '\n</nav>';
            aux = '';
        } else if (Vetor[i] == 'lista'|| Vetor[i] == 'Lista') {
            r = '<ul' + aux + '>\n\t' + r + '\n</ul>';
            aux = '';
        } else if (Vetor[i] == 'caixa'|| Vetor[i] == 'Caixa') {
            r = '<textarea' + aux + '>\n\t' + r + '\n</textarea>';
            aux = '';
        } else if (Vetor[i] == 'imagem') {
            r = '<img' + aux + r + '>';
            aux = '';
        } else if (Vetor[i] == 'entrada') {
            r = '<input' + aux + r + '>';
            aux = '';
        } else if (Vetor[i] == 'frase') {
            r = '<label' + aux + '>\n\t' + r + '\n</label>';
            aux = '';
        } else if (Vetor[i] == 'html'|| Vetor[i] == 'HTML') {
            r = '<html' + aux + '>\n\t' + r + '\n</html>';
            aux = '';
        } else if (Vetor[i] == 'corpo'|| Vetor[i] == 'Corpo') {
            r = '<body' + aux + '>\n\t' + r + '\n</body>';
            aux = '';
        } else if (Vetor[i] == 'cabeça'|| Vetor[i] == 'Cabeça') {
            r = '<head' + aux + '>\n\t' + r + '\n</head>';
            aux = '';
        } else if (Vetor[i] == 'metadados'|| Vetor[i] == 'Metadados') {
            r = '<meta' + aux + '/>\n\t' + r + '\n';
            aux = '';
        } else if (Vetor[i] == 'metalink'|| Vetor[i] == 'metalinki') {
            r = '<link' + aux + '>' + r + '\n';
            aux = '';
        } else if (Vetor[i] == 'principal'|| Vetor[i] == 'Principal') {
            r = '<main' + aux + '>\n\t' + r + '\n</main>';
            aux = '';
        } else if (Vetor[i] == 'script'|| Vetor[i] == 'Script') {
            r = '<script' + aux + '>\n\t' + r + '\n</script>';
            aux = '';
        } else if (Vetor[i] == 'rodapé') {
            r = '<footer' + aux + '>\n\t' + r + '\n</footer>';
            aux = '';
        } else if (Vetor[i] == 'comentário' || Vetor[i] == 'comentario' || Vetor[i] == 'Comentário' || Vetor[i] == 'Comentario') {
            r = '<!--' + aux + '\t' + r + '-->';
            aux = '';
        } else if (Vetor[i] == 'áudio' || Vetor[i] == 'audio') {
            r = '<audio controls> \n <source'+ aux + '>\t' + r + '\n</ audio>';
            aux = '';
        } else if (Vetor[i] == 'vídeo' || Vetor[i] == 'video') {
            r = '<video controls> \n <source'+ aux + '>\t' + r + '\n</ video>';
            aux = '';
        } else if (Vetor[i] == 'estilo'|| Vetor[i] == 'Stilo') {
            r = '<style' + aux + '>\n\t' + r + '\n</style>';
            aux = '';
        } else if (Vetor[i] == 'formulário') {
            r = '<form' + aux + '>\n\t' + r + '\n</form>';
            aux = '';
        }
        //comando auxiliar 
        else if (Vetor[i] == 'com') {
            for (let j = 0; j < cont; j++) {
                aux += ' ' + auxAtr[j] + '="' + auxValor[j] + '"';
            }
            cont = 0;
            auxValor = [];
            auxAtr = [];
        }
        //comando atributo 
        else if (Vetor[i] == 'classe') {
            auxAtr[cont] = 'class';
            cont++;
        } else if (Vetor[i] == 'identificador') {
            auxAtr[cont] = 'id';
            cont++;
        } else if (Vetor[i] == 'descrição') {
            auxAtr[cont] = 'placeholder';
            cont++;
        } else if (Vetor[i] == 'caminho') {
            auxAtr[cont] = 'src';
            cont++;
        } else if (Vetor[i] == 'tipo') {
            auxAtr[cont] = 'type';
            cont++;
        } else if (Vetor[i] == 'ação') {
            auxAtr[cont] = 'action';
            cont++;
        } else if (Vetor[i] == 'estilo') {
            auxAtr[cont] = 'style';
            cont++;
        } else if (Vetor[i] == 'linguagem') {
            auxAtr[cont] = 'lang';
            cont++;
        } else if (Vetor[i] == 'contente' || Vetor[i] == 'content') {
            auxAtr[cont] = 'content';
            cont++;
        } else if (Vetor[i] == 'nome' || Vetor[i] == 'Nome') {
            auxAtr[cont] = 'name';
            cont++;
        } else if (Vetor[i] == 'charset' || Vetor[i] == 'chá set' || Vetor[i] == 'chá sete' || Vetor[i] == 'char sete' || Vetor[i] == 'char seti') {
            auxAtr[cont] = 'charset';
            cont++;
        } else if (Vetor[i] == 'referência') {
            auxAtr[cont] = 'href';
            cont++;
        } else if (Vetor[i] == 'borda') {
            auxAtr[cont] = 'border';
            cont++;
        } else if (Vetor[i] == 'síncrona') {
            auxAtr[cont] = 'async';
            cont++;
        } else if (Vetor[i] == 'réu' || Vetor[i] == 'reu' || Vetor[i] == 'rel' || Vetor[i] == 'Léo' || Vetor[i] == 'léo') {
            auxAtr[cont] = 'rel';
            cont++;
        } else {
            auxValor[cont] = Vetor[i];
        }
        //comando css
        }
    }
}
    }
    if(flag && r == '')
        alert('Comando não encontrado.')
    return r;
}
(function() {
    var speakBtn = document.querySelector('#speakbt');
    var resultSpeaker = document.querySelector('#resultSpeak');
    var resultSpeaker2 = document.querySelector('#resultSpeak2');

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var myRecognition = new SpeechRecognition();
        myRecognition.lang = 'pt-BR';

        speakBtn.addEventListener('click', function() {
            try {
                myRecognition.start();
                resultSpeaker.innerHTML = "Estou te ouvindo...";
                
            } catch (erro) {
                alert('erro: ' + erro.message);
            }

            run(); }, false);

        myRecognition.addEventListener('result', function(evt) {
            var resultSpeak = evt.results[0][0].transcript;
            var GetVl = '';
            var input = document.getElementsByClassName("resultSpeak");
            gerar(resultSpeak);
            console.log(resultSpeak);
            resultSpeaker.innerHTML = resultSpeak;
            
            GetVl = editor.getValue();
            let cursor = editor.cursorCoords();
            console.log(cursor);
            switch (resultSpeak.toLowerCase()) {
                //comando layout
                case 'modo escuro':
                    editor.setOption("theme", "isotope");
                    break;
                case 'modo claro':
                    editor.setOption("theme", "eclipse");
                    break;
                    //comando estrutura
                case 'estrutura html':
                    editor.replaceSelection("\n<!DOCTYPE html>\n\n<html lang='pt-br'>\n\n<head>\n\n    <title>Default Struct HTML</title>\n\n</head>\n\n<body>\n\n    <div>\n\n    <h1>Olá Mundo!</h1>\n\n    </div>\n\n</body>\n\n</html>");
                    break;
                case 'estrutura bootstrap':
                    editor.replaceSelection("<!DOCTYPE html> \n \n \n<html lang='pt-br'> \n \n \n<head> \n \n \n <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We' crossorigin='anonymous'> \n \n \n    <meta charset='utf-8'> \n \n \n    <meta http-equiv='X-UA-Compatible' content='IE=edge'>\n \n \n    <meta name='viewport' content='width=device-width, initial-scale=1'> \n \n \n    <title>Bootstrap 101 Template</title>\n \n \n    </head>\n \n \n<body>\n \n \n    <h1>Olá, mundo!</h1>\n \n \n    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script>\n \n \n    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js integrity='sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj'crossorigin='anonymous''></script>\n \n \n</body>\n \n \n</html>");
                    break;
                    //comando remover
                case 'remover tudo':
                    editor.setValue("");
                    break;
                case 'remover seleção':
                    editor.replaceSelection("");
                    break;
                case 'quebrar linha':
                    editor.replaceSelection("\n");
                    break;
                case 'baixar código':
                    salvar();
                    break;
                    //nivel 2 da aplicação
                default:
                    editor.replaceSelection(recur(resultSpeak,true));
                    break;
            }
            run();
            MudarCorDenovo();
        }, false);

        
        myRecognition.addEventListener('error', function() {
            resultSpeaker.innerHTML = "Não entendi muito bem!";
        }, false);
    } else {
        resultSpeaker.innerHTML = "Seu navegador não suporta a tecnologia!";
    }
})();