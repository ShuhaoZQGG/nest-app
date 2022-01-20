import { Controller, Get, Put } from '@nestjs/common';

@Controller('/api/v1/teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentsByTeacherId() {
    return 'Get Students By TeacherId';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'update student by teacher and student Id';
  }
}
