import { Controller, Get, Put, Param, Body } from '@nestjs/common';

@Controller('/api/v1/teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentsByTeacherId(@Param('teacherId') teacherId: string) {
    return `Get Students By TeacherId of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ) {
    return `update student by teacherId of ${teacherId} and student Id of ${studentId}
    by ${JSON.stringify(body)}`;
  }
}
