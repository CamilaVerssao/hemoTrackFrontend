<template>
  <header class="fixed top-0 left-0 w-full h-[10vh] flex justify-center bg-amber-100 bg-opacity-50 z-10">
            <div class="flex w-full max-w-[1200px] justify-between items-center p-3">
                <div class=" items-center justify-center w-auto">
                    <img 
                        class="h-[130px] cursor-pointer" 
                        src="../assets/smallLogo.png" 
                        alt="Logo" 
                    />
                </div>

                <div class="flex gap-8 flex-1 justify-center mx-8">
                    <button @click="headerNavigate('hospital')" class="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Hospitais</button>
                    <button @click="headerNavigate('donation')" class="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Doações</button>
                    <button @click="headerNavigate('stock')" class="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Bancos de sangue</button>
                    <button class="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Sair</button>
                    <button class="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Estatísticas</button> 
                </div>

                <button class="p-3 font-semibold bg-red-500 w-auto text-white rounded-full hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                    Solicitar transferência
                </button>
            </div>
        </header>
</template>

<script>
export default {
    data: () => {},
    methods: {
        headerNavigate(menu) {
            console.log(menu);
            
            this.$router.push(`/${menu}`)
        }
    }
}
</script>