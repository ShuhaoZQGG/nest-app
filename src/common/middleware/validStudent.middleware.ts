import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from 'src/db';

@Injectable()
export class validStudentMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const studentId = req.params.studentId;
    const studentExists = students.some((student) => student.id === studentId);
    if (!studentExists) {
      throw new HttpException("Student not found", 400);
    }
    next();
  }
}