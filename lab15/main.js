var app = new Vue ({
            el:'#app',
            data() {
            	
            	return {
            		data: {}
            	}         	
            },
            beforeMount () {
            	this.function();
            },
            methods: {
            	 async function() {
                		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                		const data =  await response.json();
                		this.data = data;
                		console.log(data)
                	}
           		 }    	 
            });