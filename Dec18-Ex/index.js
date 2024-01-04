function validation(inputs) {


console.log("Email input ийн урт: ", inputs.email.value.length);
  return false;
}

// бүх input үүдийг inputs-д авч ба
йна
const inputs = document.getElementsByTagName("input");
// хэдэн input байгааг тоолж байна
const howManyInputs = document.getElementsByTagName("input").length;

for (let i = 0; i < howManyInputs; i++) {
  // input бүрт addEventListener өгч change эвэнтийг сонсож байна
  inputs[i].addEventListener("change", () => {
    // input ийн утга өөрчлөгдөх бүрт 3н input үүдийн утгуудыг харж болно
    console.log("Email-ийн утга: ", inputs.email.value);
    console.log("Password-ийн утга: ", inputs.psw.value);
    console.log("repeatPsw-ийн утга: ", inputs.repeatPsw.value);

    // бүх input үүдийг авч зөв эсэхийг шалгах фүнкц дуудаж байна
    if (validation(inputs)) {
      document.querySelector(".registerBtn").disabled = false;
    }
  });
}


if email.includes("@", ".") {
    console.log(true);
} else {
   console.log(false);
}