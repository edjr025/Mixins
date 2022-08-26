<template>
    <div>
        <h3>{{titulo}}</h3>
        <input type="text" placeholder="Nome do Game" v-model="item">
        <button type="button" @click="adicionarItem">Adicionar</button>
        <button type="button" @click="removerItem">Remover Item</button>
        <br>
        <ul>
            <li v-for="(item, indice) in itens" :key="indice">{{item}}</li>
        </ul>
    </div>
</template>

<script>
 import ListaMixin from "@/mixins/ListaMixin";
 import RemoverItemLista from "@/mixins/RemoverItemLista";
    export default{
        name: 'ListaVideoGames',
        data:() => ({
            titulo: 'Lista Video Games'
        }),
        mixins: [ListaMixin, RemoverItemLista]
    }
</script>