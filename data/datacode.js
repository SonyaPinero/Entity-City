var array = []

neighborhoods.features.forEach(function(i,x){
	if (i.properties.BoroName === "Manhattan") {
			array.push(i);
		};
	});

