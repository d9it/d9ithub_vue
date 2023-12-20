<template>
	<div class="inner_pages">
		<navigation></navigation>
		<!-- <div class="breadcume our_services">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1>Page Not Found</h1>
					</div>
				</div>
			</div>
		</div> -->

        <div class="container py-0">
            <div class="pagenot_found">
                <div class="col-md-7 m-auto text-center">
                    <img src="/assets/d9_images/webp/404.webp" alt="" title="">
                    <h3>Oops! Something is wrong.</h3>
                    <p>we are very sorry for inconvience. it looks like you're trying to access a page that either has been deleted or never even existed.</p>
                    <router-link @click.native="setRouteActive('home')"  to="/" v-scroll-to="'#home'" class="btn btn_blue mt-2">Back to Home</router-link>
                </div>
            </div>
        </div>

  		<footerarea></footerarea>	
  	</div>
</template>
    



<script>
	import navigation from '../components/common/navigation';	
    import footerarea from '../components/common/footerarea'

export default {
	components: {
		navigation,
		footerarea
	},
	data: () => ({
		show: false
	}),
	mounted(){
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	},
	methods: {
		setRouteActive(route){
			this.$v_session.set('activeRoute', route)
			this.$store.state.activeRoute = route;
			this.$nextTick(()=> {
				setTimeout(() => {
					const options = {
						easing: 'ease-int',
						lazy: true,
					} 
					this.$scrollTo(`#${route}`, 200, options) 
				},100)
			})
		}
	}  
};



</script>
