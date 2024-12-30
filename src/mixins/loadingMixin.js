export default {
  methods: {
    async fetchData(fetchFunction) {
      this.$store.dispatch('setLoading', true); // Устанавливаем isLoading в true
      try {
        await fetchFunction(); // Выполняем функцию загрузки данных
      } finally {
        this.$store.dispatch('setLoading', false); // Устанавливаем isLoading в false
      }
    },
  },
};