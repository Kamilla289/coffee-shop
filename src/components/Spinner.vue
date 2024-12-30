<template>
  <div class="spinner-overlay">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
};
</script>

<style scoped>
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}

.spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3cba54;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>