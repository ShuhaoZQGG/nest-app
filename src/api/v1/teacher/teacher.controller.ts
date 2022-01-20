import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1/teachers')
export class TeacherController {
  @Get()
  getTeacher() {
    return 'Get all teachers';
  }
  @Get('/:teacherId')
  getTeacherById() {
    return 'Get Teacher By Id';
  }
}
