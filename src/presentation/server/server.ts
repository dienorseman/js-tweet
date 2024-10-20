import "colors";
import { CronService } from "../cron/cron-service";
import { CheckService } from "../../domain/use-cases/checks/check-service";
import { LogRepositoryImplementation } from "../../infrastrcuture/repositories/log.repository.implementation";
import { FileSystemDatasource } from "../../infrastrcuture/datasources/file-system.datasource";
import { envs } from "../../config/plugins/envs.plugin";


const fileSystemLogRepository = new LogRepositoryImplementation(
    new FileSystemDatasource()
)

export class Server {

    public static start() {
        console.log("Server".green + " started...");
        // Send email
        console.log( envs.MAILER_EMAIL, envs.MAILER_SECRET ) 
        //CronService.createJob("*/5 * * * * *", () => {
        //    new CheckService(
        //        fileSystemLogRepository,
        //        undefined,
        //        undefined,
        //    ).execute('https://google.com')
        //});
    }
}
