module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: "prepared--beta",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "case study" }
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},
	/*
  ** Customize the progress bar color
  */
	loading: { color: "#3B8070" },
	/*
  ** Build configuration
  */
	plugins: [
		{ src: "~/plugins/vue-scrollto", ssr: false },
		{ src: "~/plugins/vue-parallax", ssr: false }
	],

	build: {
		vendor: ["vue-scrollto", "vue-parallax-js"]
		/*
    ** Run ESLint on save
    */
		// extend (config, ctx) {
		//   if (ctx.dev && ctx.isClient) {
		//     config.module.rules.push({
		//       enforce: 'pre',
		//       test: /\.(js|vue)$/,
		//       loader: 'eslint-loader',
		//       exclude: /(node_modules)/
		//     })
		//   }
		// }
	}
};
