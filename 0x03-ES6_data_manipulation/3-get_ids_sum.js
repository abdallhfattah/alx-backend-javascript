const getStudentIdsSum = (students) => students.reduce((id_sum, student) => id_sum + student.id, 0);

export default getStudentIdsSum;
