const axios = require('axios').default;

class Notepad{
    constructor(){
        this.title = document.getElementById('title');
        this.content = document.getElementById('content');
        this.date = document.getElementById('date');
        this.time = document.getElementById('time');
        this.btnAdd = document.getElementById('btnAdd');
        this.event();
    }

    event(){
        this.btnAdd.onclick = event => this.addNote();
    }

    addNote(){
        axios.get('http://localhost:4000/notepad')
        .then((result) => {
            this.recoveryNote(result.data.notepad);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    recoveryNote(data){
        for(note of data){
            const html = this.noteLayout(note.id, note.title, note.content, note.date, note.time);
        }
    }

    noteLayout(title, content, date, time){
        const html = `
        <div class="card" style="width: 18rem;">
            <img src="../imagem/noteDinamic.png" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content}</p>
                <p class="card-text">${date} ${time}</p>
            </div>
        </div>
        `
        return html;
    }

    insertHtml(){
        document.getElementById('noteBoard').innerHTML += html;
    }

}

new Notepad();