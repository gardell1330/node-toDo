const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea por hacer'
}
const status = {
    alias: "c",
    desc: 'Estado de tarea por hacer'
}


const argv = require('yargs')
    .command('crear', 'Crear nueva tarea', { description })
    .command('listar', 'Muestra todas las tareas', { status })
    .command('actualizar', 'Muestra todas las tareas', { description, status })
    .command('borrar', 'Borrar una tarea', { description })
    .help()
    .argv;


module.exports = {
    argv
}