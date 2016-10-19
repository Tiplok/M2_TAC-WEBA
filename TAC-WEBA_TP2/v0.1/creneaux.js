class Creneaux {

    constructor(){
        this.tab = [];
        this.reverseTab = [];
        this.maxLengthX = 0;
    }

    add(creneau){
        var d = new Date(creneau.dateDebut).getDay();
        if(this.tab[d] === undefined){
            this.tab[d] = [];
        }
        this.tab[d].push(creneau);
        this.reverse();
    }

    reverse(){
        this.reverseTab = [];
        for(var i = 0; i < this.tab.length; i++){
            if(this.tab[i] !== undefined){
                for(var j = 0; j < this.tab[i].length; j++){
                    if(this.reverseTab[j] === undefined){
                        this.reverseTab[j] = [];
                        if(this.tab[i][j] !== undefined){
                            this.reverseTab[j][i] = this.tab[i][j];
                            if(this.reverseTab[j].length > this.maxLengthX){
                                this.maxLengthX = this.reverseTab[j].length;
                            }
                        }
                    }
                }
            }
        }
    }

    display(){
        var monDiv;

        monDiv = document.getElementById("container");
        monDiv.className += "panel-group";
        var table = document.createElement("table");

        /*this.reverseTab.forEach(function(element){
            var tr = document.createElement("tr");

            for(var i = 0; i < element.length; i++){
                var td = document.createElement("td");
                if(element[i] !== undefined){
                    var panelDiv;
                    var nouveauDiv1;
                    var nouveauDiv2;
                    var nouveauDiv3;
                    var nouveauDiv4;

                    panelDiv = document.createElement("div");
                    panelDiv.className += "panel panel-default";

                    nouveauDiv1 = document.createElement("div");
                    nouveauDiv1.className += "panel-heading";
                    nouveauDiv1.innerHTML = element[i].resume;

                    nouveauDiv2 = document.createElement("div");
                    nouveauDiv2.className += "panel-body";
                    nouveauDiv2.innerHTML = element[i].lieu;

                    nouveauDiv3 = document.createElement("div");
                    nouveauDiv3.className += "panel-footer";
                    nouveauDiv3.innerHTML = element[i].getFrenchDateDebut();

                    nouveauDiv4 = document.createElement("div");
                    nouveauDiv4.className += "panel-footer";
                    nouveauDiv4.innerHTML = element[i].getFrenchDateFin();

                    panelDiv.append(nouveauDiv1);
                    panelDiv.append(nouveauDiv2);
                    panelDiv.append(nouveauDiv3);
                    panelDiv.append(nouveauDiv4);
                    td.append(panelDiv);
                }
                tr.append(td);
            }
            table.append(tr);

        });*/
        for(var j = 0; j < this.maxLengthX; j++){
            var tr = document.createElement("tr");
            for(var i = 0; i < this.tab.length; i++){
                var td = document.createElement("td");
                if(this.tab[i] && this.tab[i][j]){
                    var panelDiv;
                    var nouveauDiv1;
                    var nouveauDiv2;
                    var nouveauDiv3;
                    var nouveauDiv4;

                    panelDiv = document.createElement("div");
                    panelDiv.className += "panel panel-default";

                    nouveauDiv1 = document.createElement("div");
                    nouveauDiv1.className += "panel-heading";
                    nouveauDiv1.innerHTML = this.tab[i][j].resume;

                    nouveauDiv2 = document.createElement("div");
                    nouveauDiv2.className += "panel-body";
                    nouveauDiv2.innerHTML = this.tab[i][j].lieu;

                    nouveauDiv3 = document.createElement("div");
                    nouveauDiv3.className += "panel-footer";
                    nouveauDiv3.innerHTML = this.tab[i][j].getFrenchDateDebut();

                    nouveauDiv4 = document.createElement("div");
                    nouveauDiv4.className += "panel-footer";
                    nouveauDiv4.innerHTML = this.tab[i][j].getFrenchDateFin();

                    panelDiv.append(nouveauDiv1);
                    panelDiv.append(nouveauDiv2);
                    panelDiv.append(nouveauDiv3);
                    panelDiv.append(nouveauDiv4);
                    td.append(panelDiv);
                }
                tr.append(td);
            }
            table.append(tr);
        }
        monDiv.append(table);
        /*for(var i = 0; i < this.tab.length; i++){
            var panelDiv;
            var nouveauDiv1;
            var nouveauDiv2;
            var nouveauDiv3;
            var nouveauDiv4;

            panelDiv = document.createElement("div");
            panelDiv.className += "panel panel-default";

            nouveauDiv1 = document.createElement("div");
            nouveauDiv1.className += "panel-heading";
            nouveauDiv1.innerHTML = this.tab[i].resume;

            nouveauDiv2 = document.createElement("div");
            nouveauDiv2.className += "panel-body";
            nouveauDiv2.innerHTML = this.tab[i].lieu;

            nouveauDiv3 = document.createElement("div");
            nouveauDiv3.className += "panel-footer";
            nouveauDiv3.innerHTML = this.tab[i].getFrenchDateDebut();

            nouveauDiv4 = document.createElement("div");
            nouveauDiv4.className += "panel-footer";
            nouveauDiv4.innerHTML = this.tab[i].getFrenchDateFin();;

            panelDiv.append(nouveauDiv1);
            panelDiv.append(nouveauDiv2);
            panelDiv.append(nouveauDiv3);
            panelDiv.append(nouveauDiv4);
            monDiv.append(panelDiv);
        }*/
    }


}
