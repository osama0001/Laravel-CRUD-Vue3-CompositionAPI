require("./bootstrap");

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "vue";
import routes from "./Routes";
import CompaniesIndex from "./components/companies/CompaniesIndex";

createApp({
    components: {
        CompaniesIndex,
    },
})
    .use(routes)
    .mount("#app");
