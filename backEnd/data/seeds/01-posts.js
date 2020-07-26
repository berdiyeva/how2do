exports.seed = function (knex) {
	return knex("posts").insert([
		{
			name: "DIY Caffeinated Ice Cream",

			desc:
				"If you’re looking to add a little caffeine kick to your vanilla or chocolate ice cream, try adding some coffee grinds to it. I know you’re probably thinking what I thought at first, that it sounds gross, but it’s seriously delicious. Coffee grinds are 100% edible, some coffee shops will even sell chocolate covered beans, which are literally just coffee beans and chocolate.",
			author: "Jane Doe 1000lifehacks.com",
		},
		{
			name: "Gum Can Help You Read Faster",

			desc:
				"If you’re looking to improve your reading abilities, try chewing some gum. By chewing gum while you read, it distracts your brain signals from your eyes, ears and mouth by giving them something to focus on. It’s like a mini vacation for your mind so that it can put more effort on the words on the page. Studies have shown that this tactic can actually double or even triple your reading speed.",
			author: "John Doe 1000lifehacks.com",
		},
	]);
};
