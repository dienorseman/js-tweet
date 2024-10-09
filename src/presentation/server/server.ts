import "colors";
import { CronService } from "../cron/cron-service";
import { CheckService } from "../../domain/use-cases/checks/check-service";
import {LogRepositoryImplementation} from "../../infrastrcuture/repositories/log.repository.implementation";
import {FileSystemDatasource} from "../../infrastrcuture/datasources/file-system.datasource";


const fileSystemLogRepository = new LogRepositoryImplementation(
    new FileSystemDatasource()
)


export class Server {
  public static start() {
    console.log("Server".green + " started...");
    CronService.createJob("*/5 * * * * *", () => {
        new CheckService(
            fileSystemLogRepository,
            undefined,
            undefined,
        ).execute('https://google.com')
    });
  }
}
