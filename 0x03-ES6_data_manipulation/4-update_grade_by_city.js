export default function updateStudentGradeByCity(students, city, newGrades) {
    const studentsInCity = students.filter((student) => student.city === city);
    const updateStudents = sudentsInCity.map((student) => {
        const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
        const newGrade = foundGrade ? foundGrade.grade : 'N/A';
        return { ...student, grade: newGrade };
    });
    return updatedStudents;
}