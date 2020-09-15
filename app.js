const { argv } = require('./config/yargs');
const toDo = require('./toDo/toDo');
// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tareaCrear = toDo.crear(argv.description);
        console.log(tareaCrear);
        break;
    case 'listar':
        var listado;
        if (argv.status != undefined) {
            listado = toDo.getListado(argv.status);
        } else {
            listado = toDo.getListado();
        }

        for (let tarea of listado) {
            console.log('===========Por hacer============'.green);
            console.log(tarea.descripcion);

            if (tarea.status == true) {
                console.log('Estado: Completado'.green);
            } else {
                console.log('Estado: Incompleto'.grey);
            }
            console.log('================================'.green);
        }
        break;
    case 'actualizar':
        let tareaActualizar = toDo.actualizar(argv.description, argv.status);
        console.log(tareaActualizar);
        break;
    case 'borrar':
        let borrado = toDo.borrar(argv.description);
        if (borrado) {
            console.log('Se borro correctamente'.green);
        } else {
            console.log('No se pudo borrar el registro'.green);
        }
        break;
    default:
        console.log('No existe el comando');
}