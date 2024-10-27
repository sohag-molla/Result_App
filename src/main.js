name.forEach((item, index) => {
  console.log(`
        Name : ${item}
        Roll : ${roll[index]}
        Reg : ${reg[index]}
        =================================
        sub -> Mark -> Grade -> GPA
        Bangla -> ${ban[index]} -> ${getGrade(ban[index])} -> ${getGpa(
    ban[index]
  )};

        English -> ${eng[index]} -> ${getGrade(eng[index])} -> ${getGpa(
    eng[index]
  )};

        Math -> ${math[index]} -> ${getGrade(math[index])} -> ${getGpa(
    math[index]
  )};

        Science -> ${sien[index]} -> ${getGrade(sien[index])} -> ${getGpa(
    sien[index]
  )};

        Social Science-> ${social[index]} -> ${getGrade(
    social[index]
  )} -> ${getGpa(social[index])};

        Islam -> ${islam[index]} -> ${getGrade(islam[index])} -> ${getGpa(
    islam[index]
  )};
  =================================================

  Final Result : ${
    ispassed(
      ban[index],
      eng[index],
      math[index],
      sien[index],
      social[index],
      islam[index]
    )
      ? "passed"
      : "Failed"
  }
   Grade : ${getFinalGpa(
     ban[index],
     eng[index],
     math[index],
     sien[index],
     social[index],
     islam[index]
   )};
        `);
});
