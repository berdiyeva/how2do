module.exports = {
	testing: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./backEnd/data/howto-test.db3",
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done);
			},
		},
		migrations: {
			directory: "./backEnd/data/migrations",
		},
		seeds: {
			directory: "./backEnd/data/seeds",
		},
  },
  
  
	development: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./backEnd/data/howto.db3",
		},
		// this is needed when using foreign keys
		pool: {
			afterCreate: (conn, done) => {
				// runs after a connection is made to the sqlite engine
				conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
			},
		},
		migrations: {
			directory: "./backEnd/data/migrations",
		},
		seeds: {
			directory: "./backEnd/data/seeds",
		},
	},
};
