import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from '../student/dto/student.dto';

@Controller('/api/v1/teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentsByTeacherId(
    @Param('teacherId') teacherId: string,
  ): FindStudentResponseDto[] {
    return `Get Students By TeacherId of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `update student by teacherId of ${teacherId} and student Id of ${studentId}
    by ${JSON.stringify(body)}`;
  }
}
