
Date.prototype.toLongFrenchFormat = function (){
	var months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
	var date = this.getDate();
	if (date < 10){
		date = "0" + date;	
	}
	var output = date + " " + months[this.getMonth()] + " " + this.getFullYear()+" "+this.getUTCHours()+"h";
	return output;
}


window.onload = function(){
    reponse = {};
    avoirToutLeTableau("tableauZave",function (json) {
        reponse.tab=json.donnees.tableau;
        
        monDiv = document.getElementById("container");
        monDiv.className += "panel-group";
        
        for(var i = 0; i < reponse.tab.length; i++){
            panelDiv = document.createElement("div");
            panelDiv.className += "panel panel-default";
            
            nouveauDiv1 = document.createElement("div");
            nouveauDiv1.className += "panel-heading";
            nouveauDiv1.innerHTML = reponse.tab[i]["resume"];
            
            nouveauDiv2 = document.createElement("div");
            nouveauDiv2.className += "panel-body";
            nouveauDiv2.innerHTML = reponse.tab[i]["lieu"];
            
            nouveauDiv3 = document.createElement("div");
            nouveauDiv3.className += "panel-footer";
            var d = new Date(reponse.tab[i]["debut"]);
            nouveauDiv3.innerHTML = d.toLongFrenchFormat();

            panelDiv.append(nouveauDiv1);
            panelDiv.append(nouveauDiv2);
            panelDiv.append(nouveauDiv3);
            monDiv.append(panelDiv);

        }
    });
};



