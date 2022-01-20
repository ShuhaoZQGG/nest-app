import { Controller, Get, Param } from '@nestjs/common';

@Controller('/api/v1/teachers')
export class TeacherController {
  @Get()
  getTeacher() {
    return 'Get all teachers';
  }
  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `Get Teacher By Id of ${teacherId}`;
  }
}
