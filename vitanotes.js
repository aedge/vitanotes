var app = angular.module('vitaNotes', [ ]);

app.controller('VitaNotesController', function() {
	
	//localStorage.clear();
	storedNotes = localStorage.getItem('notes');
	this.notes = JSON.parse(storedNotes);
	
	if(this.notes == null){
		this.notes = [];
		newNote = {
					title:'New Note',
				    note:' '
				  };
	    this.notes.push(newNote);
	}

	this.selectedNote  = this.notes[0];
	
	this.isActive = function(note) {
		if(note === this.selectedNote){
			return 'active';
		} else {
			return '';
		}
	};

	this.selectNote = function(note) {
		this.selectedNote = note;
	};
	
	this.addNote = function() {
		newNote = {
					title:'New Note',
				    note:' '
				  };
	    this.notes.push(newNote);
		this.saveNotes();
	};
	
	this.deleteNote = function() {
		for(i=0;i<this.notes.length;i++){
			if(this.notes[i] === this.selectedNote){
				this.notes.splice(i, 1);
				this.selectNote(this.notes[i + 1]);
				i = this.notes.length;
			}
		}
		this.saveNotes();
	};
	
	this.saveNotes = function() {
		localStorage.setItem("notes",JSON.stringify(this.notes));
	};
});
