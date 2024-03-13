/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

namespace Subjects {
    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();

    export const cTeacher: Teacher =
    {
        firstName: "Tariq",
        lastName: "Svensson",
        experienceTeachingC: 10
    };

    cpp.teacher = cTeacher;
    console.log(cpp.name);
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
    java.teacher = cTeacher;
    console.log(java.name);
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
    react.teacher = cTeacher;
    console.log(react.name);
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}