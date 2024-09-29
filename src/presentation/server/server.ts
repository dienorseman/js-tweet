import "colors";
import { CronSerive } from "../cron/cron-service";
import { CheckService } from "../../domain/use-cases/checks/check-service";
export class Server {
  public static start() {
    console.log("Server".green + " started...");
    CronSerive.createJob("*/5 * * * * *", () => {
        new CheckService(
            () => console.log('Success'),
            (error) => console.log(error) 
        ).excecute('https://google.com')
    });
  }
}
