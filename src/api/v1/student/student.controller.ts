import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('api/v1/students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudent(): FindStudentResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): FindStudentResponseDto {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
