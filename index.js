const server = require("./backEnd/api/server");

const PORT = process.env.PORT || 4000;

if (!module.parent) {
	server.listen(PORT, () => {
		console.log(`\n=== Server listening on port ${PORT} ===\n`);
	});
}
