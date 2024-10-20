import { Server } from "./presentation/server/server";
import { envs } from "./config/plugins/envs.plugin";

(async () => {
    main();
})();

function main() {
    console.clear();
    console.log(envs.PORT)
    Server.start();
}
