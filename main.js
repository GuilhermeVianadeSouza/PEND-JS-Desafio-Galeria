'use strict'

const imagens = [
    {
        nome: 'Peixe acara-oscar',
        url: './img/acara-acu.jpg',
    },
    {
        nome: 'peixe acara-banderensse',
        url: './img/acara-bandeira.webp'
    },
    {
        nome: 'peixe acara-camaleao',
        url: './img/acara-camaleao.jpg'
    },
    {
        nome: 'peixe acara-congo',
        url: './img/acara-congo.webp'
    },
    {
        nome: 'peixe acara-disco',
        url: './img/acara-disco.jpg'
    },
    {
        nome: 'peixe acara-severum',
        url: './img/acara-severum.webp'
    },
    {
        nome: 'peixe acara-joia',
        url: './img/acara-joia.png'
    },
    {
        nome: 'peixe acara-pixuna',
        url: './img/acara-pixuna.jpg'
    },
    {
        nome: 'peixe acara-festivo',
        url: '/img/acara-festivo.webp'
    }
]

function criarImagem(srcImagem){
    const galeria = document.getElementById('galeria')
    //Criei um container/div para conter os elementos de forma melhor
    const container = document.createElement('div')

    const imagem = document.createElement('img')
    imagem.src = srcImagem.url
    //Aqui para atribuir o nome
    imagem.alt = srcImagem.nome

    const legenda = document.createElement('h2')
    legenda.textContent = srcImagem.nome
    //adiciona um filho para a div principal, sem mexer no html
    galeria.appendChild(imagem)
    galeria.appendChild(legenda)

    galeria.appendChild(container)
}

function carregarImagens (){

    let contador = 0
    const limite = imagens.length
    while (contador <= limite - 1){
    //criacao de uma tag/ elemento, sem alterar o hmtl, só altero como o chrome ver minha página
    
    contador++
    }

    //Percorre array, elemento por elemento.
    imagens.forEach (criarImagem)

}

carregarImagens()