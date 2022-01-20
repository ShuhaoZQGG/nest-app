import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('api/v1/students')
export class StudentController {
  @Get()
  getStudent() {
    return 'All Studentss';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Get Student By Id';
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
