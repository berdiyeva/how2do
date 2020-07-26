exports.seed = function (knex) {
	return knex("users").insert([
		{
			email: "test",
			username: "test",
			password: "test",
		},
		{
			email: "test2",
			username: "test2",
			password: "test2",
		},
	]);
};
