export default {
    methods: {
        removerItem(){
            this.itens.pop()
        }
    },
    created(){
        console.log('removerItemLista criado');
    }
}