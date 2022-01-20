import { Module } from '@nestjs/common';
import { StudentController } from 'src/api/v1/student/student.controller';
import { StudentTeacherController } from 'src/api/v1/teacher/student.controller';
import { TeacherController } from 'src/api/v1/teacher/teacher.controller';
@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [],
})
export class AppModule {}
