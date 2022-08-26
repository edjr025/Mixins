export default{
    data: () => ({
        itens: [],
        item: '',
        titulo: 'padrão'
    }),
    methods: {
        adicionarItem(){
            this.itens.push(this.item)
            this.item = ''
        }
    },
    created(){
        console.log('lista mixin criada');
    }
}