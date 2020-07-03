const fs = require("fs")
const chalk = require("chalk")

const getNotes = () => "Your notes... "

const addNotes = (title, body) => {
	//get all the notes already present in the notes.json file
	const notes = loadNotes()
	
	//runs for every element in notes array until the first match found 
	const duplicateNote = notes.find( (note) => note.title === title )

	if (duplicateNote) {
		console.log(chalk.red.inverse("Duplicate Note found with same title"))
	}
	else {
		//push the note to notes array
		notes.push({
			title: title,
			body: body
		})

		//save the note to notes file
		saveNotes(notes)
		console.log(chalk.green.inverse("New note added"))
	}  
}

//remove note from the notes.json file
const removeNotes = (title) => {
	//get all notes 
	const notes = loadNotes()

	//using filter function return all the notes not having title == title
	const findNoteToKeep = notes.filter( (note) => note.title !== title )

	//if the return list has the same length as the original list then no note with given title was found
	if (findNoteToKeep.length === notes.length) {
		console.log(chalk.bgRed("No note present with the title: " + title))
	}
	else {
		//save the note after deleting to the notes file
		saveNotes(findNoteToKeep)
		console.log(chalk.bgGreen("Notes with title: " + title + " deleted"))
	}
}

//list all the notes present in notes.json file
const listNotes = () => {
	console.log(chalk.blue(getNotes()))
	//load all the nodes
	const notes = loadNotes()
	//for each node print only title
	notes.forEach((note) => console.log(note.title))
}

//read note with the given title
const readNotes = (title) => {
	//load all the nodes
	const notes = loadNotes()

	//find the note with matching title
	const noteToRead = notes.find( (note) => note.title === title)

	//if note is found print its body
	if(noteToRead) {
		console.log(chalk.blue.bold(noteToRead.title))
		console.log(noteToRead.body)	
	}
	else {
		console.log(chalk.red("Note not found"))
	}
	
}

//writing the note inorder to save it
const saveNotes = (notes) => {
	//notes is in js object format so convert to string
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
	try {
		//reads as a binary file 
		const dataBuffer = fs.readFileSync("notes.json")
		//need to convert the binary file contents to string
		const data = dataBuffer.toString();
		//parse the data to convert it back to JSON format
		return JSON.parse(data)
	} catch(error) {
		return []
	}
} 

//exporting the needed modules
module.exports = {
	getNotes,
	addNotes,
	removeNotes,
	listNotes,
	readNotes
}