import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { validStudentMiddleware } from 'src/common/middleware/validStudent.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log("this middleware was called");
    consumer.apply(validStudentMiddleware).forRoutes({
      path: 'api/v1/students/:studenId',
      method: RequestMethod.GET
    });
    consumer.apply(validStudentMiddleware).forRoutes({
      path: 'api/v1/students/:studenId',
      method: RequestMethod.PUT
    });
  }
}
