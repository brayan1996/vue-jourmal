<template>
    <navbar></navbar>
    <div class="d-flex">
        <div class="col-4">
            <entry-list></entry-list>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
   
</template>
<script>
import Navbar from '../components/Navbar.vue'
import { defineAsyncComponent } from 'vue'
export default {
    components:{  
        Navbar,
        EntryList: defineAsyncComponent( ()=>import( '../components/EntryList.vue' ))
    }
}
</script>