const restaurants = [
	{
		city: 'American Fork',
		description: 'Chain eatery serving up fried chicken fingers, wings, sandwiches & other American comfort eats.',
		name: "Zaxby's",
		address1: '610 W Main St',
		category: 'Fast Casual',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_casual_zaxbys.jpg?alt=media&token=5279f876-4e46-4b9f-b54b-6f4f25512528',
		address2: 'American Fork, UT 84003',
	},
	{
		category: 'Family Style',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffamily_style_waffle_house.jpg?alt=media&token=c5a0b013-cfbd-4b94-adbc-8582ad10ca1f',
		address1: '820 N Dysart Rd',
		city: 'Goodyear',
		name: 'Waffle House',
		address2: 'Goodyear, AZ 85338',
		description:
			'Waffle House, Inc. is an American restaurant chain with 2,100 locations in 25 states in the United States. Most of the locations are in the South, where the chain is a regional cultural icon.',
	},
	{
		address2: 'San Diego, CA 92173',
		name: 'IHOP',
		category: 'Family Style',
		city: 'San Diego',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffamily_style_ihop.jpg?alt=media&token=b27bf98f-8011-4e71-b838-30c09951a0fb',
		description: 'Long-standing chain serving a wide variety of pancakes & other American breakfast & diner fare.',
		address1: '4291 Camino De La Plaza',
	},
	{
		description:
			'Casual chain restaurant with a festive vibe serving beer, cocktails & a wide menu of American fare.',
		address1: '3487 Tyler St',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fcasual_dining_tgi_fridays.jpg?alt=media&token=ec5f5912-be2f-4806-bde3-4e26bce62fc4',
		category: 'Casual Dining',
		name: 'TGI Fridays',
		address2: 'Riverside, CA 92503',
		city: 'Riverside',
	},
	{
		address2: 'San Antonio, TX 78245',
		category: 'Family Style',
		name: 'Panera Bread',
		description:
			'Counter-serve bakery/cafe chain serving sandwiches, salads & more, known for its bread & free WiFi.',
		city: 'San Antonio',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_casual_panera-bread.jpg?alt=media&token=c4b2059f-23a1-42e0-a965-6e591c6ecaa1',
		address1: '8531 TX-151',
	},
	{
		name: 'Lupe Tortilla Mexican Restaurant',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fethnic_mexican_lupe_tortila.jpg?alt=media&token=0aa93e6e-38db-4149-9185-48ffaf43df02',
		city: 'San Antonio',
		description: 'Regional Tex-Mex chain known for its homemade tortillas & variety of margaritas.',
		address2: 'San Antonio, TX 78258',
		category: 'Ethnic',
		address1: '21103 US-281',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffamily_style_red_lobster.jpg?alt=media&token=c733dc6d-aaa1-4255-8949-ee3083709f41',
		city: 'Sherman',
		description: 'Lively chain restaurant serving American seafood standards amid New England-themed decor.',
		category: 'Family Style',
		address2: 'Sherman, TX 75090',
		name: 'Red Lobster',
		address1: '3600 N, US-75',
	},
	{
		address2: 'New York, NY 10065',
		city: 'New York',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffine_dining_daniel_resaurant.jpg?alt=media&token=cc143e53-e29f-4556-b013-2747e4661747',
		name: 'Daniel',
		description:
			"Daniel Boulud's elegant French flagship where jackets are required & expense accounts come in handy.",
		category: 'Fine Dining',
		address1: '60 E 65th St',
	},
	{
		address2: 'Irvine, CA 92618',
		category: 'Fast Food',
		address1: '51 Technology Dr',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_food_subway.jpg?alt=media&token=458b0d33-f15e-4b4f-b010-7907c98745ed',
		description:
			'Casual counter-serve chain for build-your-own sandwiches & salads, with health-conscious options.',
		name: 'Subway',
		city: 'Irvine',
	},
	{
		name: 'Starbucks',
		category: 'Fast Food',
		city: 'Houston',
		address1: '1001 Avenida De Las Americas',
		address2: 'Houston, TX 77010',
		description:
			'Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availability.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_food_star_bucks.jpg?alt=media&token=afb8252d-fb5d-4393-ba36-88b5a053c60c',
	},
	{
		city: 'San Diego',
		name: 'Olive Garden',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fcasual_dining_olive_garden.png?alt=media&token=7a38fba6-967a-46d8-82fa-dfc9f998dc35',
		address1: '3215 Sports Arena Blvd',
		address2: 'San Diego, CA 92110',
		category: 'Casual Dining',
		description:
			'Lively, family-friendly chain featuring Italian standards such as pastas & salads, with a full bar.',
	},
	{
		address2: 'American Canyon, CA 94503',
		name: "Dunkin' Donuts",
		description: 'Long-running chain serving signature donuts, breakfast sandwiches & a variety of coffee drinks.',
		city: 'American Canyon',
		address1: '410 Napa Junction Rd Suite 100',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_food_dunkin_donuts.jpg?alt=media&token=1e4e2ab6-afb6-4ef1-837b-1ca12068d7d0',
		category: 'Fast Food',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fcasual_dining_outback.jpg?alt=media&token=37d47281-5dfd-455c-85b9-78566dadc54f',
		name: 'Outback Steakhouse',
		address1: '4196 Clairemont Mesa Blvd',
		description: 'Boisterous Australian-themed chain serving steaks, seafood & other hearty steakhouse fare.',
		category: 'Casual Dining',
		address2: 'San Diego, CA 92117',
		city: 'San Diego',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fethnic_chef_chus_chinese.jpg?alt=media&token=67e1feb7-ee0d-4c75-9fb5-adc1781f51fd',
		city: 'Los Altos',
		category: 'Ethnic',
		address1: '1067 N San Antonio Rd #1300',
		description: "Local favorite for Chinese food staples as well as chef Chu's specialty signature dishes.",
		name: "Chef Chu's",
		address2: 'Los Altos, CA 94022',
	},
	{
		name: 'Cabaret Tehran',
		address2: 'Encino, CA',
		address1: '16101 Ventura Blvd #160',
		category: 'Ethnic',
		description: 'Mediterranean cuisine with Middle-Eastern influence, plus live cabaret weekly & special events.',
		city: 'Los Angeles',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fethnic_cabaret_tehran.jpg?alt=media&token=508f09e7-d7a0-4dd8-a682-c95aace75608',
	},
	{
		name: "Chili's Grill & Bar",
		description: 'Family-friendly chain serving classic Tex-Mex & American fare in a Southwestern-style setting',
		city: 'San Bruno',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fcasual_dining_chilis.jpg?alt=media&token=85edaa04-82ed-4e5b-a139-b5a528aa58d6',
		address1: '899 El Camino Real',
		category: 'Casual Dining',
		address2: 'San Bruno, CA 94066',
	},
	{
		address1: '14240 US-395',
		address2: 'Adelanto, CA 92301',
		city: 'Adelanto',
		description:
			'Casual diner chain dishing up classic American comfort fare, including all-day breakfast favorites.',
		category: 'Family Style',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffamily_style_dennys.jpg?alt=media&token=e95b77a6-f001-45e0-9c18-6c2f2a3ce8f8',
		name: "Denny's",
	},
	{
		category: 'Ethnic',
		address2: '1915 Westwood Blvd',
		address1: 'Westwood court',
		name: 'Taste of Tehran',
		description: 'Persian eatery with small & large plates offers a few tables for dining on salads & wraps.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fethnic_taste_of_tehran.jpeg?alt=media&token=a3b0095e-dd6c-4b12-a461-d430bef22e05',
		city: 'Los Angeles',
	},
	{
		name: 'Cracker Barrel',
		address2: 'Phoenix, AZ 85027',
		address1: '21611 N 26th Ave',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffamily_style_cracker_barrel.jpg?alt=media&token=af00a784-cec0-481e-a225-2f8d35a0944d',
		description: 'Homey chain restaurant serving American comfort food, with an on-site general store.',
		category: 'Family Style',
		city: 'Phoenix',
	},
	{
		address2: 'Yountville, CA 94599',
		name: 'The French Laundry',
		description:
			"Chef Thomas Keller's refined fixed-price meals continually draw food lovers to this stone farmhouse",
		city: 'Yountville',
		category: 'Fine Dining',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffine_dining_french_luandry.jpg?alt=media&token=7a490814-a1b1-454d-8b33-93a378b09e54',
		address1: '6640 Washington St',
	},
	{
		name: 'Flight Restaurant and Wine Bar',
		city: 'Memphis',
		address2: 'Memphis, TN 38103',
		category: 'Fine Dining',
		address1: '39 S Main St',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffine_dining_flight.jpg?alt=media&token=686dcebd-3a23-4047-b4eb-8d8b46db6260',
		description:
			'Small plates of soups, salads & entrees are served with taster-size pours of wine in posh surrounds.',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fcasual_dining_buffalo_wings.jpg?alt=media&token=19de0369-0c77-4286-b8d3-a713956ab39c',
		name: 'Buffalo Wild Wings',
		description:
			'Lively sports-bar chain dishing up wings & other American pub grub amid lots of large-screen TVs.',
		city: 'Las Vegas',
		address2: 'Las Vegas, NV 89109',
		address1: '3663 S Las Vegas Blvd Ste 600',
		category: 'Casual Dining',
	},
	{
		category: 'Ethnic',
		city: 'Portland',
		address2: 'Portland, OR 97202',
		name: 'Nuestra Cocina',
		description:
			'Housemade tortillas & sangrias set the tone at creative, warmly decorated Mexican restaurant & bar.',
		address1: '2135 SE Division St',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fethnic_neustr_cocaina.jpg?alt=media&token=7b0eeb8c-6942-41ce-8ddd-70da3ec8d3af',
	},
	{
		name: 'NE Chinese Restaurant',
		address2: 'Columbus, OH 43202',
		category: 'Ethnic',
		description:
			'Compact, family-owned restaurant offering a range of classic Chinese dishes in a low-key atmosphere.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fethnic_ne_chinese.jpg?alt=media&token=7a198e0e-ea4a-4faf-918b-9622624efd8d',
		address1: '2620 N High St',
		city: 'Columbus',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_casual_jimmy_john.jpg?alt=media&token=8015a6ff-e2d9-47fe-a79a-5770509a4910',
		description: 'Counter-serve chain specializing in sub & club sandwiches, plus signature potato chips.',
		name: "Jimmy John's",
		category: 'Fast Casual',
		address2: 'Phoenix, AZ 85016',
		city: 'Phoenix',
		address1: '1650 E Camelback Rd #175',
	},
	{
		address2: 'Menifee, CA 92584',
		address1: '27750 Newport Rd',
		city: 'Menifee',
		name: "Applebee's Grill + Bar",
		description: 'Full-service chain bar & grill providing hearty American eats in an informal setting.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fcasual_dining_applebees.jpg?alt=media&token=f6d5e188-3d4e-4b68-a7a0-5d47e27c845d',
		category: 'Casual Dining',
	},
	{
		name: 'Geronimo',
		address1: '724 Canyon Rd',
		city: 'Santa Fe',
		description: 'Eclectic New American fare served amid elegant, minimalist decor in a circa-1756 adobe home.',
		category: 'Fine Dining',
		address2: 'Santa Fe, NM 87501',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffine_dining_geronimo.jpeg?alt=media&token=1ee2e98b-f0b0-4a73-956d-49e636cd2612',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_food_mcdonalds.png?alt=media&token=e3fa3de6-c002-478b-ba26-950407ad7a26',
		address2: 'Downey, CA 90240',
		address1: '10207 Lakewood Blvd',
		city: 'Downey',
		description: 'Classic, long-running fast-food chain known for its burgers, fries & shakes.',
		category: 'Fast Food',
		name: "McDonald's",
	},
	{
		category: 'Casual Dining',
		address2: 'Union City, CA 94587',
		address1: '32115 Union Landing Blvd',
		description: 'Lively chain steakhouse serving American fare with a Southwestern spin amid Texas-themed decor.',
		city: 'Union City',
		name: 'Texas RoadHouse',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Fcasual_dining_texas_roadhouse.jpg?alt=media&token=f93160d6-3aff-4355-b204-a775455b82b1',
	},
	{
		name: 'Burger King',
		city: 'Hollywood',
		address2: 'Hollywood, CA 90028',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_food_burger_king.jpg?alt=media&token=1593ca27-f451-4e12-b61d-61712d9e8381',
		description: 'Well-known fast-food chain serving grilled burgers, fries & shakes, plus breakfast.',
		category: 'Fast Food',
		address1: '7079 Sunset Blvd',
	},
	{
		name: 'Panda Express',
		description: 'Fast-food chain for Chinese standards, including some health-conscious options.',
		address1: '4463 Camino De La Plaza #107',
		category: 'Fast Casual',
		city: 'San Ysidro',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_casual_panda_express.jpg?alt=media&token=db7a1fe7-bdaf-47ce-88fe-f4797cfc0d6b',
		address2: 'San Ysidro, CA 92173',
	},
	{
		category: 'Fast Food',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_food_pizza_hut.jpg?alt=media&token=d7e8b4e9-c136-4add-a18c-380621a67de3',
		address1: 'Travel Centers Of America, 2 Simpson Rd',
		city: 'Columbia',
		address2: 'Columbia, NJ 07832',
		description: 'Family-friendly chain known for its made-to-order pizzas.',
		name: 'Pizza Hut Express',
	},
	{
		category: 'Fine Dining',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffine_dining_halls_chop_house.jpg?alt=media&token=b8fdd927-2a3a-4f24-b312-6712feb82935',
		name: 'Halls Chophouse',
		address1: '434 King St',
		address2: 'Charleston, SC 29403',
		city: 'Charleston',
		description:
			'Sizable cuts of beef & seafood served in elegant surrounds, also known for its Sunday gospel brunch.',
	},
	{
		city: 'Los Angeles',
		description: 'Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.',
		category: 'Fast Casual',
		address2: 'Los Angeles, CA 90007',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_casual_chipotle_mexican_grill.jpg?alt=media&token=dfc76c84-1c08-4e19-a674-aab3b294674b',
		address1: '3748 S Figueroa St',
		name: 'Chipotle Mexican Grill',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffast_casual_five_guys.jpg?alt=media&token=d55faffa-23ce-4a48-8adc-45aa1080517c',
		description: 'Fast-food chain with made-to-order burgers, fries & hot dogs, plus free peanuts while you wait.',
		address1: '7635 W Bell Rd',
		category: 'Fast Casual',
		address2: 'Peoria, AZ 85382',
		name: 'Five Guys',
		city: 'Peoria',
	},
	{
		name: 'Red Robin',
		address2: 'Corona, CA 92879',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffamily_style_red_robin.jpg?alt=media&token=132667a9-beb4-4e4b-a562-f30ab9bc476b',
		description: 'Chain for gourmet burgers & other American comfort fare.',
		category: 'Family Style',
		city: 'Corona',
		address1: '419 N McKinley St',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/eshop-c0f71.appspot.com/o/restaurants%2Ffine_dining_gw_fins.jpg?alt=media&token=d64e472b-0948-4763-bd8b-7b0626172bc4',
		category: 'Fine Dining',
		name: 'GW Fins',
		description:
			'Creative, ever-shifting seafood menu featuring fresh catches in a stylish updated warehouse space.',
		city: 'New Orleans',
		address1: '808 Bienville St',
		address2: 'New Orleans, LA 70112',
	},
];


const restaurantCats = [
	{
		category: 'Ethnic',
		color: '#f54242',
		order: 1,
	},
	{
		category: 'Casual Dining',
		color: '#f5a442',
		order: 2,
	},
	{
		category: 'Family Style',
		color: '#f5d142',
		order: 3,
	},
	{
		category: 'Fast Casual',
		color: '#368dff',
		order: 4,
	},
	{
		category: 'Fast Food',
		color: '#41d95d',
		order: 5,
	},
	{
		category: 'Fast Dining',
		color: '#9eecff',
		order: 6,
	},
];

module.exports = {
	categories: restaurantCats,
	restaurants: restaurants,
};