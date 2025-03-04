<template>
  <div>
    <Table :checkbox="true" :totalItems="totalItems" :items="items" :headers="headers">
      <template v-slot:actions="{ item }">
        <div class="flex gap-1">
          <ButtonIcon icon="fa-pen" />
          <ButtonIcon icon="fa-trash" />
        </div>
      </template>
    </Table>
  </div>
</template>

<script>
import { get } from '@/crud.js'
import Table from '../components/Table.vue'
import ButtonIcon from '../components/ButtonIcon.vue'

export default {
  components: {
    Table,
    ButtonIcon
  },
  data() {
    return {
      headers: [
        { label: 'Nome', value: 'name' },
        { label: 'CEP', value: 'cep' },
        { label: 'Cidade', value: 'city' },
        { label: 'Rua', value: 'street' },
        { label: 'Ações', value: 'actions' }
      ],
      items: [],     
      route: 'hospital',
      loading: true,
      pages: null,
      order: { direction: 'ASC', field: 'name' },
      page: 1,
      totalItems: null,
      actualPage: 1,
      limit: 10,
      filters: []
    }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    async loadItems(page = 1) {
      const query = {
        params: {
          page: page,
          limit: this.limit, 
          order: this.order?.field,
          direction: this.order?.direction
        }
      }

      if (this.filters && this.filters.length > 0) {
        query.params.filters = this.filters
      }

      const response = await get(this.route, query)
      this.items = response.data
      this.totalItems = response.total
      this.pages = Math.ceil(response.total / this.limit)
    },
  }
}
</script>
