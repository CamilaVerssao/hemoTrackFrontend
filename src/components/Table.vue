<template>
    <div class="relative overflow-x-auto border border-red-700 sm:rounded-lg p-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-4" v-if="checkbox">
                        <div class="flex items-center hidden" >
                            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3" v-for="header in this.headers" :key="header.label">
                        {{ header.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{'bg-blue-300 bg-opacity-20': item.active, 'hover:bg-gray-50 dark:hover:bg-gray-600' : !item.active}" v-for="(item, index) in this.mappedItems" :key="index">
                    <td class="w-4 p-4 peer-checked:bg-red-500" v-if="checkbox" >
                        <div class="flex items-center">
                            <input 
                                id="checkbox-table-search-1" 
                                type="checkbox" 
                                v-model="item.active"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-2 dark:focus:ring-red-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 peer">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>

                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" v-for="header in this.headers" :key="header.label">
                        <p v-if="header.value === 'actions'">
                            <slot name="actions" :item="item">
                            </slot>
                        </p>
                        <template v-else>
                            {{ item[header.value] }}
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation" v-if="this.totalItems > 0">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">{{startItem}} - {{endItem}}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{totalItems}}</span></span>
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a :class="currentPage <= 1 ? 'bg-gray-200 cursor-default text-gray-400' : 'hover:bg-gray-100 hover:text-gray-700'" href="#" @click.prevent="changePage(currentPage - 1)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>

                <template v-for="page in pagesToShow" :key="page">
                    <li v-if="page <= totalPages">
                        <a href="#" :class="{'text-blue-600 bg-blue-50': page === currentPage, 'text-gray-500': page !== currentPage}" @click.prevent="changePage(page)" class="flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {{ page }}
                        </a>
                    </li>
                </template>  

                <li >
                    <a href="#" @click.prevent="changePage(currentPage + 1)" :class="currentPage >= totalPages ? 'bg-gray-200 cursor-default text-gray-400': 'hover:bg-gray-100 hover:text-gray-700'" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>          
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data: () => ({
        currentPage: 1,
        selectedItems: [],
        mappedItems: [],
        checkedItems: []
    }),
    props: {
        items: {
            type: Array,
            default: []
        },
        headers: {
            type: Array,
            default: []
        },
        totalItems: {
            type: Number,
            default: 0
        },
        limit: {
            type: Number,
            default: 10
        },
        checkbox: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.limit);
        },
        startItem() {
            return (this.currentPage - 1) * this.limit + 1;
        },
        endItem() {
            return Math.min(this.currentPage * this.limit, this.totalItems);
        },
        pagesToShow() {
            let pagesBefore = 2
            if (this.currentPage === this.totalPages - 1) {
                pagesBefore = 3
            }
            else if (this.currentPage === this.totalPages) {
                pagesBefore = 4
            }
            const start = Math.max(1, this.currentPage - pagesBefore)
            const end = Math.min(this.totalPages, start + 4)
            const pages = [];

            for (let i = start; i <= end; i++) {
                pages.push(i)
            }

            return pages
        }
    },
    watch: {
        items: {
            handler() {
                if (this.items.length > 0 && this.checkbox) {
                    this.mappedItems = this.items.map(item => ({ ...item, active: false }))
                }
            },
            deep: true
        },
        mappedItems: {
            handler() {
                this.checkedItems = this.mappedItems.filter(item => item.active)
            },
            deep: true
        }
    }
}
</script>

