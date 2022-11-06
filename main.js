function creatGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2> ${date} <span> ${day} </span></h2>
    <ul>
       ${games}
    </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML =
    createCard("20/11", "domingo", creatGame("catar", "13:00", "equador")) +
    createCard("21/11", "segunda", creatGame("inglaterra", "10:00", "ira") + creatGame("senegal", "13:00", "holanda") + creatGame("estados-unidos", "16:00", "gales")) +
    createCard("22/11", "terça", creatGame("argentina", "07:00", "arabia-saudita") + creatGame("dinamarca", "10:00", "tunisia") + creatGame("mexico", "13:00", "polonia") + creatGame("franca", "16:00", "australia")) +
    createCard("23/11", "quarta", creatGame("marrocos", "07:00", "croacia") + creatGame("alemanha", "10:00", "japao") + creatGame("espanha", "13:00", "costa-rica") + creatGame("belgica", "16:00", "canada")) +
    createCard("24/11", "quinta", creatGame("suica", "07:00", "camaroes") + creatGame("uruguai", "10:00", "coreia-do-sul") + creatGame("portugal", "13:00", "gana") + creatGame("brasil", "16:00", "servia")) +
    createCard("25/11", "sexta", creatGame("gales", "07:00", "ira") + creatGame("catar", "10:00", "senegal") + creatGame("holanda", "13:00", "equador") + creatGame("inglaterra", "16:00", "estados-unidos")) +
    createCard("26/11", "sábado", creatGame("tunisia", "07:00", "australia") + creatGame("polonia", "10:00", "arabia-saudita") + creatGame("franca", "13:00", "dinamarca") + creatGame("argentina", "16:00", "mexico")) +
    createCard("27/11", "domingo", creatGame("japao", "07:00", "costa-rica") + creatGame("belgica", "10:00", "marrocos") + creatGame("croacia", "13:00", "canada") + creatGame("espanha", "16:00", "alemanha")) +
    createCard("28/11", "segunda", creatGame("camaroes", "07:00", "servia") + creatGame("coreia-do-sul", "10:00", "gana") + creatGame("brasil", "13:00", "suica") + creatGame("portugal", "16:00", "uruguai")) +
    createCard("29/11", "terça", creatGame("equador", "12:00", "senegal") + creatGame("holanda", "12:00", "catar") + creatGame("ira", "16:00", "estados-unidos") + creatGame("gales", "16:00", "inglaterra")) +
    createCard("30/11", "quarta", creatGame("tunisia", "12:00", "franca") + creatGame("australia", "12:00", "dinamarca") + creatGame("polonia", "16:00", "argentina") + creatGame("arabia-saudita", "16:00", "mexico")) +
    createCard("01/12", "quinta", creatGame("croacia", "12:00", "belgica") + creatGame("canada", "12:00", "marrocos") + creatGame("japao", "16:00", "espanha") + creatGame("costa-rica", "16:00", "alemanha")) +
    createCard("02/12", "sexta", creatGame("coreia-do-sul", "12:00", "portugal") + creatGame("gana", "12:00", "uruguai") + creatGame("servia", "16:00", "suica") + creatGame("camaroes", "16:00", "brasil"))
;
