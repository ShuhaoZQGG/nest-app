import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

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
  createStudent(@Body() body) {
    return `Post a new Student with the following Data ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Put a student with Id of ${studentId} and 
    Data of ${JSON.stringify(body)}`;
  }
}
