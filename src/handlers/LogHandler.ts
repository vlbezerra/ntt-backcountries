import { Handler, BeforeRead} from "cds-routing-handlers";
import { CountriesService } from "../entities/entities";

/**
 * Book handler.
 *
 * @export
 * @class BookHandler
 */
@Handler(CountriesService.SanitizedEntity.Logs)
export class LogsHandler {
    @BeforeRead()
    public async checkAuth() {}
    @BeforeRead()
    public async doSomeOtherThings() {}
}