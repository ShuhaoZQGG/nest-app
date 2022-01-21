import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('/api/v1/teachers')
export class TeacherController {
  @Get()
  getTeacher(): FindTeacherResponseDto[] {
    return 'Get all teachers';
  }
  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return `Get Teacher By Id of ${teacherId}`;
  }
}
