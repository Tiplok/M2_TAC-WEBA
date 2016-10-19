class Creneaux {

    constructor(){
        this.tab = [];
        this.maxLengthX = 0;
    }

    add(creneau){
        var d = new Date(creneau.dateDebut).timestampDay();
        
        if(this.tab[d] === undefined){
            this.tab[d] = [];
        }

        this.tab[d].push(creneau);

        this.tab[d].sort(function(a,b){
            return new Date(a.dateDebut) - new Date(b.dateDebut);
        });

        if(this.tab[d].length > this.maxLengthX){
            this.maxLengthX = this.tab[d].length;
        }
    }


    display(){
        var monDiv;

        monDiv = document.getElementById("container");
        monDiv.className += "panel-group";
        var table = document.createElement("table");
        var tr = document.createElement("tr");

        /*for(var i = 0; i < this.tab.length; i++){
            if(this.tab[i] !== undefined){
                var th = document.createElement("th");
                th.append(this.tab[i][0].getFrenchDateDebut(false).charAt(0).toUpperCase()+this.tab[i][0].getFrenchDateDebut(false).slice(1));
                tr.append(th);
            }
        }*/
        var i = 0;
        this.tab.forEach(function(element){
            i++;
            if(element !== undefined){
                var th = document.createElement("th");
                th.append(element[0].getFrenchDateDebut(false).charAt(0).toUpperCase()+element[0].getFrenchDateDebut(false).slice(1));
                tr.append(th);
            }
        });
        console.log(i);

        table.append(tr);

        for(var j = 0; j < this.maxLengthX; j++){
            tr = document.createElement("tr");
            /*for(i = 0; i < this.tab.length; i++){
                var td = document.createElement("td");
                if(this.tab[i]){
                    if(this.tab[i][j]){
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
                        nouveauDiv3.innerHTML = this.tab[i][j].getFrenchDateDebut(true);

                        nouveauDiv4 = document.createElement("div");
                        nouveauDiv4.className += "panel-footer";
                        nouveauDiv4.innerHTML = this.tab[i][j].getFrenchDateFin(true);

                        panelDiv.append(nouveauDiv1);
                        panelDiv.append(nouveauDiv2);
                        panelDiv.append(nouveauDiv3);
                        panelDiv.append(nouveauDiv4);
                        td.append(panelDiv);
                    }
                    tr.append(td);
                }
            }*/
            this.tab.forEach(function(element){
                var td = document.createElement("td");
                if(element){
                    if(element[j]){
                        var panelDiv;
                        var nouveauDiv1;
                        var nouveauDiv2;
                        var nouveauDiv3;
                        var nouveauDiv4;

                        panelDiv = document.createElement("div");
                        panelDiv.className += "panel panel-default";

                        nouveauDiv1 = document.createElement("div");
                        nouveauDiv1.className += "panel-heading";
                        nouveauDiv1.innerHTML = element[j].resume;

                        nouveauDiv2 = document.createElement("div");
                        nouveauDiv2.className += "panel-body";
                        nouveauDiv2.innerHTML = element[j].lieu;

                        nouveauDiv3 = document.createElement("div");
                        nouveauDiv3.className += "panel-footer";
                        nouveauDiv3.innerHTML = element[j].getFrenchDateDebut(true);

                        nouveauDiv4 = document.createElement("div");
                        nouveauDiv4.className += "panel-footer";
                        nouveauDiv4.innerHTML = element[j].getFrenchDateFin(true);

                        panelDiv.append(nouveauDiv1);
                        panelDiv.append(nouveauDiv2);
                        panelDiv.append(nouveauDiv3);
                        panelDiv.append(nouveauDiv4);
                        td.append(panelDiv);
                    }
                    tr.append(td);
                }
            });
            table.append(tr);
        }
        monDiv.append(table);
    }


}
