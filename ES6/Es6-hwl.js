const getStudentInfo = (student) => {
  const { name, grade, subject } = student;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && grade) {
        resolve(`student ${name} is in grade ${grade}`);
      } else {
        reject("Missing student information");
      }
    }, 1000);
  });
};
