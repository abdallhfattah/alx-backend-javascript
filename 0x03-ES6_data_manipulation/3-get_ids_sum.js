const getStudentIdsSum = (students) => students.reduce((ids, student) => ids + student.id, 0);

export default getStudentIdsSum;
