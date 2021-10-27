function result() {
	var students={
		SHREYAS :{
			kannada:"90",
			english:"85",
			hindi:"95"
		},
		ABC :{
			kannada:"100",
			english:"100",
			hindi:"100"
		},
		PRIYA :{
			kannada:"000",
			english:"000",
			hindi:"000"
		},
		KRISHNA :{
			kannada:"95",
			english:"80",
			hindi:"90"
		}
	}
	var studentname=document.getElementById('studentname').value;
	var input=studentname.toUpperCase();
	var definition=students[input];
	var output=document.getElementById("output");
	if (definition==undefined) {
        output.innerHTML='<hr> There is no information about this student.<hr>'
	} else {
		output.innerHTML='<hr> Kannada score is '+definition.kannada+'<hr> English score is '+definition.english+'<hr> Hindi score is '+definition.hindi+'<hr> All the best for your future.';
	}
}
