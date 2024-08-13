const getStudentIdsSum = (students) => {
  return students.reduce((ids_sum , id_val) => ids_sum + id_val);
}

export default getStudentIdsSum();
