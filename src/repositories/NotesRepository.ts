import Note from "../interfaces/Note";

class NotesRepository {
    get(): Array<Note> {
        let value = localStorage.getItem('@notes');
        if(value === null){
            return [];
        }
        return JSON.parse(value);
    }

    set(item: Note) {
        let storage = this.get();
        storage.push(item);
        localStorage.setItem('@notes',JSON.stringify(storage));
    }

    update(id: string,title: string) {
        let storage = this.get();
        storage.map(note => note.id === id ? note.title = title : null)
        localStorage.setItem('@notes',JSON.stringify(storage));
    }

    delete(id: string) {
        let storage = this.get();
        storage.map((note,index) => {
            if(note.id === id){
                storage.splice(index)
            }
        })
        localStorage.setItem('@notes',JSON.stringify(storage));
    }
}

export default NotesRepository;