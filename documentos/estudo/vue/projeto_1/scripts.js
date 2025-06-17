const selfservice = {
    data(){
        return {
            message: "MCDonalds",
            produtos: [] // ← array vazio, será preenchido pelo Axios
        }
    },
    mounted() {
        axios.get('/produtos.json')
            .then(response => {
                this.produtos = response.data;
            })
            .catch(error => {
                console.error('Erro ao carregar produtos:', error);
            });
    }
};

Vue.createApp(selfservice).mount('#app');
