let vitoriaPlay = 0;
let vitoriaCpu = 0;
let quemComeca = 1;
let jogadaCpu;
let jogada;
let quemJoga = 0;// 0 = 0 jogador // 1 = cpu
let tabuleiro = [];
let verificar;
let jogo = [];
let nivel; // Nivel do jogo
let jogando = true;
let telaInicio = document.getElementById('tela2');
let telaJogo = document.getElementById('tela3');
let play = document.querySelector('.PT1');
let cpu = document.querySelector('.PT2');
let df = document.getElementById('barra');
let botao = document.getElementById('bt');

function cpuJoga() {
    if (jogando) {
        let l = 0;
        let c = 0;
        if (nivel == 1) {
            do {
                l = Math.round(Math.random() * 2);
                c = Math.round(Math.random() * 2);
            } while (jogo[l][c] != '');
            jogo[l][c] = 'O';
        }

        else if (nivel == 2) {
            //Nivel 2
            //Defesa
            // linha 1
            if ((jogo[0][0] == "O") && (jogo[0][1] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O";
            } else if ((jogo[0][0] == "O") && (jogo[0][2] == "O") && (jogo[0][1] == "")) {
                jogo[0][1] = "O";
            } else if ((jogo[0][1] == "O") && (jogo[0][2] == "O") && (jogo[0][0] == "")) {
                jogo[0][0] = "O";
            } else
                // jogadas linha 2 
                if ((jogo[1][0] == "O") && (jogo[1][1] == "O") && (jogo[1][2] == "")) {
                    jogo[1][2] = "O";
                } else if ((jogo[1][0] == "O") && (jogo[1][2] == "O") && (jogo[1][1] == "")) {
                    jogo[1][1] = "O";
                } else if ((jogo[1][1] == "O") && (jogo[1][2] == "O") && (jogo[1][0] == "")) {
                    jogo[1][0] = "O";
                } else
                    // jogadas linha 3
                    if ((jogo[2][0] == "O") && (jogo[2][1] == "O") && (jogo[2][2] == "")) {
                        jogo[2][2] = "O";
                    } else if ((jogo[2][0] == "O") && (jogo[2][2] == "O") && (jogo[2][1] == "")) {
                        jogo[2][1] = "O";
                    } else if ((jogo[2][1] == "O") && (jogo[2][2] == "O") && (jogo[2][0] == "")) {
                        jogo[2][0] = "O";
                    } else
                        // jogadas coluna 1
                        if ((jogo[0][0] == "O") && (jogo[1][0] == "O") && (jogo[2][0] == "")) {
                            jogo[2][0] = "O";
                        } else if ((jogo[0][0] == "O") && (jogo[2][0] == "O") && (jogo[1][0] == "")) {
                            jogo[1][0] = "O";
                        } else if ((jogo[1][0] == "O") && (jogo[2][0] == "O") && (jogo[0][0] == "")) {
                            jogo[0][0] = "O";
                        } else
                            // jogadas coluna 2
                            if ((jogo[0][1] == "O") && (jogo[1][1] == "O") && (jogo[2][1] == "")) {
                                jogo[2][1] = "O";
                            } else if ((jogo[0][1] == "O") && (jogo[2][1] == "O") && (jogo[1][1] == "")) {
                                jogo[1][1] = "O";
                            } else if ((jogo[1][1] == "O") && (jogo[2][1] == "O") && (jogo[0][1] == "")) {
                                jogo[0][1] = "O";
                            } else
                                // jogadas coluna 3
                                if ((jogo[0][2] == "O") && (jogo[1][2] == "O") && (jogo[2][2] == "")) {
                                    jogo[2][2] = "O";
                                } else if ((jogo[0][2] == "O") && (jogo[2][2] == "O") && (jogo[1][2] == "")) {
                                    jogo[1][2] = "O";
                                } else if ((jogo[1][2] == "O") && (jogo[2][2] == "O") && (jogo[0][2] == "")) {
                                    jogo[0][2] = "O";
                                } else
                                    // jogadas diagonal 1
                                    if ((jogo[0][0] == "O") && (jogo[1][1] == "O") && (jogo[2][2] == "")) {
                                        jogo[2][2] = "O";
                                    } else if ((jogo[0][0] == "O") && (jogo[2][2] == "O") && (jogo[1][1] == "")) {
                                        jogo[1][1] = "O";
                                    } else if ((jogo[1][1] == "O") && (jogo[2][2] == "O") && (jogo[0][0] == "")) {
                                        jogo[0][0] = "O";
                                    } else
                                        // jogadas diagonal 2
                                        if ((jogo[0][2] == "O") && (jogo[1][1] == "O") && (jogo[2][0] == "")) {
                                            jogo[2][0] = "O";
                                        } else if ((jogo[0][2] == "O") && (jogo[2][0] == "O") && (jogo[1][1] == "")) {
                                            jogo[1][1] = "O";
                                        } else if ((jogo[2][0] == "O") && (jogo[1][1] == "O") && (jogo[0][2] == "")) {
                                            jogo[0][2] = "O";
                                        } else
                                            // Defesa
                                            // jogadas linha 1
                                            if ((jogo[0][0] == "X") && (jogo[0][1] == "X") && (jogo[0][2] == "")) {
                                                jogo[0][2] = "O";
                                            } else if ((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")) {
                                                jogo[0][1] = "O";
                                            } else if ((jogo[0][1] == "X") && (jogo[0][2] == "X") && (jogo[0][0] == "")) {
                                                jogo[0][0] = "O";
                                            } else
                                                // Jogadas linha 2
                                                if ((jogo[1][0] == "X") && (jogo[1][1] == "X") && (jogo[1][2] == "")) {
                                                    jogo[1][2] = "O";
                                                } else if ((jogo[1][0] == "X") && (jogo[1][2] == "X") && (jogo[1][1] == "")) {
                                                    jogo[1][1] = "O";
                                                } else if ((jogo[1][1] == "X") && (jogo[1][2] == "X") && (jogo[1][0] == "")) {
                                                    jogo[1][0] = "O";
                                                } else
                                                    // jogadas linha 3
                                                    if ((jogo[2][0] == "X") && (jogo[2][1] == "X") && (jogo[2][2] == "")) {
                                                        jogo[2][2] = "O";
                                                    } else if ((jogo[2][0] == "X") && (jogo[2][2] == "X") && (jogo[2][1] == "")) {
                                                        jogo[2][1] = "O";
                                                    } else if ((jogo[2][1] == "X") && (jogo[2][2] == "X") && (jogo[2][0] == "")) {
                                                        jogo[2][0] = "O";
                                                    } else
                                                        // jogadas coluna 1
                                                        if ((jogo[0][0] == "X") && (jogo[1][0] == "X") && (jogo[2][0] == "")) {
                                                            jogo[2][0] = "O";
                                                        } else if ((jogo[0][0] == "X") && (jogo[2][0] == "X") && (jogo[1][0] == "")) {
                                                            jogo[1][0] = "O";
                                                        } else if ((jogo[1][0] == "X") && (jogo[2][0] == "X") && (jogo[0][0] == "")) {
                                                            jogo[0][0] = "O";
                                                        } else
                                                            // jogadas coluna 2
                                                            if ((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")) {
                                                                jogo[2][1] = "O";
                                                            } else if ((jogo[0][1] == "X") && (jogo[2][1] == "X") && (jogo[1][1] == "")) {
                                                                jogo[1][1] = "O";
                                                            } else if ((jogo[1][1] == "X") && (jogo[2][1] == "X") && (jogo[0][1] == "")) {
                                                                jogo[0][1] = "O";
                                                            } else
                                                                // jogadas coluna 3
                                                                if ((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][2] == "")) {
                                                                    jogo[2][2] = "O";
                                                                } else if ((jogo[0][2] == "X") && (jogo[2][2] == "X") && (jogo[1][2] == "")) {
                                                                    jogo[1][2] = "O";
                                                                } else if ((jogo[1][2] == "X") && (jogo[2][2] == "X") && (jogo[0][2] == "")) {
                                                                    jogo[0][2] = "O";
                                                                } else
                                                                    //jogadas diagnol 1
                                                                    if ((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")) {
                                                                        jogo[2][2] = "O";
                                                                    } else if ((jogo[0][0] == "X") && (jogo[2][2] == "X") && (jogo[1][1] == "")) {
                                                                        jogo[1][1] = "O";
                                                                    } else if ((jogo[1][1] == "X") && (jogo[2][2] == "X") && (jogo[0][0] == "")) {
                                                                        jogo[0][0] = "O";
                                                                    } else
                                                                        // jogadas diagnol 2
                                                                        if ((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][0] == "")) {
                                                                            jogo[2][0] = "O";
                                                                        } else if ((jogo[0][2] == "X") && (jogo[2][0] == "X") && (jogo[1][1] == "")) {
                                                                            jogo[1][1] = "O";
                                                                        } else if ((jogo[2][0] == "X") && (jogo[1][1] == "X") && (jogo[0][2] == "")) {
                                                                            jogo[0][2] = "O";
                                                                        } else {
                                                                            if (jogada < 8) {
                                                                                do {
                                                                                    l = Math.round(Math.random() * 2);
                                                                                    c = Math.round(Math.random() * 2);
                                                                                } while (jogo[l][c] != "")
                                                                                jogo[l][c] = "O";
                                                                            } else {
                                                                                for (let l = 0; l < 3; l++) {
                                                                                    for (let c = 0; c < 3; c++) {
                                                                                        if (jogo[l][c] == '') {
                                                                                            jogo[l][c] = 'O';
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
        }
    }
    verificar = verificaVitoria();
    if (verificar != '') {
        alert(verificar + ' Venceu');
        if (verificar == 'X') {
            vitoriaPlay++;
            play.innerHTML = vitoriaPlay;
        } else if (verificar == 'O') {
            vitoriaCpu++;
            cpu.innerHTML = vitoriaCpu;
        }
        jogando = false;
        setTimeout(() => {
            inicio();
        }, 400);
    }
    atualizaTabuleiro();
    quemJoga = 0;
}

function verificaVitoria() {
    let l, c;
    ////// Linhas
    for (l = 0; l < 3; l++) {
        if ((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])) {
            return jogo[l][0];
        }
    }
    // Colunas
    for (c = 0; c < 3; c++) {
        if ((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])) {
            return jogo[0][c];
        }
    }
    //Diagonais
    if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])) {
        return jogo[0][0];
    }
    if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])) {
        return jogo[0][2];
    }

    return '';
}

function jogar(p) {
    if ((jogando) && (quemJoga == 0)) {
        switch (p) {
            case 1:
                if (jogo[0][0] == "") {
                    jogo[0][0] = 'X';
                    quemJoga = 1;
                }
                break;
            case 2:
                if (jogo[0][1] == "") {
                    jogo[0][1] = 'X';
                    quemJoga = 1;
                }
                break;
            case 3:
                if (jogo[0][2] == "") {
                    jogo[0][2] = 'X';
                    quemJoga = 1;
                }
                break;
            case 4:
                if (jogo[1][0] == "") {
                    jogo[1][0] = 'X';
                    quemJoga = 1;
                }
                break;
            case 5:
                if (jogo[1][1] == "") {
                    jogo[1][1] = 'X';
                    quemJoga = 1;
                }
                break;
            case 6:
                if (jogo[1][2] == "") {
                    jogo[1][2] = 'X';
                    quemJoga = 1;
                }
                break;
            case 7:
                if (jogo[2][0] == "") {
                    jogo[2][0] = 'X';
                    quemJoga = 1;
                }
                break;
            case 8:
                if (jogo[2][1] == "") {
                    jogo[2][1] = 'X';
                    quemJoga = 1;
                }
                break;
            case 9:
                if (jogo[2][2] == "") {
                    jogo[2][2] = 'X';
                    quemJoga = 1;
                }
                break;

            default:
                break;
        }
        if (quemJoga == 1) {
            atualizaTabuleiro();
            verificar = verificaVitoria();
            if (verificar != '') {
                //alert(verifica + ' Venceu');
                jogando = false;
            }
            cpuJoga();
        }
    }
}

function atualizaTabuleiro() {
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            if (jogo[l][c] == 'X') {
                tabuleiro[l][c].style.backgroundImage = "url('img/cruz.png')";
                tabuleiro[l][c].style.cursor = 'pointer';
            } else if (jogo[l][c] == 'O') {
                tabuleiro[l][c].style.backgroundImage = "url('img/circulo.png')";;
                tabuleiro[l][c].style.cursor = 'pointer';
            } else {
                tabuleiro[l][c].innerHTML = "";
                tabuleiro[l][c].style.cursor = 'pointer';
            }
        }
    }
}

function inicio() {

    jogando = true;
    jogada = 0;
    jogo = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    tabuleiro = [
        [document.getElementById('p1'), document.getElementById('p2'), document.getElementById('p3')],
        [document.getElementById('p4'), document.getElementById('p5'), document.getElementById('p6')],
        [document.getElementById('p7'), document.getElementById('p8'), document.getElementById('p9')]

    ];
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            tabuleiro[l][c].style.backgroundImage = 'none';
        }
    }
    atualizaTabuleiro();
    if (quemComeca == 1) {
        quemComeca = 0;
        quemJoga = quemComeca;
        document.getElementById('sp').innerHTML = 'PLAY';
    } else {
        quemComeca = 1;
        quemJoga = quemComeca;
        document.getElementById('sp').innerHTML = 'CPU';
        cpuJoga();
    }
}

function CC() {
    bt.style.display = "none";
    df.style.display = "flex";
    document.getElementById('dificuldade').style.display = "block";
}

function df1() {
    nivel = 1;
    document.getElementById('tela2').style.display = "none";
    document.getElementById('tela3').style.display = "flex";
    inicio();

}

function df2() {
    nivel = 2;
    document.getElementById('tela2').style.display = "none";
    document.getElementById('tela3').style.display = "flex";
    inicio();

}

function passar() {
    let a = document.querySelectorAll('.niveis');
    a[0].style.position = "relative";
    a[0].style.left = '0';
    a[1].style.position = "relative";
    a[1].style.left = '0';
}
function voltar() {
    let a = document.querySelectorAll('.niveis');
    a[0].style.position = "relative";
    a[0].style.left = '-150px';
    a[1].style.position = "relative";
    a[1].style.left = '-150px';
}