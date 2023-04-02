<template>
    <div class="modal-container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<style scoped>
.modal-container{
  padding-left: 5px;
  border-top: 3px solid blueviolet;  
  border-bottom: 3px solid blueviolet;  
  text-align: center;
}
</style>