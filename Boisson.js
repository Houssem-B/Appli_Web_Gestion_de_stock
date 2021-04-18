class Boisson {
    constructor(nom, da, quantite, aht, vht,) {

        this.nom = nom;
        this.da = Number(da);
        this.quantite = Number(quantite);
        this.aht = Number(aht);
        this.vht = Number(vht);
        this.mht = vht - aht;
        this.vttc = vht * 1.2;

        this.id = nom + Date.now();
    }

    increment() {
        this.quantite = Number(this.quantite += 1);

    }


    décrément() {
        if (this.quantite > 0) {
            this.quantite = Number(this.quantite -= 1);
        }
    }

}

