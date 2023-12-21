import { ICourse } from '../models/course';

export const mockedCourses: ICourse[] = [
  {
    id: 1,
    title: 'Introduction to Angular',
    date: '2023-01-15',
    creationDate: new Date('2023-01-01'),
    duration: 120,
    description: 'Learn the basics of Angular framework.',
  },
  {
    id: 2,
    title: 'React Fundamentals',
    date: '2023-02-10',
    creationDate: new Date('2023-01-15'),
    duration: 90,
    description: 'A comprehensive guide to React development.',
  },
  {
    id: 3,
    title: 'Node.js for Beginners',
    date: '2023-03-05',
    creationDate: new Date('2023-02-01'),
    duration: 180,
    description: 'Get started with server-side JavaScript using Node.js.',
  },
  {
    id: 4,
    title: 'TypeScript Mastery',
    date: '2023-04-20',
    creationDate: new Date('2023-03-10'),
    duration: 150,
    description: 'Master TypeScript and enhance your JavaScript skills.',
  },
  {
    id: 5,
    title: 'RESTful API Design',
    date: '2023-05-15',
    creationDate: new Date('2023-04-01'),
    duration: 240,
    description: 'Design scalable and maintainable RESTful APIs.',
  },
];
