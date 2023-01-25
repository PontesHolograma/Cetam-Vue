<script setup lang="ts"></script>

<template>
    <div class="min-h-screen w-full">
        <div class="flex flex-col justify-between">
            <div
                class="w-full h-10 flex items-center bg-gray-800 text-white space-x-5 p-2"
            >
                <div class="bg-teal-600 hover:bg-teal-800 p-2 rounded">
                    <routerLink to="/">Home</routerLink>
                </div>
                <div>
                    <router-link to="/folha">Folha de PGTO</router-link>
                </div>
                <div>
                    <router-link to="/tipo">Tipo</router-link>
                </div>
                <div>
                    <router-link to="/exemploPinia">Exemplo Pinia</router-link>
                </div>
            </div>
            <div class="w-full min-h-screen">
                <RouterView />
            </div>
            <div
                class="bottom-0 w-full grid grid-cols-3 gap-2 bg-gray-800 text-white"
            >
                <div class="text-left">Cetam</div>
                <div class="text-center">2023</div>
                <div class="text-right">Vers 1.0</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
