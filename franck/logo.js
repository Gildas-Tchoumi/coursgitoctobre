function genererCode(longueur = 8) {
	const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let code = "";

	for (let i = 0; i < longueur; i++) {
		code += caracteres[Math.floor(Math.random() * caracteres.length)];
	}

	return code;
}

console.log(genererCode());
