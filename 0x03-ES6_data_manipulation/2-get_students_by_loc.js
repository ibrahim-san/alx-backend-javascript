const getStudentsByLocation = (students, city) => {
    const arrayObjec = students.filter((func) => func.location === city);
    return arrayObjec;
  };
  
  export default getStudentsByLocation;
