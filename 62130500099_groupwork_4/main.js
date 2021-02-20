const app = {
    data(){
        return{
            pics: [
                {id: 0, img:'./images/Mei.jpg', alt:'Pic1', named:'Mei', done: false},
                {id: 1, img:'./images/rita.png', alt:'Pic2', named:'Rita', done: false},
                {id: 2, img:'./images/fuhua.png', alt:'Pic2', named:'Fuhua', done: false}
            ],

            show: true,
            inputSearch: '',
            currentImg: -1,
            noPhoto: false,
            bgBlack: false,
            close: false
        }
    },

    methods: {
        heart(index){
            this.pics[index].done = !this.pics[index].done
        },
        showSearchBox() {
            this.show = !this.show;
            this.inputSearch= '' ;
        },
        bigPic(index) {
            this.close = true;
            this.currentImg = index;
        }
    },

    computed: {
        numPic() {
            return this.pics.filter(t => !t.false).length
        },
        search() {
            this.noPhoto = false;
            
            searchPic = this.pics.filter(searchShow =>{return searchShow.named.toLowerCase().includes(this.inputSearch.toLowerCase())});
            if(searchPic.length == 0){
                this.noPhoto = true;
            }else{
                return searchPic;
            }
        }
    }
    
}
var mountedApp = Vue.createApp(app).mount('#app');