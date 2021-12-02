const entrada = process.argv[2]

const listaDeTarefas = [
    'Cozinhar refeições da semana',
    'Treinar',
    'Estudar'
]

function adicionaTarefa (tarefa) {
    listaDeTarefas.push(tarefa)
    console.log(listaDeTarefas)
}

adicionaTarefa(entrada)