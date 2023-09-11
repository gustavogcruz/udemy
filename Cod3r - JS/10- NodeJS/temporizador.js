const schedule = require('node-schedule')

const terefa1 = schedule.scheduleJob('*/5 * 17 * * 4', function () {
    console.log('Executanto Tarefa1 !!!', new Date().getSeconds())    
})

setTimeout(function () {
    terefa1.cancel()
    console.log('Cancelamento Tarefa1 !!!')
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executanto Tarefa2 !!!', new Date().getSeconds())
})