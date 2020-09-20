const createClassRoom = (numbersOfStudents) => {
  const studentSeat = (seat) => {
    return () => {
      return seat;
    };
  };
  const students = [];
  for (let capacity = 0; capacity < numbersOfStudents; capacity++) {
    students[capacity] = studentSeat(capacity + 1);
  }
  return students;
};
const classRoom = createClassRoom(10);
