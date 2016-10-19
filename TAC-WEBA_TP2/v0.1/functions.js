Date.prototype.toLongFrenchFormat = function(){
    var months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    var days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];


    var date = this.getDate();
    if (date < 10){
        date = "0" + date;
    }
    var output = days[this.getDay()] + " " + date + " " + months[this.getMonth()] + " " + this.getFullYear()+" "+this.getUTCHours()+"h";
    return output;
}
