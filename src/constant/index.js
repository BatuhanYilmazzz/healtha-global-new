export const emailjsInfo = {
  service_id: "service_s3varic",
  template_id: "template_iztn3zm",
  user_id: "user_pgMNZ7gCLksHJUKI3nlLx",
};

export const mailTemplate = (state, t) => {
  const template = `
  <p>${t("PHONE_NUMBER")} : ${state.phoneNumber}</p>
  <p>${t("E_MAIL")} : ${state.email}</p>
  <p>${t("WEIGHT")} : ${state.weight} kg</p>
  <p>${t("LENGTH")} : ${state.length} cm</p>
  <p>${t("BLOOD_GROUP")} : ${state.bloodType}</p> 
  <p>${t("BEFORE_ILLNESS")} : ${state.beforeilness ? t("YES") : t("NO")} ,${
    state.beforeilnessDesc
  }</p>
  <p>${t("COVID")} : ${state.covid ? t("YES") : t("NO")}</p>
  <p>${t("TENSION")} :  ${state.tension ? t("YES") : t("NO")}</p>
  <p>${t("HEART_DISEASE")} :  ${state.heartDisease ? t("YES") : t("NO")}</p>
  <p>${t("BREATHE_PROBLEM")} :  ${state.breathProblem ? t("YES") : t("NO")}</p>
  <p>${t("ANESTESIK")} :  ${state.anestesik ? t("YES") : t("NO")}</p>
  <p>${t("DIABET")} :  ${state.diabet ? t("YES") : t("NO")}</p>
  <p>${t("TROID")} :  ${state.troid ? t("YES") : t("NO")}</p>
  <p>${t("FELC")} :  ${state.felc ? t("YES") : t("NO")}</p>
  <p>${t("ANXIETY")} :  ${state.anxiety ? t("YES") : t("NO")}</p>
  <p>${t("BLOOD_PROBLEM")} :  ${state.bloodProblem ? t("YES") : t("NO")}</p>
  <p>${t("HIV")} :  ${state.hiv ? t("YES") : t("NO")}</p>
  <p>${t("HEPATIT")} : ${state.hepatit ? t("YES") : t("NO")}</p>
  <p>${t("HEPATIT_DESC")} : ${state.hepatitDesc}</p>
  <p>${t("BLOOD_PROBLEM_2")} : ${state.bloodProblem2 ? t("YES") : t("NO")}</p>
  <p>${t("GOBEK_DISEASE")} : ${state.gobekDisease ? t("YES") : t("NO")}</p>
  <p>${t("CANCER")} : ${state.cancer ? t("YES") : t("NO")}</p>
  <p>${t("ANEMI")} : ${state.anemi ? t("YES") : t("NO")}</p>
  <p>${t("USED_MEDICINE")} : ${state.usedDrugs}</p>
  <p>${t("MEDICINE_ALERJIK")} : ${
    state.medicineAlerjik ? t("YES") : t("NO")
  }</p>
  <p>${t("FOOD_ALERJIK")} : ${state.medicineAlerjik ? t("YES") : t("NO")}</p>
  <p>${t("SMOKE_USAGE")} : ${state.smokeUsage ? t("YES") : t("NO")}</p>
  <p>${t("SMOKE_USAGE_DESC")} : ${state.smokeUsageDesc}</p>
  <p>${t("ALCOHOL_USAGE")} : ${state.alcoholUsage}</p>
  <p>${t("SURGERY_BEFORE")} : ${state.surgeryBefore}</p>
  <p>${t("SURGERY_TIMES")} : ${state.surgeryTimes}</p>
  <p>${t("IMPORTANT_DISEASE")} : ${state.importantDisease}</p>
  <p>${t("BIRTH_CONTROL")} : ${state.birthControl ? t("YES") : t("NO")}</p>
  <p>${t("READ_CLARIFICATION")} : ${
    state.acceptReceiveMail ? t("YES") : t("NO")
  }</p>
  `;

  return template;
};
