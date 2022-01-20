import { Controller, Get, Post, Put, Param } from '@nestjs/common';

@Controller('api/v1/students')
export class StudentController {
  @Get()
  getStudent() {
    return 'All Studentss';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student with Id of ${studentId}`;
  }

  @Post()
  createStudent() {
    return 'Post a new Student';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'Put a student';
  }
}
