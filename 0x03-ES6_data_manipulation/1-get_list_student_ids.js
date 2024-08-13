const getListStudentIds = (listStudents) => {
  if (!(listStudents instanceof Array)) return [];
  return listStudents.map((student) => student.id);
};

export default getListStudentIds();
