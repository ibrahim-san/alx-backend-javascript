const getStudentsByLocation = (students, city) => {
    const arrayObjec = students.filter((dic) => dic.location === city);
    return arrayObjec;
  };
  
export default getStudentsByLocation;
