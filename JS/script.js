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

//creo array di oggetti con info membri del team
let teamMembers =[
    {
        name: `Wayne Barnett`,
        role: `Founder & Ceo`, 
        img: `wayne-barnett-founder-ceo.jpg`
    },
    {
        name: `Angela Caroll`,
        role: `Chief Editor`, 
        img: `angela-caroll-chief-editor.jpg`
    },
    {
        name: `Walter Gordon`,
        role: `Office Manager`, 
        img: `walter-gordon-office-manager.jpg`
    },
    {
        name: `Angela Lopez`,
        role: `Social Media Manager`, 
        img: `angela-lopez-social-media-manager.jpg`
    },
    {
        name: `Scott Estrada`,
        role: `Developer`, 
        img: `scott-estrada-developer.jpg`
    },
    {
        name: `Barbara Ramos`,
        role: `Graphic Designer`, 
        img: `barbara-ramos-graphic-designer.jpg`
    }
    
]

let membersContainer = document.querySelector(`#name-container`);

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//creo un ciclo for che scorre l'array
for (let i = 0; i < teamMembers.length; i++){
    //salvare ogni indice in una variabile
    let teamMembersIndex = teamMembers[i];
    console.log("Nome: " + teamMembersIndex.name);
    console.log("Ruolo: " + teamMembersIndex.role);
    console.log("img url: " + teamMembersIndex.img);

}

// Stampare le stesse informazioni su DOM sottoforma di stringhe
//creare un ciclo for che stampa in pagina le info dei membri
for(let i = 0; i < teamMembers.length; i++){
    let teamMembersIndex = teamMembers[i];
    //aggiungere a membersContainer il mio snippett di codice con i dati dei membri
    membersContainer.innerHTML += `
        <div>
            <h4>${teamMembersIndex[`name`]}</h4>
            <p>${teamMembersIndex[`role`]}</p>
            <p>${teamMembersIndex[`img`]}</p>
        </div>
    `
}










//---------------
//   FUNCTIONS
//---------------