window.onload = function(){
    reponse = {};
    avoirToutLeTableau("tableauZave",function (json) {
        reponse.tab=json.donnees.tableau;

        creneaux = new Creneaux();

        for(var i = 0; i < reponse.tab.length; i++){

            creneaux.add(new Creneau(reponse.tab[i]["resume"], reponse.tab[i]["lieu"], reponse.tab[i]["debut"], reponse.tab[i]["fin"]));

        }

        creneaux.display();
    });
};
