const BREEDS_URL = 'https://foodish-api.herokuapp.com/api/';

const addFoodish = () => {
	fetch(BREEDS_URL)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			// Handling the Response
			console.log(data);

			const img = document.createElement('img');
			img.src = data.image;
			img.alt = 'foodish';

			document.querySelector('.foodish').appendChild(img);
		});
	// FETCH returns PROMISE (Promise is an object that represents a future value) ==> is going to return in data.
};

document.querySelector('.add_foodDish').addEventListener('click', addFoodish);
