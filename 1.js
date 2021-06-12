var vue = new Vue({
    el:"#vue",
    data:{
        mapisshow:true,
        infoisshow:false,
        galleryisshow:false,
    },
    methods:{
        showmap:function (){
            this.mapisshow = true,
            this.galleryisshow = false,
            this.infoisshow = false
        },
        showinfo:function (){
            this.infoisshow = true,
            this.mapisshow = false,
            this.galleryisshow = false
        },
        showgallery:function (){
            this.galleryisshow = true,
            this.mapisshow = false,
            this.infoisshow = false
        },
    },
})