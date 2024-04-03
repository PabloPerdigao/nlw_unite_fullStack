// objeto javascript

/*
const participante = {
  nome: "Pablo Perdigão",
  email:"pabloperdigão@gmail.com" ,
  dataIncricao: new Date(2024, 2, 22, 19, 28 ),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}
*/

//array 

let participantes = [
  {
    nome: "Pablo Perdigão",
    email:"pabloperdigão@gmail.com" ,
    dataIncricao: new Date(2024, 2, 22, 19, 28 ),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },

  {
    nome: "Reginaldo Perdigão Ferreira",
    email: "regiperdigao@gmail.com",
    dataIncricao: new Date(2024, 5, 15, 11, 45),
    dataCheckIn: new Date(2024, 2, 9, 22, 7)
  },

  {
    nome: "Ana Silva",
    email: "anasilva@example.com",
    dataIncricao: new Date(2024, 1, 10, 8, 30),
    dataCheckIn: new Date(2024, 3, 2, 18, 15)
  },

  {
    nome: "João Santos",
    email: "joaosantos@example.com",
    dataIncricao: new Date(2024, 0, 5, 14, 20),
    dataCheckIn: new Date(2024, 3, 7, 10, 45)
  },

  {
    nome: "Maria Oliveira",
    email: "mariaoliveira@example.com",
    dataIncricao: new Date(2024, 3, 12, 9, 10),
    dataCheckIn: new Date(2024, 3, 20, 16, 30)
  },

  {
    nome: "Carlos Souza",
    email: "carlossouza@example.com",
    dataIncricao: new Date(2024, 2, 18, 17, 50),
    dataCheckIn: new Date(2024, 3, 5, 14, 0)
  },

  {
    nome: "Juliana Lima",
    email: "julianalima@example.com",
    dataIncricao: new Date(2024, 3, 1, 10, 5),
    dataCheckIn: new Date(2024, 3, 25, 9, 20)
  },

  {
    nome: "Rafaela Costa",
    email: "rafaelacosta@example.com",
    dataIncricao: new Date(2024, 2, 7, 13, 15),
    dataCheckIn: new Date(2024, 3, 15, 12, 35)
  },

  {
    nome: "Felipe Martins",
    email: "felipemartins@example.com",
    dataIncricao: new Date(2024, 0, 28, 20, 0),
    dataCheckIn: new Date(2024, 3, 10, 8, 10)
  },

  {
    nome: "Amanda Pereira",
    email: "amandapereira@example.com",
    dataIncricao: new Date(2024, 1, 8, 11, 55),
    dataCheckIn: new Date(2024, 3, 28, 15, 45)
  }
]

const criarNovoParticipante = (participantes) => {
  
}

const atualizarLista = (participantes) => {
  // substituir informação do HTML
  
  document
  .querySelector('tbody')
  .innerHTML = criarNovoParticipante(participantes[2])
}

atualizarLista(participantes)