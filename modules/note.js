export default class Note {
    constructor ({ title, text }) {
        this.title = title;
        this.text = text;
        this.id = this.idReactor();
    }
    
    idReactor () {
        const newID = Math.floor(1 + Math.random() * 0x10000).toString(16);

        return newID
    }
}