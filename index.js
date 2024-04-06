// objeto javascript

/*
const participante = {
  nome: "Pablo Perdigão",
  email:"pabloperdigão@gmail.com" ,
  dataInscricao: new Date(2024, 2, 22, 19, 28 ),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}
*/

let participantes = [
  {
    nome: "Pablo Perdigão",
    email: "pablo@gmail.com",
    dataInscricao: new Date(2024, 3, 20, 19, 28),
    dataCheckIn: new Date(2024, 1, 4, 21, 12)
  },

  {
    nome: "Reginaldo Perdigão Ferreira",
    email: "regiperdigao@gmail.com",
    dataInscricao: new Date(2024, 5, 13, 11, 45),
    dataCheckIn: new Date(2024, 2, 7, 22, 7)
  },

  {
    nome: "Ana Silva",
    email: "anasilva@example.com",
    dataInscricao: new Date(2024, 1, 8, 8, 30),
    dataCheckIn: new Date(2024, 3, 1, 18, 15)
  },

  {
    nome: "João Santos",
    email: "joaosantos@example.com",
    dataInscricao: new Date(2024, 0, 2, 14, 20),
    dataCheckIn: new Date(2024, 3, 5, 10, 45)
  },

  {
    nome: "Maria Oliveira",
    email: "mariaoliveira@example.com",
    dataInscricao: new Date(2024, 3, 10, 9, 10),
    dataCheckIn: new Date(2024, 3, 21, 16, 30)
  },

  {
    nome: "Carlos Souza",
    email: "carlossouza@example.com",
    dataInscricao: new Date(2024, 2, 16, 17, 50),
    dataCheckIn: new Date(2024, 3, 2, 14, 0)
  },

  {
    nome: "Juliana Lima",
    email: "julianalima@example.com",
    dataInscricao: new Date(2024, 2, 29, 10, 5),
    dataCheckIn: new Date(2024, 3, 26, 9, 20)
  },

  {
    nome: "Rafaela Costa",
    email: "rafaelacosta@example.com",
    dataInscricao: new Date(2024, 2, 5, 13, 15),
    dataCheckIn: new Date(2024, 3, 14, 12, 35)
  },

  {
    nome: "Felipe Martins",
    email: "felipemartins@example.com",
    dataInscricao: new Date(2024, 0, 26, 20, 0),
    dataCheckIn: new Date(2024, 3, 12, 8, 10)
  },

  {
    nome: "Amanda Pereira",
    email: "amandapereira@example.com",
    dataInscricao: new Date(2024, 1, 6, 11, 55),
    dataCheckIn: new Date(2024, 3, 30, 15, 45)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()) 
  .to(participante.dataInscricao)

  const dataCheckIn = dayjs(Date.now()) 
  .to(participante.dataCheckIn)
  
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
  </tr>
  `       
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)