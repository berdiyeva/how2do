exports.up = async function (knex) {
	await knex.schema.createTable("posts", (table) => {
		table.increments("id"),
			table.text("name").notNull(),
			table.text("desc").notNull(),
			table.text("author").notNull();
	});
	await knex.schema.createTable("users", (table) => {
		table.increments("id"),
			table.text("email", 120).notNull(),
			table.text("username", 150).notNull().unique(),
			table.text("password", 150).notNull();
	});
	await knex.schema.createTable("rate", (table) => {
		table.increments("id"),
			table.integer("total").notNull(),
			table.text("comment").notNull(),
			table
				.integer("posts_id")
				.references("id")
				.inTable("posts")
				.onDelete("CASCADE")
				.onUpdate("CASCADE"),
			table
				.integer("users_id")
				.references("id")
				.inTable("users")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists("rate");
	await knex.schema.dropTableIfExists("users");
	await knex.schema.dropTableIfExists("posts");
};
