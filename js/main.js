// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

const dataContainer = document.getElementById("data-container");
const cardContainer = document.getElementById("card-container");

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];

for (const employe in team) {
  const data =
    team[employe].name + " " + team[employe].role + " " + team[employe].photo;
  console.log(
    team[employe].name + " " + team[employe].role + " " + team[employe].photo
  );
  dataContainer.innerHTML += `
  <table class="table">
  <tbody>
    <tr>
      <td class= 'w-25'>${team[employe].name}</td>
      <td>${team[employe].role}</td>
      <td class= 'w-25'>
        <img src='./img/${team[employe].photo}'>
      </td>
    </tr>`;

  cardContainer.innerHTML += `
    <div class="card mb-4" style="width: 18rem;">
        <img src='./img/${team[employe].photo}'>
        <div class="card-body">
            <h5 class="card-title">${team[employe].name}</h5>
            <p class="card-text">${team[employe].role}</p>
  </div>
</div>
    `;
}
