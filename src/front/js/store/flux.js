import { Actions } from "../component/homelogeado/actions";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			url: "http://127.0.0.1:3001",
			books: null,
			podcasts: null,
			movies: null,
			challenge_21_days: null,
			thanks: [],
			thanks_by_user: null,
			tareas_random: ["Hoy escribele una carta de agradecimiento a alguien que haya influido positivamente en tu vida.","Hoy proponte decirle a una persona amiga algo que aprecias de ella","Hoy mírate en el espejo mientras te lavas los dientes, y piensa en algo que has hecho bien recientemente o algo que te gusta de ti","Hoy sal a caminar y mira cuantas cosas positivas puedes encontrar en tu camino, agudiza tus sentidos al máximo para encontrar las cosas que antes pasaban desapercibidas.","Hoy disponte a comer disfrutando de cada bocado, con todos tus sentidos, despierta tu olfato, observa los colores, siente la temperatura y agradece el privilegio que tienes al gozar de esta comida."],
			random: null,
			thank: {
				list: "",
				date: "",
				users_id: ""
			},
		},
		
		actions: {
		
			getRandom(){
				const {tareas_random} = getStore()
				let index = Math.floor(Math.random() * tareas_random.length)
				setStore({random: tareas_random[index]})
			},

			getChallenge21Days: async () => {
				const { url } = getStore()
				const { challenge_21_days } = getStore();
	
				try {
					const response = await fetch(`${url}/api/challenges/3`, {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const challenge_info = await response.json();
	
					setStore({
						challenge_21_days: challenge_info
					});
					console.log(challenge_21_days);
				} catch (error) {
					console.log(error.message);
				}
			},
			//books-----------------------------------------------------------------------------------------------------
			getBooks: async () => {
				const { url } = getStore()
				try {
					const response = await fetch(`${url}/api/books`, {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const books_info = await response.json();

					setStore({
						books: books_info,
					});
					console.log(books);
				} catch (error) {
					console.log(error.message);
				}
			},
			//movies-----------------------------------------------------------------------------------------------------
			getMovies: async () => {
				const { url } = getStore()
				try {
					const response = await fetch(`${url}/api/movies`, {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const movies_info = await response.json();

					setStore({
						movies: movies_info,
					});
					console.log(movies);
				} catch (error) {
					console.log(error.message);
				}
			},
			//podcast-----------------------------------------------------------------------------------------------------
			getPodcasts: async () => {
				const { url } = getStore()
				try {
					const response = await fetch(`${url}/api/podcasts`, {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const podcasts_info = await response.json();

					setStore({
						podcasts: podcasts_info,
					});
					console.log(podcasts);
				} catch (error) {
					console.log(error.message);
				}
			},
			//thanks-----------------------------------------------------------------------------------------------------
			addThank: async () => {
				const { url } = getStore()
				const { thank } = getStore()
				console.log(thank)
				const options = {
					method: "POST",
					body: JSON.stringify({ ...thank }),
					headers: {
						"Content-Type": "application/json",
					},
				}
				try {
					const response = await fetch(
						`${url}/api/thanks`, options
					);
					let data_thank = await response.json()


				} catch (error) {
					console.log(error);
				}

			},

			getThanks: async () => {
				const { url } = getStore()
				const { thanks } = getStore

				try {
					const response = await fetch(`${url}/api/thanks`, {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const thanks_info = await response.json();

					setStore({
						thanks: thanks_info,
					});
					console.log(thanks);
				} catch (error) {
					console.log(error.message);
				}
			},

			getThanksByUser: async () => {
				const { url } = getStore()
				const { thanks_by_user } = getStore();

				try {
					const response = await fetch(`${url}/api/thanks/${id}`, {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const thanks_user = await response.json();

					setStore({
						thanks_by_user: thanks_user,
					});
					console.log(thanks_by_user);
				} catch (error) {
					console.log(error.message);
				}
			},

			deleteThank: async () => {
				const { url } = getStore()
				const options = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				};
				try {
					const response = await fetch(`${url}/api/thanks/${id}`,
						options
					);
					if (response.status == 200) {
						setStore({ thanks: thanks.delete.thanks.id });
					}
				} catch (error) {
					console.log(error);
				}
			},

			handleChange(e) {
				const { thank } = getStore()
				e.preventDefault();
				thank.list = e.target.value
				setStore({
					thank: { ...thank }
				})
				console.log(getStore().thank)
			},

			handleSubmit(e) {
				e.preventDefault();
				const { thanks } = getStore()
				const { thank } = getStore()
				let setchange = { ...thank }
				thank.users_id = 10
				setStore({
					thanks: [...thanks, setchange]
				})
				e.target.reset()
				getActions().addThank()
				console.log(getStore().thanks)
			},

			handleDelete(i) {
				const { thanks } = getStore()
				thanks.splice(i, 1);
				setStore({ thanks: thanks });
			},


		},
		addThank: async () => {
			const { url } = getStore()
			const { thank } = getStore()
			console.log(thank)
			const options = {
				method: "POST",
				body: JSON.stringify({ ...thank }),
				headers: {
					"Content-Type": "application/json",
				},
			}
			try {
				const response = await fetch(
					`${url}/api/thanks`, options
				);
				let data_thank = await response.json()

			} catch (error) {
				console.log(error);
			}

		},
		//challenges-----------------------------------------------------------------------------------------------------

	

		/*addFavorite(fav) {
				const { favorite } = getStore();
				let listafav = [...favorite, fav];
				setStore({ favorite: listafav });
			},
			handleDelete(i) {
				const { favorite } = getStore()
				favorite.splice(i, 1);
				setStore({ favorite: favorite });
			},
	
			/*<ul className="dropdown-menu"> menu
					  
					  {!!favorite &&
						favorite.length > 0 &&
						favorite.map((fav, index) => {
						  console.log(favorite)
						  return (
							<Favorites fav={fav} i={index}/>
						  );
						})}
					</ul><ul className="dropdown-menu">
					  
					  {!!favorite &&
						favorite.length > 0 &&
						favorite.map((fav, index) => {
						  console.log(favorite)
						  return (
							<Favorites fav={fav} i={index}/>
						  );
						})}
					</ul>*/

	};
};

export default getState;
