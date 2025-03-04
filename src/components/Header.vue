<template>
  <header class="fixed top-0 left-0 w-full h-[10vh] flex justify-center bg-amber-100 bg-opacity-50 z-10">
        <div class="flex w-full max-w-[1200px] justify-between items-center p-3">
            <div class=" items-center justify-center w-auto" @click="this.$router.push('/')">
                <img 
                    class="h-[130px] cursor-pointer" 
                    src="../assets/smallLogo.png" 
                    alt="Logo" 
                />
            </div>

            <div class="flex gap-8 flex-1 justify-center mx-8">
                <HeaderCell 
                    :isActive="handleActiveCell(cell.value)"
                    :title="cell.label" 
                    @click="headerNavigate(cell.value)" 
                    v-for="cell in menuCells" 
                    :key="cell.label"></HeaderCell>
            </div>

            <button @click="headerNavigate('transfer')" class="p-3 font-semibold bg-red-500 w-auto text-white rounded-full hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                Solicitar transferência
            </button>
        </div>
    </header>
</template>

<script>
import HeaderCell from '../components/HeaderCell.vue'

export default {
    components: {
        HeaderCell
    },
    data: () => ({
        activeCell: null,
        menuCells: [
            { value: 'hospital', label: 'Hospital' },
            { value: 'donation', label: 'Doações' },
            { value: 'stock', label: 'Bancos de sangue' },
            { value: 'stats', label: 'Estatísticas' },
            { value: 'quit', label: 'Sair'}
        ]
    }),
    methods: {
        headerNavigate(menu) {
            this.activeCell = menu
            this.$router.push(`/${menu}`)
        },
        handleActiveCell(cell) {
            const currentRouterPath = this.$router.currentRoute.value.fullPath
            if (currentRouterPath === '/' || currentRouterPath === 'transfer') return false
            return this.activeCell && this.activeCell === cell
        }
    }
}
</script>