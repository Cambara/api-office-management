import { Document } from 'mongoose'
import { createDefaultSchema } from '../../../shared/helpers/schema.helper'
import { ICourseLogModel } from '../models/course-log.model'

export interface ICourseLogDocument extends ICourseLogModel, Document {}

const CourseLogSchema = createDefaultSchema({
  day: Date,
  name: String,
  link: String,
  startedDate: Date,
  finishedDate: Date,
  totalDuration: Number,
  duration: Number,
  exercisesDuration: Number,
  isFinished: Boolean
})

export { CourseLogSchema }
