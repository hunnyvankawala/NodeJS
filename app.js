//fs is the variable name which stores the things returned by module fs
const chalk = require("chalk")
const validator = require("validator")
const yargs = require("yargs")
const note = require("./notes.js")

//create add command to add note
yargs.command({
	//set properties of this command
	command: 'add',
	describe: 'add a new note',
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: "Note body",
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => note.addNotes(argv.title, argv.body)
})

//create remove command to remove note
yargs.command({
	command: 'remove',
	describe: 'remove a note',
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => note.removeNotes(argv.title)
})

//create list command to list all notes
yargs.command({
	command: 'list',
	describe: 'list all the notes',
	handler: () => note.listNotes()
})

//create read command to read a note
yargs.command({
	command: 'read',
	describe: 'read a note',
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => note.readNotes(argv.title)
})

yargs.parse()
//console.log(process.argv)
//console.log(yargs.argv)