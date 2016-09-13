
window.onload = function(){
    document.getElementById("convertir").addEventListener(
        "click",
        { handleEvent : function (event) { 
            Conversion.handleEvent(event);
        }}
    );
};

Conversion = {
    
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
};