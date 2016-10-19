function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

Date.prototype.toLongFrenchFormat = function(heures){
    var months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    var days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];


    var date = this.getDate();
    date = addZero(date);
    var output = days[this.getDay()] + " " + date + " " + months[this.getMonth()] + " " + this.getFullYear();

    if(heures){
        output += " "+this.getUTCHours()+"h"+addZero(this.getMinutes());
    }
    return output;
}

Date.prototype.timestampDay = function(){
    var timestamp = this.getTime();
    var hours = this.getHours(); // 1h = 3 600 000 ms
    var minutes = this.getMinutes(); // 1mn = 60 000 ms
    var seconds = this.getSeconds(); // 1s = 1000 ms
    var milliseconds = this.getMilliseconds();

    return (timestamp - (hours*3600000+minutes*60000+seconds*1000+milliseconds));
}
