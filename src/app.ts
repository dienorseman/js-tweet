import { Server } from "./presentation/server/server";

(async () => {
  main();
})();

function main() {
  console.clear();
  Server.start();
}
