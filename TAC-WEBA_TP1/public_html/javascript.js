
window.onload = function(){
    document.getElementById("convertir").addEventListener(
        "click",
        { handleEvent : function (event) { 
            conversion = new Conversion("icsData", "jsonData");
            conversion.handleEvent(event);
        }}
    );
};

/*Conversion = {
    
    jsonData:"",
    
    init : function(){
        var icsData = document.getElementById("icsData").value;
        this.conversion(icsData);
        document.getElementById("jsonData").value = this.jsonData;
    },
    
    handleEvent : function(event){
        this.init();
    },
    
    conversion : function(icsData){
        icsData = icsData.split("\n");
    
        //this.jsonData = "{";

        for(i = 0; i < icsData.length; i++){

            this.traitementLigne(icsData[i]);
        }
        //this.jsonData += "}";
    },
    
    traitementLigne : function(lineData){
            if(lineData == "BEGIN:VEVENT"){
                this.jsonData += '{';
            }
            
            subData = lineData.split(":");
            this.jsonData += '"'+subData[0]+'"'+":"+'"'+subData[1]+'"';

            if(lineData == "END:VEVENT"){
                this.jsonData += "}";
            }

            if(i < lineData.length-1){
                this.jsonData += ",\n";
            }
    }
};*/

function Conversion(source, cible){
    this.source = document.getElementById(source);
    this.cible = document.getElementById(cible);
    this.creneaux = new Array;
}

Conversion.prototype.handleEvent = function(event){
    this.demarrer();
}

Conversion.prototype.demarrer = function(){
    var icsData = this.source.value;
    this.conversion(icsData);
    this.cible.value = JSON.stringify(this.creneaux);
    
};

Conversion.prototype.conversion = function(icsData){
    var icsData_inArray = icsData.split("BEGIN:VEVENT");
    icsData_inArray.shift();
    for(var index = 0; index < icsData_inArray.length; index++){
        var creneau = new Creneau();
        var champs = icsData_inArray[index].split(String.fromCharCode(10));
        champs.shift();
        for(var indexChamps = 0; indexChamps < champs.length; indexChamps++){
            this.conversionChamp(creneau, champs[indexChamps]);
            
        }
        this.creneaux.push(creneau);
    }
}

Conversion.prototype.conversionChamp = function (creneau, champActuel){
    
    if(champActuel.indexOf(":") != 1){
        var couple = champActuel.split(":");
        console.log(couple);
        if(couple[0] == "DTSTART"){
            creneau.dateDébut = couple[1];
        }
        if(couple[0] == "DTEND"){
            creneau.dateFin = couple[1];
        }
        if(couple[0] == "SUMMARY"){
            creneau.titre = couple[1];
        }
        if(couple[0] == "LOCATION"){
            creneau.lieu = couple[1];
        }
    }
}

function Creneau(){
    this.dateDébut;
    this.dateFin;
    this.titre;
    this.lieu;
}