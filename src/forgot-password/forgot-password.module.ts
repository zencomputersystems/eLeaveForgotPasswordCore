import { ForgotPasswordController } from "./forgot-password.controller";
import { getModuleHttp } from "../common/helper/basic-function.function";
import { Module } from "@nestjs/common";
import { QueryParserService } from "../common/helper/query-parser.service";
import { ForgotPasswordService } from "./forgot-password.service";
import { UserDbService, ForgotPasswordDbService, UserAdminDbService } from "../common/db/table.db.service";
import { EmailNodemailerService } from "../common/helper/email-nodemailer.service";
import { ChangePasswordService } from "./change-password.service";
import { DBService } from './db.service';

@Module({
  providers: [
    QueryParserService,
    ForgotPasswordService,
    UserDbService,
    EmailNodemailerService,
    ForgotPasswordDbService,
    UserAdminDbService,
    ChangePasswordService,
    DBService
  ],
  controllers: [
    ForgotPasswordController
  ],
  imports: [
    getModuleHttp()
  ]
})
export class ForgotPasswordModule { }