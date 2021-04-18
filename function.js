function deleteBoisson(elem) {
    let index = tab.findIndex(function (Boisson) {
        return Boisson.id === elem.id
    });

    tab.splice(index, 1);
}

function updateDom() {


    container.innerText = ''

    for (const info of tab) {

        let divtr = document.createElement("tr");
        let pnom = document.createElement("td");
        let pda = document.createElement("td");
        let pquantite = document.createElement("td");
        let paht = document.createElement("td");
        let pvht = document.createElement("td");
        let pmht = document.createElement("td");
        let pvttc = document.createElement("td");
        let btnsup = document.createElement("button");
        let btninc = document.createElement("button");
        let btndec = document.createElement("button");


        btnsup.addEventListener("click", function (e) {
            deleteBoisson(tab);
            updateDom();
        });

        btnsup.classList.add("sup")
        btnsup.innerText = "Supprimer";


        pnom.innerHTML = `<p>${info.nom}</p>`;
        pda.innerHTML = `<p>${info.da}</p>`;
        pquantite.innerHTML = `<p> ${info.quantite}</p>`;
        paht.innerHTML = `<p> ${info.aht}</p>`;
        pvht.innerHTML = `<p> ${info.vht}</p>`;
        pmht.innerHTML = `<p> ${info.mht}</p>`;
        pvttc.innerHTML = `<p> ${info.vttc} </p> `;



        btninc.addEventListener("click", function () {

            info.increment();

            updateDom();
        });

        btninc.classList.add("inc")
        btninc.innerHTML = "+";



        btndec.addEventListener("click", function () {

            info.décrément();

            updateDom();
        });

        btndec.classList.add("dec")
        btndec.innerHTML = "-";



        
        divtr.appendChild(pnom);
        divtr.appendChild(pda);
        divtr.appendChild(pquantite);
        divtr.appendChild(paht);
        divtr.appendChild(pvht);
        divtr.appendChild(pmht);
        divtr.appendChild(pvttc);


        pquantite.insertAdjacentElement("afterbegin", btninc);
        pquantite.insertAdjacentElement("beforeend", btndec);

        divtr.appendChild(btnsup);
        container.appendChild(divtr);



    }
};









