import { Module } from '@nestjs/common';
import { StudentModule } from 'src/api/v1/student/student.module';
import { TeacherModule } from 'src/api/v1/teacher/teacher.module';

@Module({
  imports: [TeacherModule, StudentModule],
})
export class AppModule {}
