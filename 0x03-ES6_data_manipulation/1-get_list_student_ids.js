export default function getStudentsLIstIds(studentsList) {
    if (!Array.isArray(studentsList)) {
        return [];
    }
    return studentsList.map(students => students.id)
}