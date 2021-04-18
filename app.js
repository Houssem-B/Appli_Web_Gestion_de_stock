let container = document.getElementById('container');

let inputNomduproduit = document.getElementById('nom');
let inputDegrédalcool = document.getElementById('da');
let inputQuantitedeproduits = document.getElementById('quantite');
let inputPrixdachatHT = document.getElementById('aht');
let inputPrixdeventeHT = document.getElementById('vht');
let inputMargeHT = document.getElementById('mht');
let inputPrixdeventeTTC = document.getElementById('vttc');

let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');

let tab = [];
let btn1 = document.getElementById('btn1');



btn1.addEventListener('click', function (e) {

    e.preventDefault();
    let div = document.createElement('div');


    if (check1.checked && check2.checked) {
        alert("Sélectionner un seul produit SVP")
    }

    else if (check1.checked && check3.checked) {
        alert("Sélectionner un seul produit SVP")
    }

    else if (check2.checked && check1.checked) {
        alert("Sélectionner un seul produit SVP")

    }

    else if (check2.checked && check3.checked) {
        alert("Sélectionner un seul produit SVP")

    }

    else if (check3.checked && check1.checked) {
        alert("Sélectionner un seul produit SVP")

    }

    else if (check3.checked && check2.checked) {
        alert("Sélectionner un seul produit SVP")

    }

    else if (!check1.checked && !check2.checked && !check3.checked) {
        alert("Sélectionner un seul produit SVP")

    }

    else {
        if (check1.checked) {
            let Boisson = new BoissonAlc(


                inputNomduproduit.value,
                inputDegrédalcool.value,
                inputQuantitedeproduits.value,
                inputPrixdachatHT.value,
                inputPrixdeventeHT.value,
                inputMargeHT.value,
                inputPrixdeventeTTC.value,
            )

            tab.push(Boisson);
        }

        else if (check2.checked) {

            let Boisson = new BoissonNonAlc(

                inputNomduproduit.value,
                inputQuantitedeproduits.value,
                inputPrixdachatHT.value,
                inputPrixdeventeHT.value,
                inputMargeHT.value,
                inputPrixdeventeTTC.value,
            )

            tab.push(Boisson);

        }

        else if (check3.checked) {

            let Boisson = new Autre(

                inputNomduproduit.value,
                inputQuantitedeproduits.value,
                inputPrixdachatHT.value,
                inputPrixdeventeHT.value,
                inputMargeHT.value,
                inputPrixdeventeTTC.value,

            )

            tab.push(Boisson);

        }

        updateDom();

    }
});



