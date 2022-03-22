<template>
     <div class="loadData"></div>
</template>
<script>
</script>
<style lang="scss">
:root {
    --background-color: #2c3e50;
    --border-color: #7591AD;
    --text-color: #34495e;
    --color1: #81ecec;
    --color2: #fab1a0;
    --color3: #ffeaa7;
    --color4: #55efc4;
}

.loadData {
    position: relative;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
}

.loadData::after,
.loadData::before {
    position: absolute;
    content: '';
    top:50%;
    left: 50%;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    transform: translate(-50%,-50%);
    animation: animate 1s ease-in-out infinite;
}

.loadData::after {
    box-shadow: 15px 15px var(--color1), -15px -15px var(--color2);
}

.loadData::before {
    box-shadow: 15px 15px var(--color3), -15px -15px var(--color4);
    transform: translate(-50%,-50%) rotate(90deg);
}

@keyframes animate{
    50%{
        width: 40px;
    }
}
</style>