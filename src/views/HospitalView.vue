<template>
    <div>
        <Table checkbox :items="[{teste: 'cuzinho', label2: 'merdinha'}]" :headers="[{label: 'teste', value: 'valor'}, {label: 'label2', value: 'value2'}, {label: 'actions', value: 'acao icone'}]" />
    </div>
</template>

<script>
import Table from '../components/Table.vue'
export default {
    components: {
        Table
    },
    data: () => ({
        itemsPerPage: 5,
        headers: [
            {
                title: 'Dessert (100g serving)',
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: 'Calories', key: 'calories', align: 'end' },
            { title: 'Fat (g)', key: 'fat', align: 'end' },
            { title: 'Carbs (g)', key: 'carbs', align: 'end' },
            { title: 'Protein (g)', key: 'protein', align: 'end' },
            { title: 'Iron (%)', key: 'iron', align: 'end' },
        ],
        serverItems: [],  // Dados a serem mostrados na tabela
        loading: true,
        totalItems: 0,    // Total de itens para a paginação
    }),
    mounted() {
        // Simulando o carregamento inicial
        this.loadItems({ page: 1, itemsPerPage: this.itemsPerPage });
    },
    methods: {
        // Método para carregar os dados da tabela
        loadItems({ page, itemsPerPage }) {
            this.loading = true;
            setTimeout(() => {
                // Simulando um carregamento de dados do servidor
                const allItems = [
                    { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1' },
                    { name: 'Ice Cream Sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1' },
                    { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0, iron: '7' },
                    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8' },
                    { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16' },
                    { name: 'Jelly Bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0' },
                    { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0.0, iron: '0' },
                    { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45' },
                    { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22' },
                ];

                // Calculando o índice de início e fim com base na paginação
                const start = (page - 1) * itemsPerPage;
                const end = start + itemsPerPage;

                // Atualizando os itens da tabela
                this.serverItems = allItems.slice(start, end);
                this.totalItems = allItems.length;  // Total de itens para a paginação

                this.loading = false;
            }, 1000);  // Simulando um delay de carregamento
        }
    }
}
</script>
