import { Document, model } from 'mongoose'
import { createDefaultSchema } from '../../../shared/helpers/schema.helper'
import { CourseLogSchema } from '../../course-log/schemas/course-log.schema'
import { ICourseModel } from '../models/course.model'

export interface ICourseDocument extends ICourseModel, Document {}

const CourseSchema = createDefaultSchema({
  userId: String,
  name: String,
  link: String,
  startedDate: Date,
  finishedDate: Date,
  totalDuration: Number,
  duration: Number,
  exercisesDuration: Number,
  isFinished: Boolean,
  logs: Array(CourseLogSchema)
})

const Course = model<ICourseDocument>('course', CourseSchema, 'course')

export { CourseSchema, Course }
