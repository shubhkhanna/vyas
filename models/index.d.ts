import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CoursesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Courses {
  readonly id: string;
  readonly courseName: string;
  readonly courseDescription: string;
  readonly courseLink: string;
  readonly courseRating?: number;
  readonly courseDuration: string;
  readonly courseCategory: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Courses, CoursesMetaData>);
  static copyOf(source: Courses, mutator: (draft: MutableModel<Courses, CoursesMetaData>) => MutableModel<Courses, CoursesMetaData> | void): Courses;
}