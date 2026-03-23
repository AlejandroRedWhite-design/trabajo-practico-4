export default class SuperheroesDataSource {
    // metodo abstracto para obtener todos los superheroes
    obtenerTodos() {
        throw new Error('este metodo deber ser implementado por la subclase');
    }
}