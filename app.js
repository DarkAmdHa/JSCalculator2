//When "Calculate" pressed:
document
  .querySelector(".calculate_button")
  .addEventListener("click", calculateValues);
document
  .querySelector(".calculate_button")
  .addEventListener("click", displayTable);

//When saveAsPDF is pressed
document.querySelector(".save-pdf").addEventListener("click", saveAsPDF);

//When DOM loads, calculate initial values(0.0)
document.addEventListener("DOMContentLoaded", calculateValues());
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".table-container").style.display = "none";
  document.querySelector(".save-pdf").style.display = "none";
});

//Calculate and displays all the  values inseide the table when "calculate" clicked, or when the unirs are changed from the dropdown menu
function calculateValues(e) {
  const input = document.querySelectorAll(".input");
  const select = document.getElementById("type");
  const unit = document.querySelectorAll(".unit");

  const ptA_EC = 0.322;
  const ptB_EC = 0.255;
  const blm_EC = 0.18;

  const ptA_veg = 4.04;
  const ptB_veg = 2.7;

  const ptA_flow = 3.25;
  const ptB_flow = 2.18;
  const blm_flow = 2.56;

  const ptB_mLc = 570 / 3785;
  const blm_mLc = 667 / 3785;

  let veg1_ptA_out2 = (input[0].value / 2) * (ptA_EC * ptA_veg);
  let veg2_ptA_out2 = (input[1].value / 2) * (ptA_EC * ptA_veg);
  let veg3_ptA_out2 = (input[2].value / 2) * (ptA_EC * ptA_veg);
  let flow1_ptA_out2 = (input[3].value / 2) * (ptA_EC * ptA_flow);
  let flow2_ptA_out2 = (input[4].value / 2) * (ptA_EC * ptA_flow);
  let flow3_ptA_out2 = (input[5].value / 2) * (ptA_EC * ptA_flow);
  let flow4_ptA_out2 = (input[6].value / 2) * (ptA_EC * ptA_flow * 0.95);
  let flow5_ptA_out2 = (input[7].value / 2) * (ptA_EC * ptA_flow * 0.95);
  let flow6_ptA_out2 = (input[8].value / 2) * (ptA_EC * ptA_flow * 0.9);
  let flow7_ptA_out2 = (input[9].value / 2) * (ptA_EC * ptA_flow * 0.9);

  let veg1_ptB_out2 = (input[0].value / 2) * (ptB_EC * ptB_veg);
  let veg2_ptB_out2 = (input[1].value / 2) * (ptB_EC * ptB_veg);
  let veg3_ptB_out2 = (input[2].value / 2) * (ptB_EC * ptB_veg);
  let flow1_ptB_out2 = (input[3].value / 2) * (ptB_EC * ptB_flow);
  let flow2_ptB_out2 = (input[4].value / 2) * (ptB_EC * ptB_flow);
  let flow3_ptB_out2 = (input[5].value / 2) * (ptB_EC * ptB_flow);
  let flow4_ptB_out2 = (input[6].value / 2) * (ptB_EC * ptB_flow * 0.95);
  let flow5_ptB_out2 = (input[7].value / 2) * (ptB_EC * ptB_flow * 0.95);
  let flow6_ptB_out2 = (input[8].value / 2) * (ptB_EC * ptB_flow * 0.9);
  let flow7_ptB_out2 = (input[9].value / 2) * (ptB_EC * ptB_flow * 0.9);

  let veg1_blm_out2 = 0;
  let veg2_blm_out2 = 0;
  let veg3_blm_out2 = 0;
  let flow1_blm_out2 = (input[3].value / 2) * (blm_EC * blm_flow * 0.95);
  let flow2_blm_out2 = (input[4].value / 2) * (blm_EC * blm_flow * 0.95);
  let flow3_blm_out2 = (input[5].value / 2) * (blm_EC * blm_flow * 0.95);
  let flow4_blm_out2 = (input[6].value / 2) * (blm_EC * blm_flow * 1.1);
  let flow5_blm_out2 = (input[7].value / 2) * (blm_EC * blm_flow * 1.1);
  let flow6_blm_out2 = (input[8].value / 2) * (blm_EC * blm_flow * 1.15);
  let flow7_blm_out2 = (input[9].value / 2) * (blm_EC * blm_flow * 1.15);

  document.querySelector(".veg1_pA_out2").value = veg1_ptA_out2.toFixed(2);
  document.querySelector(".veg2_pA_out2").value = veg2_ptA_out2.toFixed(2);
  document.querySelector(".veg3_pA_out2").value = veg3_ptA_out2.toFixed(2);
  document.querySelector(".flow1_pA_out2").value = flow1_ptA_out2.toFixed(2);
  document.querySelector(".flow2_pA_out2").value = flow2_ptA_out2.toFixed(2);
  document.querySelector(".flow3_pA_out2").value = flow3_ptA_out2.toFixed(2);
  document.querySelector(".flow4_pA_out2").value = flow4_ptA_out2.toFixed(2);
  document.querySelector(".flow5_pA_out2").value = flow5_ptA_out2.toFixed(2);
  document.querySelector(".flow6_pA_out2").value = flow6_ptA_out2.toFixed(2);
  document.querySelector(".flow7_pA_out2").value = flow7_ptA_out2.toFixed(2);

  document.querySelector(".veg1_pB_out2").value = veg1_ptB_out2.toFixed(2);
  document.querySelector(".veg2_pB_out2").value = veg2_ptB_out2.toFixed(2);
  document.querySelector(".veg3_pB_out2").value = veg3_ptB_out2.toFixed(2);
  document.querySelector(".flow1_pB_out2").value = flow1_ptB_out2.toFixed(2);
  document.querySelector(".flow2_pB_out2").value = flow2_ptB_out2.toFixed(2);
  document.querySelector(".flow3_pB_out2").value = flow3_ptB_out2.toFixed(2);
  document.querySelector(".flow4_pB_out2").value = flow4_ptB_out2.toFixed(2);
  document.querySelector(".flow5_pB_out2").value = flow5_ptB_out2.toFixed(2);
  document.querySelector(".flow6_pB_out2").value = flow6_ptB_out2.toFixed(2);
  document.querySelector(".flow7_pB_out2").value = flow7_ptB_out2.toFixed(2);

  document.querySelector(".veg1_blm_out2").value = veg1_blm_out2.toFixed(2);
  document.querySelector(".veg2_blm_out2").value = veg2_blm_out2.toFixed(2);
  document.querySelector(".veg3_blm_out2").value = veg3_blm_out2.toFixed(2);
  document.querySelector(".flow1_blm_out2").value = flow1_blm_out2.toFixed(2);
  document.querySelector(".flow2_blm_out2").value = flow2_blm_out2.toFixed(2);
  document.querySelector(".flow3_blm_out2").value = flow3_blm_out2.toFixed(2);
  document.querySelector(".flow4_blm_out2").value = flow4_blm_out2.toFixed(2);
  document.querySelector(".flow5_blm_out2").value = flow5_blm_out2.toFixed(2);
  document.querySelector(".flow6_blm_out2").value = flow6_blm_out2.toFixed(2);
  document.querySelector(".flow7_blm_out2").value = flow7_blm_out2.toFixed(2);

  document.querySelector(".veg1_total").innerText = (
    Number(veg1_ptA_out2) + Number(veg1_ptB_out2)
  ).toFixed(2);
  document.querySelector(".veg2_total").innerText = (
    Number(veg2_ptA_out2) + Number(veg2_ptB_out2)
  ).toFixed(2);
  document.querySelector(".veg3_total").innerText = (
    Number(veg3_ptA_out2) + Number(veg3_ptB_out2)
  ).toFixed(2);
  document.querySelector(".flow1_total").innerText = (
    Number(flow1_ptA_out2) +
    Number(flow1_ptB_out2) +
    Number(flow1_blm_out2)
  ).toFixed(2);
  document.querySelector(".flow2_total").innerText = (
    Number(flow2_ptA_out2) +
    Number(flow2_ptB_out2) +
    Number(flow2_blm_out2)
  ).toFixed(2);
  document.querySelector(".flow3_total").innerText = (
    Number(flow3_ptA_out2) +
    Number(flow3_ptB_out2) +
    Number(flow3_blm_out2)
  ).toFixed(2);
  document.querySelector(".flow4_total").innerText = (
    Number(flow4_ptA_out2) +
    Number(flow4_ptB_out2) +
    Number(flow4_blm_out2)
  ).toFixed(2);
  document.querySelector(".flow5_total").innerText = (
    Number(flow5_ptA_out2) +
    Number(flow5_ptB_out2) +
    Number(flow5_blm_out2)
  ).toFixed(2);
  document.querySelector(".flow6_total").innerText = (
    Number(flow6_ptA_out2) +
    Number(flow6_ptB_out2) +
    Number(flow6_blm_out2)
  ).toFixed(2);
  document.querySelector(".flow7_total").innerText = (
    Number(flow7_ptA_out2) +
    Number(flow7_ptB_out2) +
    Number(flow7_blm_out2)
  ).toFixed(2);

  let veg1_ptA_g = veg1_ptA_out2 / ptA_EC;
  let veg2_ptA_g = veg2_ptA_out2 / ptA_EC;
  let veg3_ptA_g = veg3_ptA_out2 / ptA_EC;
  let flow1_ptA_g = flow1_ptA_out2 / ptA_EC;
  let flow2_ptA_g = flow2_ptA_out2 / ptA_EC;
  let flow3_ptA_g = flow3_ptA_out2 / ptA_EC;
  let flow4_ptA_g = flow4_ptA_out2 / ptA_EC;
  let flow5_ptA_g = flow5_ptA_out2 / ptA_EC;
  let flow6_ptA_g = flow6_ptA_out2 / ptA_EC;
  let flow7_ptA_g = flow7_ptA_out2 / ptA_EC;

  let veg1_ptB_g = veg1_ptB_out2 / ptB_EC;
  let veg2_ptB_g = veg2_ptB_out2 / ptB_EC;
  let veg3_ptB_g = veg3_ptB_out2 / ptB_EC;
  let flow1_ptB_g = flow1_ptB_out2 / ptB_EC;
  let flow2_ptB_g = flow2_ptB_out2 / ptB_EC;
  let flow3_ptB_g = flow3_ptB_out2 / ptB_EC;
  let flow4_ptB_g = flow4_ptB_out2 / ptB_EC;
  let flow5_ptB_g = flow5_ptB_out2 / ptB_EC;
  let flow6_ptB_g = flow6_ptB_out2 / ptB_EC;
  let flow7_ptB_g = flow7_ptB_out2 / ptB_EC;

  let veg1_blm_g = 0;
  let veg2_blm_g = 0;
  let veg3_blm_g = 0;
  let flow1_blm_g = flow1_blm_out2 / blm_EC;
  let flow2_blm_g = flow2_blm_out2 / blm_EC;
  let flow3_blm_g = flow3_blm_out2 / blm_EC;
  let flow4_blm_g = flow4_blm_out2 / blm_EC;
  let flow5_blm_g = flow5_blm_out2 / blm_EC;
  let flow6_blm_g = flow6_blm_out2 / blm_EC;
  let flow7_blm_g = flow7_blm_out2 / blm_EC;
  //TODO: Add an error if an option was not selected
  if (select.value == "DtL") {
    document.querySelector(".veg1_pA_out1").value = veg1_ptA_g.toFixed(1);
    document.querySelector(".veg2_pA_out1").value = veg2_ptA_g.toFixed(1);
    document.querySelector(".veg3_pA_out1").value = veg3_ptA_g.toFixed(1);
    document.querySelector(".flow1_pA_out1").value = flow1_ptA_g.toFixed(1);
    document.querySelector(".flow2_pA_out1").value = flow2_ptA_g.toFixed(1);
    document.querySelector(".flow3_pA_out1").value = flow3_ptA_g.toFixed(1);
    document.querySelector(".flow4_pA_out1").value = flow4_ptA_g.toFixed(1);
    document.querySelector(".flow5_pA_out1").value = flow5_ptA_g.toFixed(1);
    document.querySelector(".flow6_pA_out1").value = flow6_ptA_g.toFixed(1);
    document.querySelector(".flow7_pA_out1").value = flow7_ptA_g.toFixed(1);

    document.querySelector(".veg1_pB_out1").value = veg1_ptB_g.toFixed(1);
    document.querySelector(".veg2_pB_out1").value = veg2_ptB_g.toFixed(1);
    document.querySelector(".veg3_pB_out1").value = veg3_ptB_g.toFixed(1);
    document.querySelector(".flow1_pB_out1").value = flow1_ptB_g.toFixed(1);
    document.querySelector(".flow2_pB_out1").value = flow2_ptB_g.toFixed(1);
    document.querySelector(".flow3_pB_out1").value = flow3_ptB_g.toFixed(1);
    document.querySelector(".flow4_pB_out1").value = flow4_ptB_g.toFixed(1);
    document.querySelector(".flow5_pB_out1").value = flow5_ptB_g.toFixed(1);
    document.querySelector(".flow6_pB_out1").value = flow6_ptB_g.toFixed(1);
    document.querySelector(".flow7_pB_out1").value = flow7_ptB_g.toFixed(1);

    document.querySelector(".veg1_blm_out1").value = veg1_blm_g.toFixed(1);
    document.querySelector(".veg2_blm_out1").value = veg2_blm_g.toFixed(1);
    document.querySelector(".veg3_blm_out1").value = veg3_blm_g.toFixed(1);
    document.querySelector(".flow1_blm_out1").value = flow1_blm_g.toFixed(1);
    document.querySelector(".flow2_blm_out1").value = flow2_blm_g.toFixed(1);
    document.querySelector(".flow3_blm_out1").value = flow3_blm_g.toFixed(1);
    document.querySelector(".flow4_blm_out1").value = flow4_blm_g.toFixed(1);
    document.querySelector(".flow5_blm_out1").value = flow5_blm_g.toFixed(1);
    document.querySelector(".flow6_blm_out1").value = flow6_blm_g.toFixed(1);
    document.querySelector(".flow7_blm_out1").value = flow7_blm_g.toFixed(1);
    unit.forEach((unit) => (unit.innerText = "grams"));
  } else if (select.value == "conc") {
    if (input[0].value == 2.4) {
      document.querySelector(".veg1_pA_out1").value = 22;
    } else {
      document.querySelector(".veg1_pA_out1").value = Math.floor(
        veg1_ptA_g / (849 / 3785)
      );
    }
    if (input[1].value == 2.4) {
      document.querySelector(".veg2_pA_out1").value = 22;
    } else {
      document.querySelector(".veg2_pA_out1").value = Math.floor(
        veg2_ptA_g / (849 / 3785)
      );
    }
    if (input[2].value == 2.4) {
      document.querySelector(".veg3_pA_out1").value = 22;
    } else {
      document.querySelector(".veg3_pA_out1").value = Math.floor(
        veg3_ptA_g / (849 / 3785)
      );
    }

    document.querySelector(".flow1_pA_out1").value = Math.round(
      flow1_ptA_g / (849 / 3785)
    );
    document.querySelector(".flow2_pA_out1").value = Math.round(
      flow2_ptA_g / (849 / 3785)
    );
    document.querySelector(".flow3_pA_out1").value = Math.round(
      flow3_ptA_g / (849 / 3785)
    );
    document.querySelector(".flow4_pA_out1").value = Math.round(
      flow4_ptA_g / (849 / 3785)
    );
    document.querySelector(".flow5_pA_out1").value = Math.round(
      flow5_ptA_g / (849 / 3785)
    );
    document.querySelector(".flow6_pA_out1").value = Math.round(
      flow6_ptA_g / (849 / 3785)
    );
    document.querySelector(".flow7_pA_out1").value = Math.round(
      flow7_ptA_g / (849 / 3785)
    );

    document.querySelector(".veg1_pB_out1").value = Math.round(
      veg1_ptB_g / (570 / 3785)
    );
    document.querySelector(".veg2_pB_out1").value = Math.round(
      veg2_ptB_g / (570 / 3785)
    );
    document.querySelector(".veg3_pB_out1").value = Math.round(
      veg3_ptB_g / (570 / 3785)
    );
    document.querySelector(".flow1_pB_out1").value = Math.round(
      flow1_ptB_g / (570 / 3785)
    );
    document.querySelector(".flow2_pB_out1").value = Math.round(
      flow2_ptB_g / (570 / 3785)
    );
    document.querySelector(".flow3_pB_out1").value = Math.round(
      flow3_ptB_g / (570 / 3785)
    );
    document.querySelector(".flow4_pB_out1").value = Math.round(
      flow4_ptB_g / (570 / 3785)
    );
    document.querySelector(".flow5_pB_out1").value = Math.round(
      flow5_ptB_g / (570 / 3785)
    );
    document.querySelector(".flow6_pB_out1").value = Math.round(
      flow6_ptB_g / (570 / 3785)
    );
    document.querySelector(".flow7_pB_out1").value = Math.round(
      flow7_ptB_g / (570 / 3785)
    );

    //the first 3 weeks need to be a conditionality
    //if input >= 3: output = regular_calc+1; else output = regular_calc
    document.querySelector(".veg1_blm_out1").value = veg1_blm_g;
    document.querySelector(".veg2_blm_out1").value = veg2_blm_g;
    document.querySelector(".veg3_blm_out1").value = veg3_blm_g;
    if (input[3].value >= 3) {
      document.querySelector(".flow1_blm_out1").value =
        Math.ceil(flow1_blm_g / (667 / 3785)) + 1;
    } else {
      document.querySelector(".flow1_blm_out1").value = Math.ceil(
        flow1_blm_g / (667 / 3785)
      );
    }
    if (input[4].value >= 3) {
      document.querySelector(".flow2_blm_out1").value =
        Math.ceil(flow2_blm_g / (667 / 3785)) + 1;
    } else {
      document.querySelector(".flow2_blm_out1").value = Math.ceil(
        flow2_blm_g / (667 / 3785)
      );
    }
    if (input[5].value >= 3) {
      document.querySelector(".flow3_blm_out1").value =
        Math.ceil(flow3_blm_g / (667 / 3785)) + 1;
    } else {
      document.querySelector(".flow3_blm_out1").value = Math.round(
        flow3_blm_g / (667 / 3785)
      );
    }
    document.querySelector(".flow4_blm_out1").value = Math.round(
      flow4_blm_g / (667 / 3785)
    );
    document.querySelector(".flow5_blm_out1").value = Math.round(
      flow5_blm_g / (667 / 3785)
    );
    document.querySelector(".flow6_blm_out1").value = Math.round(
      flow6_blm_g / (667 / 3785)
    );
    document.querySelector(".flow7_blm_out1").value = Math.round(
      flow7_blm_g / (667 / 3785)
    );

    unit.forEach((unit) => (unit.innerText = "ML"));
  }

  if (input[0].value >= 3.5) {
    document.querySelector(".si_veg1").value = 0.125;
  } else if (input[0].value >= 2.7) {
    document.querySelector(".si_veg1").value = 0.25;
  } else if (input[0].value >= 2.3) {
    document.querySelector(".si_veg1").value = 0.33;
  } else {
    document.querySelector(".si_veg1").value = 0.5;
  }

  if (input[1].value >= 3.5) {
    document.querySelector(".si_veg2").value = Number(0.125);
  } else if (input[1].value >= 2.7) {
    document.querySelector(".si_veg2").value = Number(0.25);
  } else if (input[1].value >= 2.3) {
    document.querySelector(".si_veg2").value = 0.33;
  } else {
    document.querySelector(".si_veg2").value = 0.5;
  }

  if (input[2].value >= 3.5) {
    document.querySelector(".si_veg3").value = Number(0.125);
  } else if (input[2].value >= 2.7) {
    document.querySelector(".si_veg3").value = Number(0.25);
  } else if (input[2].value >= 2.3) {
    document.querySelector(".si_veg3").value = Number(0.33);
  } else {
    document.querySelector(".si_veg3").value = Number(0.5);
  }

  if (input[3].value >= 3.5) {
    document.querySelector(".si_flow1").value = Number(0.125);
  } else if (input[3].value >= 2.7) {
    document.querySelector(".si_flow1").value = Number(0.25);
  } else if (input[3].value >= 2.3) {
    document.querySelector(".si_flow1").value = Number(0.33);
  } else {
    document.querySelector(".si_flow1").value = Number(0.5);
  }

  if (input[4].value >= 3.5) {
    document.querySelector(".si_flow2").value = Number(0.125);
  } else if (input[4].value >= 2.7) {
    document.querySelector(".si_flow2").value = Number(0.25);
  } else if (input[4].value >= 2.3) {
    document.querySelector(".si_flow2").value = Number(0.33);
  } else {
    document.querySelector(".si_flow2").value = Number(0.5);
  }

  if (input[5].value >= 3.5) {
    document.querySelector(".si_flow3").value = Number(0.125);
  } else if (input[5].value >= 2.7) {
    document.querySelector(".si_flow3").value = Number(0.25);
  } else if (input[5].value >= 2.3) {
    document.querySelector(".si_flow3").value = Number(0.33);
  } else {
    document.querySelector(".si_flow3").value = Number(0.5);
  }

  if (input[6].value >= 3.5) {
    document.querySelector(".si_flow4").value = Number(0.125);
  } else if (input[6].value >= 2.7) {
    document.querySelector(".si_flow4").value = Number(0.25);
  } else if (input[6].value >= 2.3) {
    document.querySelector(".si_flow4").value = Number(0.33);
  } else {
    document.querySelector(".si_flow4").value = Number(0.5);
  }

  if (input[7].value >= 3.5) {
    document.querySelector(".si_flow5").value = Number(0.125);
  } else if (input[7].value >= 2.7) {
    document.querySelector(".si_flow5").value = Number(0.25);
  } else if (input[7].value >= 2.3) {
    document.querySelector(".si_flow5").value = Number(0.33);
  } else {
    document.querySelector(".si_flow5").value = Number(0.5);
  }

  if (input[8].value >= 3.5) {
    document.querySelector(".si_flow6").value = Number(0.125);
  } else if (input[8].value >= 2.7) {
    document.querySelector(".si_flow6").value = Number(0.25);
  } else if (input[8].value >= 2.3) {
    document.querySelector(".si_flow6").value = Number(0.33);
  } else {
    document.querySelector(".si_flow6").value = Number(0.5);
  }

  if (input[9].value >= 3.5) {
    document.querySelector(".si_flow7").value = Number(0.125);
  } else if (input[9].value >= 2.7) {
    document.querySelector(".si_flow7").value = Number(0.25);
  } else if (input[9].value >= 2.3) {
    document.querySelector(".si_flow7").value = Number(0.33);
  } else {
    document.querySelector(".si_flow7").value = Number(0.5);
  }
}

//Print prompt when "Save As PDF" button is pressed
function saveAsPDF(e) {
  window.print();
  e.preventDefault();
}

//Slide Table in first time Calculate is pressed
function displayTable(e) {
  if (document.querySelector(".table-container").style.display === "none") {
    document.querySelector(".table-container").style.display = "block";
    document.querySelector(".save-pdf").style.display = "block";

    setTimeout(() => {
      document.querySelector(".table-container").style.opacity = 1;
      document.querySelector(".table-container").style.transform = "none";
      document.querySelector(".save-pdf").style.opacity = 1;
      document.querySelector(".save-pdf").style.transform = "none";
    }, 100);
  }
}

//Setting the dimensions of the input table to the dimensions of the main table
function setInputTableDimensions() {
  document.querySelector(".input-1").style.width = `${
    document.querySelector(".week1").offsetWidth + 3
  }px`;
  document.querySelector(".input-2").style.width = `${
    document.querySelector(".week2").offsetWidth + 3
  }px`;
  document.querySelector(".input-3").style.width = `${
    document.querySelector(".week3").offsetWidth + 3
  }px`;
  document.querySelector(".input-4").style.width = `${
    document.querySelector(".week4").offsetWidth + 3
  }px`;
  document.querySelector(".input-5").style.width = `${
    document.querySelector(".week5").offsetWidth + 3
  }px`;
  document.querySelector(".input-6").style.width = `${
    document.querySelector(".week6").offsetWidth + 3
  }px`;
  document.querySelector(".input-7").style.width = `${
    document.querySelector(".week7").offsetWidth + 3
  }px`;
  document.querySelectorAll(".grayed-out").forEach((gray) => {
    gray.style.width = `${document.querySelector(".flush").offsetWidth}px`;
  });
  document.querySelector(".input-8").style.width = `${
    document.querySelector(".week8").offsetWidth + 3
  }px`;
  document.querySelector(".input-9").style.width = `${
    document.querySelector(".week9").offsetWidth + 3
  }px`;
  document.querySelector(".input-10").style.width = `${
    document.querySelector(".week10").offsetWidth + 3
  }px`;
  document.querySelector(".ec_target").style.width = `${
    document.querySelector(".product").offsetWidth +
    document.querySelector(".units-column").offsetWidth +
    7
  }px`;
}

setInputTableDimensions();
