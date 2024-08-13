const updateStudentGradeByCity = (students, city, list) => {
  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const filterGrade = list.filter((grade) => grade.studentId === student.id);
    if (filterGrade.length > 0) {
      return {
        ...student,
        grade: filterGrade[0].grade,
      };
    }
    return {
      ...student,
      grade: "N/A",
    }
  });
}

export default updateStudentGradeByCity;
