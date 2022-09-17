/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
	'sakura_leaves',
	/* from default particles_js to sakura_leaves */

	{
		particles: {
			number: {
				/* from default 80 to 800 */
				value: 800,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				/* 
             From default #ffffff
             I changed it to #f7a2a2
             to match the color of sakura
            */
				value: '#fcc9b9',
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000',
				},
				polygon: {
					nb_sides: 5,
				},
				image: {
					src: 'img/github.svg',
					width: 100,
					height: 100,
				},
			},
			opacity: {
				/* from default 0.5 I changed it to 0.8 */
				value: 0.8,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				/* from default 5 I changed it to 3 */
				value: 3,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				/* From default true I changed it to false
               to remove the connecting lines
            */
				enable: false,
				distance: 150,
				color: '#ffffff',
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 6,
				/* from default none I changed it to bottom */
				direction: 'bottom',
				random: false,
				straight: false,
				out_mode: 'out',
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: true,
					mode: 'repulse',
				},
				onclick: {
					enable: true,
					mode: 'push',
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3,
				},
				repulse: {
					/* from default 200 I changed it to 150 */
					distance: 150,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
		config_demo: {
			hide_card: false,
			background_color: '#b61924',
			background_image: '',
			background_position: '50% 50%',
			background_repeat: 'no-repeat',
			background_size: 'cover',
		},
	}
);
