import { Controller, Get, Put, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';

@Controller('/api/v1/teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService){}
  @Get()
  getStudentsByTeacherId(
    @Param('teacherId') teacherId: string,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  // Update student's teacherId
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): StudentResponseDto {
    return this.studentService.updateStudentTeacher(studentId, teacherId);
  }
}
