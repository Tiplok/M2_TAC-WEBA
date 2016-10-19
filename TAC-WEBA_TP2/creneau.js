class Creneau {
    constructor(resume, lieu, dateDebut, dateFin){
        this.resume = resume;
        this.lieu = lieu;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }


    getDateDebut(){
        return new Date(this.dateDebut);
    }

    getFrenchDateDebut(heures){
        return new Date(this.dateDebut).toLongFrenchFormat(heures);
    }

    getDateFin(){
        return new Date(this.dateFin);
    }

    getFrenchDateFin(heures){
        return new Date(this.dateFin).toLongFrenchFormat(heures);
    }


}
