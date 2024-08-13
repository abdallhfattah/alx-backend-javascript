const getStudentIdsSum = (students) => {
  return students.reduce((id_sum, student) => id_sum + student.id , 0);
}

export default getStudentIdsSum();
