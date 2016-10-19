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

    getFrenchDateDebut(){
        return new Date(this.dateDebut).toLongFrenchFormat();
    }

    getDateFin(){
        return new Date(this.dateFin);
    }

    getFrenchDateFin(){
        return new Date(this.dateFin).toLongFrenchFormat();
    }


}
