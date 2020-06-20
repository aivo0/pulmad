<script>
    import { stores } from '@sapper/app';
	const { preloading, page, session } = stores();

    const toTitleCase = (phrase) => {
		let res = ""
		if (phrase) {
			res = phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(', ');
		}
		return res;
	};
	const choosePlural = names => names && (names.split(' ').length > 1) ? "Kallid" : "Kallis";

    $: names = $page.query
</script>

<style>
	.container {
		grid-column-start: 2;
		grid-column-end: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1200px;
		background-color: white;
	}
	
	.heroPhoto {
		margin: 0 0;
	}

	.details {
		background-color: rgb(248, 243, 237);
		padding: 60px 0	80px 0;
		margin: 60px 0 60px 0;
		width: 100%;
	}

	.details-columns {
		display: flex;
		flex-wrap: wrap;
	}

	.icons-container {
		display: flex;
		justify-content: center;
		margin-top: 30px;
	}
	.icons {
		display: flex;
		flex-wrap: wrap;
		background-color: white;
	}

	.icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.fig {
		display: flex;
		justify-content: center;
		margin: 20px 40px;
	}

	.fig > img {
		width: auto;
	}
	.text {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10px;
	}

	.confirm {
		padding-bottom: 20px;
		margin-bottom: 20px;
		width: 100%;
		text-align: center;
	}

	h2, h3, p {
		margin: 10px 40px;	
	}

	h1 {
		font-size: 2.8em;
		text-align: center;
		font-weight: 600;
		margin: 0 0 0.5em 0;
	}
	
	h2 {
		margin-bottom: 20px;
	}

	h3 {
		font-weight: 600;
	}

	img {
		width: 100%;
		margin: 0 0 0 0;
	}


	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
			margin-top: 20px;
		}
	}
</style>

<svelte:head>
	<title>Aivo ja Laura pulmad</title>
</svelte:head>


<div class="container">
	<h1>{choosePlural(names.nimi)} {toTitleCase(names.nimi)}</h1>

	<img alt='Kutse pilt' src='kutse.png'>

	<div class="details">
		<h2>Pulmade toimumine</h2>
		<div class="details-columns">
			<div>
				<h3>Laulatus</h3>
				<p>15:30 - Õnnepalee (Pärnu mnt 67, Tallinn)</p>
				<p>15:45 - Pildistamine Õnnepalee trepil.</p>
				<p>Märkus! Juuni seisuga lubatakse laulatuse ruumi kuni 30 inimest!</p>
			</div>
			<div>
				<h3>Pulmapidu</h3>
				<p>17:00 Glehni loss (Vana-Mustamäe 48, Nõmme, Tallinn)</p>
				<p>18:00 Õhtusöök. Järgneb muusika, tants ja trall.</p>
				<p>01:00 Peo orienteeruv lõpp.</p>
			</div>
		
		</div>
		<div class="icons-container">
			<div class="icons">
				<div class="icon">
					<div class="fig">
						<img alt='tseremoonia' src='tseremoonia.png'>
					</div>
					<div class="text">
						<span>Laulatus</span>
						<span>15:30</span>
					</div>
				</div>
				<div class="icon">
					<div class="fig">
						<img alt='tervitusjook' src='tervitusjook.png'>
					</div>
					<div class="text">
						<span>Tervitusjook</span>
						<span>17:00</span>
					</div>
				</div>
				<div class="icon">
					<div class="fig">
						<img alt='Õhtusöök' src='ohtusook.png'>
					</div>
					<div class="text">
						<span>Õhtusöök</span>
						<span>18:00</span>
					</div>
				</div>
				<div class="icon">
					<div class="fig">
						<img alt='Muusika ja tants' src='muusika.png'>
					</div>
					<div class="text">
						<span>Bänd, tantsupõrand</span>
						<span>20:00</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="confirm">
		<h2>Osalemisest teavitamine</h2>
		<p>Äsja möödunud eriollukorra tõttu on pulm on planneritud olema pigem väike. Kutsume vaid sugulasi ning lähedasemaid sõpru.</p>
		<h3>Palun teavita oma osalemisest esimesel võimalusel, soovitavalt vähemasti enne 1. juulit.</h3>

	</div>

	<div class="heroPhoto">
		<img alt='Aivo ja Laura' src='ylemine.jpg'>
	</div>

</div>
