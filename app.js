//When "Calculate" pressed:
$(".calculate_button").click(calculateValues);
$(".calculate_button").click(displayTable);

//When saveAsPDF is pressed
$('.save-pdf').click(saveAsPDF);

//When DOM loads, calculate initial values(0.0)
$(document).ready(calculateValues());
$(document).ready(() =>{
    $('.table-container').css('display','none');
    $('.save-pdf').css('display','none');
});


//Calculate and displays all the  values inseide the table when "calculate" clicked, or when the unirs are changed from the dropdown menu 
function calculateValues(e) {
 
  const input = jQuery('.input');
  const select = document.getElementById('type');
  const unit = jQuery('.unit');
  

  const ptA_EC   = 0.322;
  const ptB_EC   = 0.255;
  const blm_EC   = 0.18;
  
  const ptA_veg  = 4.04;
  const ptB_veg  = 2.7;
      
  const ptA_flow = 3.25;
  const ptB_flow = 2.18;
  const blm_flow = 2.56;

  const ptB_mLc = 570/3785;
  const blm_mLc = 667/3785;

  let veg1_ptA_out2 = ((input[0].value/2)*(ptA_EC * ptA_veg));
  let veg2_ptA_out2 = ((input[1].value/2)*(ptA_EC * ptA_veg));
  let veg3_ptA_out2 = ((input[2].value/2)*(ptA_EC * ptA_veg));
  let flow1_ptA_out2 = ((input[3].value/2)*(ptA_EC * ptA_flow));
  let flow2_ptA_out2 = ((input[4].value/2)*(ptA_EC * ptA_flow));
  let flow3_ptA_out2 = ((input[5].value/2)*(ptA_EC * ptA_flow));
  let flow4_ptA_out2 = ((input[6].value/2)*(ptA_EC * ptA_flow * 0.95));
  let flow5_ptA_out2 = ((input[7].value/2)*(ptA_EC * ptA_flow * 0.95));
  let flow6_ptA_out2 = ((input[8].value/2)*(ptA_EC * ptA_flow * 0.9));
  let flow7_ptA_out2 = ((input[9].value/2)*(ptA_EC * ptA_flow * 0.9));
  
  let veg1_ptB_out2 = ((input[0].value/2)*(ptB_EC * ptB_veg));
  let veg2_ptB_out2 = ((input[1].value/2)*(ptB_EC * ptB_veg));
  let veg3_ptB_out2 = ((input[2].value/2)*(ptB_EC * ptB_veg));
  let flow1_ptB_out2 = ((input[3].value/2)*(ptB_EC * ptB_flow));
  let flow2_ptB_out2 = ((input[4].value/2)*(ptB_EC * ptB_flow));
  let flow3_ptB_out2 = ((input[5].value/2)*(ptB_EC * ptB_flow));
  let flow4_ptB_out2 = ((input[6].value/2)*(ptB_EC * ptB_flow * 0.95));
  let flow5_ptB_out2 = ((input[7].value/2)*(ptB_EC * ptB_flow * 0.95));
  let flow6_ptB_out2 = ((input[8].value/2)*(ptB_EC * ptB_flow * 0.9));
  let flow7_ptB_out2 = ((input[9].value/2)*(ptB_EC * ptB_flow * 0.9));
      
  let veg1_blm_out2 = 0;
  let veg2_blm_out2 = 0;
  let veg3_blm_out2 = 0;
  let flow1_blm_out2 = ((input[3].value/2)*(blm_EC * blm_flow * 0.95));
  let flow2_blm_out2 = ((input[4].value/2)*(blm_EC * blm_flow * 0.95));
  let flow3_blm_out2 = ((input[5].value/2)*(blm_EC * blm_flow * 0.95));
  let flow4_blm_out2 = ((input[6].value/2)*(blm_EC * blm_flow * 1.1));
  let flow5_blm_out2 = ((input[7].value/2)*(blm_EC * blm_flow * 1.1));
  let flow6_blm_out2 = ((input[8].value/2)*(blm_EC * blm_flow * 1.15));
  let flow7_blm_out2 = ((input[9].value/2)*(blm_EC * blm_flow * 1.15));
  
  $('.veg1_pA_out2').val(veg1_ptA_out2.toFixed(2));
  $(".veg2_pA_out2").val(veg2_ptA_out2.toFixed(2));
  $(".veg3_pA_out2").val(veg3_ptA_out2.toFixed(2));
  $(".flow1_pA_out2").val(flow1_ptA_out2.toFixed(2));
  $(".flow2_pA_out2").val(flow2_ptA_out2.toFixed(2));
  $(".flow3_pA_out2").val(flow3_ptA_out2.toFixed(2));
  $(".flow4_pA_out2").val(flow4_ptA_out2.toFixed(2));
  $(".flow5_pA_out2").val(flow5_ptA_out2.toFixed(2));
  $(".flow6_pA_out2").val(flow6_ptA_out2.toFixed(2));
  $(".flow7_pA_out2").val(flow7_ptA_out2.toFixed(2));
  
  $('.veg1_pB_out2').val(veg1_ptB_out2.toFixed(2));
  $('.veg2_pB_out2').val(veg2_ptB_out2.toFixed(2));
  $('.veg3_pB_out2').val(veg3_ptB_out2.toFixed(2));
  $('.flow1_pB_out2').val(flow1_ptB_out2.toFixed(2));
  $('.flow2_pB_out2').val(flow2_ptB_out2.toFixed(2));
  $('.flow3_pB_out2').val(flow3_ptB_out2.toFixed(2));
  $('.flow4_pB_out2').val(flow4_ptB_out2.toFixed(2));
  $('.flow5_pB_out2').val(flow5_ptB_out2.toFixed(2));
  $('.flow6_pB_out2').val(flow6_ptB_out2.toFixed(2));
  $('.flow7_pB_out2').val(flow7_ptB_out2.toFixed(2));
  
  $('.veg1_blm_out2').val(veg1_blm_out2.toFixed(2));
  $('.veg2_blm_out2').val(veg2_blm_out2.toFixed(2));
  $('.veg3_blm_out2').val(veg3_blm_out2.toFixed(2));
  $('.flow1_blm_out2').val(flow1_blm_out2.toFixed(2));
  $('.flow2_blm_out2').val(flow2_blm_out2.toFixed(2));
  $('.flow3_blm_out2').val(flow3_blm_out2.toFixed(2));
  $('.flow4_blm_out2').val(flow4_blm_out2.toFixed(2));
  $('.flow5_blm_out2').val(flow5_blm_out2.toFixed(2));
  $('.flow6_blm_out2').val(flow6_blm_out2.toFixed(2));
  $('.flow7_blm_out2').val(flow7_blm_out2.toFixed(2));
  
  $('.veg1_total').text(`${(Number(veg1_ptA_out2) + Number(veg1_ptB_out2)).toFixed(2)}`);
  $('.veg2_total').text(`${(Number(veg2_ptA_out2) + Number(veg2_ptB_out2)).toFixed(2)}`);
  $('.veg3_total').text(`${(Number(veg3_ptA_out2) + Number(veg3_ptB_out2)).toFixed(2)}`);
  $('.flow1_total').text(`${(Number(flow1_ptA_out2) + Number(flow1_ptB_out2) + Number(flow1_blm_out2)).toFixed(2)}`);
  $('.flow2_total').text(`${(Number(flow2_ptA_out2) + Number(flow2_ptB_out2) + Number(flow2_blm_out2)).toFixed(2)}`);
  $('.flow3_total').text(`${(Number(flow3_ptA_out2) + Number(flow3_ptB_out2) + Number(flow3_blm_out2)).toFixed(2)}`);
  $('.flow4_total').text(`${(Number(flow4_ptA_out2) + Number(flow4_ptB_out2) + Number(flow4_blm_out2)).toFixed(2)}`);
  $('.flow5_total').text(`${(Number(flow5_ptA_out2) + Number(flow5_ptB_out2) + Number(flow5_blm_out2)).toFixed(2)}`);
  $('.flow6_total').text(`${(Number(flow6_ptA_out2) + Number(flow6_ptB_out2) + Number(flow6_blm_out2)).toFixed(2)}`);
  $('.flow7_total').text(`${(Number(flow7_ptA_out2) + Number(flow7_ptB_out2) + Number(flow7_blm_out2)).toFixed(2)}`);
  

  let veg1_ptA_g = ((veg1_ptA_out2)/ptA_EC);
  let veg2_ptA_g = ((veg2_ptA_out2)/ptA_EC);
  let veg3_ptA_g = ((veg3_ptA_out2)/ptA_EC);
  let flow1_ptA_g = ((flow1_ptA_out2)/ptA_EC);
  let flow2_ptA_g = ((flow2_ptA_out2)/ptA_EC);
  let flow3_ptA_g = ((flow3_ptA_out2)/ptA_EC);
  let flow4_ptA_g = ((flow4_ptA_out2)/ptA_EC);
  let flow5_ptA_g = ((flow5_ptA_out2)/ptA_EC);
  let flow6_ptA_g = ((flow6_ptA_out2)/ptA_EC);
  let flow7_ptA_g = ((flow7_ptA_out2)/ptA_EC);
  
  let veg1_ptB_g = ((veg1_ptB_out2)/ptB_EC);
  let veg2_ptB_g = ((veg2_ptB_out2)/ptB_EC);
  let veg3_ptB_g = ((veg3_ptB_out2)/ptB_EC);
  let flow1_ptB_g = ((flow1_ptB_out2)/ptB_EC);
  let flow2_ptB_g = ((flow2_ptB_out2)/ptB_EC);
  let flow3_ptB_g = ((flow3_ptB_out2)/ptB_EC);
  let flow4_ptB_g = ((flow4_ptB_out2)/ptB_EC);
  let flow5_ptB_g = ((flow5_ptB_out2)/ptB_EC);
  let flow6_ptB_g = ((flow6_ptB_out2)/ptB_EC);
  let flow7_ptB_g = ((flow7_ptB_out2)/ptB_EC);
  
  let veg1_blm_g = 0;
  let veg2_blm_g = 0;
  let veg3_blm_g = 0;
  let flow1_blm_g = ((flow1_blm_out2)/blm_EC);
  let flow2_blm_g = ((flow2_blm_out2)/blm_EC);
  let flow3_blm_g = ((flow3_blm_out2)/blm_EC);
  let flow4_blm_g = ((flow4_blm_out2)/blm_EC);
  let flow5_blm_g = ((flow5_blm_out2)/blm_EC);
  let flow6_blm_g = ((flow6_blm_out2)/blm_EC);
  let flow7_blm_g = ((flow7_blm_out2)/blm_EC);
  //TODO: Add an error if an option was not selected
  if (select.value == "DtL")
  {
      $('.veg1_pA_out1').val(veg1_ptA_g.toFixed(1));
      $('.veg2_pA_out1').val(veg2_ptA_g.toFixed(1));
      $('.veg3_pA_out1').val(veg3_ptA_g.toFixed(1));
      $('.flow1_pA_out1').val(flow1_ptA_g.toFixed(1));
      $('.flow2_pA_out1').val(flow2_ptA_g.toFixed(1));
      $('.flow3_pA_out1').val(flow3_ptA_g.toFixed(1));
      $('.flow4_pA_out1').val(flow4_ptA_g.toFixed(1));
      $('.flow5_pA_out1').val(flow5_ptA_g.toFixed(1));
      $('.flow6_pA_out1').val(flow6_ptA_g.toFixed(1));
      $('.flow7_pA_out1').val(flow7_ptA_g.toFixed(1));
      
      $('.veg1_pB_out1').val(veg1_ptB_g.toFixed(1));
      $('.veg2_pB_out1').val(veg2_ptB_g.toFixed(1));
      $('.veg3_pB_out1').val(veg3_ptB_g.toFixed(1));
      $('.flow1_pB_out1').val(flow1_ptB_g.toFixed(1));
      $('.flow2_pB_out1').val(flow2_ptB_g.toFixed(1));
      $('.flow3_pB_out1').val(flow3_ptB_g.toFixed(1));
      $('.flow4_pB_out1').val(flow4_ptB_g.toFixed(1));
      $('.flow5_pB_out1').val(flow5_ptB_g.toFixed(1));
      $('.flow6_pB_out1').val(flow6_ptB_g.toFixed(1));
      $('.flow7_pB_out1').val(flow7_ptB_g.toFixed(1));

      $('.veg1_blm_out1').val(veg1_blm_g.toFixed(1));
      $('.veg2_blm_out1').val(veg2_blm_g.toFixed(1));
      $('.veg3_blm_out1').val(veg3_blm_g.toFixed(1));
      $('.flow1_blm_out1').val(flow1_blm_g.toFixed(1));
      $('.flow2_blm_out1').val(flow2_blm_g.toFixed(1));
      $('.flow3_blm_out1').val(flow3_blm_g.toFixed(1));
      $('.flow4_blm_out1').val(flow4_blm_g.toFixed(1));
      $('.flow5_blm_out1').val(flow5_blm_g.toFixed(1));
      $('.flow6_blm_out1').val(flow6_blm_g.toFixed(1));
      $('.flow7_blm_out1').val(flow7_blm_g.toFixed(1));
      unit.each((i,unit)=>unit.innerText = "grams");

    }

  else if (select.value == "conc")
  {
      if (input[0].value == 2.4)
      {
          $('.veg1_pA_out1').val(22);
      }
      else
      {
          $('.veg1_pA_out1').val(Math.floor(veg1_ptA_g/(849/3785)));
      }
      if (input[1].value == 2.4)
      {
          $('.veg2_pA_out1').val(22);
      }
      else
      {
          $('.veg2_pA_out1').val(Math.floor(veg2_ptA_g/(849/3785)));
      }
      if (input[2].value == 2.4)
      {
          $('.veg3_pA_out1').val(22);
      }
      else
      {
          $('.veg3_pA_out1').val(Math.floor(veg3_ptA_g/(849/3785)));
      }
      
      $('.flow1_pA_out1').val(Math.round(flow1_ptA_g/(849/3785)));
      $('.flow2_pA_out1').val(Math.round(flow2_ptA_g/(849/3785)));
      $('.flow3_pA_out1').val(Math.round(flow3_ptA_g/(849/3785)));
      $('.flow4_pA_out1').val(Math.round(flow4_ptA_g/(849/3785)));
      $('.flow5_pA_out1').val(Math.round(flow5_ptA_g/(849/3785)));
      $('.flow6_pA_out1').val(Math.round(flow6_ptA_g/(849/3785)));
      $('.flow7_pA_out1').val(Math.round(flow7_ptA_g/(849/3785)));

      $('.veg1_pB_out1').val(Math.round(veg1_ptB_g/(570/3785)));
      $('.veg2_pB_out1').val(Math.round(veg2_ptB_g/(570/3785)));
      $('.veg3_pB_out1').val(Math.round(veg3_ptB_g/(570/3785)));
      $('.flow1_pB_out1').val(Math.round(flow1_ptB_g/(570/3785)));
      $('.flow2_pB_out1').val(Math.round(flow2_ptB_g/(570/3785)));
      $('.flow3_pB_out1').val(Math.round(flow3_ptB_g/(570/3785)));
      $('.flow4_pB_out1').val(Math.round(flow4_ptB_g/(570/3785)));
      $('.flow5_pB_out1').val(Math.round(flow5_ptB_g/(570/3785)));
      $('.flow6_pB_out1').val(Math.round(flow6_ptB_g/(570/3785)));
      $('.flow7_pB_out1').val(Math.round(flow7_ptB_g/(570/3785)));


      //the first 3 weeks need to be a conditionality
      //if input >= 3: output = regular_calc+1; else output = regular_calc
      $('.veg1_blm_out1').value = veg1_blm_g;
      $('.veg2_blm_out1').value = veg2_blm_g;
      $('.veg3_blm_out1').value = veg3_blm_g;
      if (input[3].value >= 3)
      {
          $('.flow1_blm_out1').value = Math.ceil(flow1_blm_g/(667/3785))+1;
      }
      else
      {
          $('.flow1_blm_out1').value = Math.ceil(flow1_blm_g/(667/3785));
      }
      if (input[4].value >= 3)
      {
          $('.flow2_blm_out1').value = Math.ceil(flow2_blm_g/(667/3785))+1;
      }
      else
      {
          $('.flow2_blm_out1').value = Math.ceil(flow2_blm_g/(667/3785));
      }
      if (input[5].value >= 3)
      {
          $('.flow3_blm_out1').value = Math.ceil(flow3_blm_g/(667/3785))+1;
      }
      else
      {
          $('.flow3_blm_out1').value = Math.round(flow3_blm_g/(667/3785));
      }
      $('.flow4_blm_out1').value = Math.round(flow4_blm_g/(667/3785));
      $('.flow5_blm_out1').value = Math.round(flow5_blm_g/(667/3785));
      $('.flow6_blm_out1').value = Math.round(flow6_blm_g/(667/3785));
      $('.flow7_blm_out1').value = Math.round(flow7_blm_g/(667/3785));
    

      unit.each((i,ut)=>ut.innerText = 'ML');
  }

  if (input[0].value >= 3.5)
  {
    $('.si_veg1').val(0.125);
  }
  else if (input[0].value >= 2.7)
  {
    $('.si_veg1').val(0.25);
  }
  else if (input[0].value >= 2.3)
  {
    $('.si_veg1').val(0.33);
  }
  else
  {
    $('.si_veg1').val(0.5);
  }

  if (input[1].value >= 3.5)
  {
      $('.si_veg2').val(Number(0.125));
  }
  else if (input[1].value >= 2.7)
  {
      $('.si_veg2').val(Number(0.25));
  }
  else if (input[1].value >= 2.3)
  {
      $('.si_veg2').val(0.33);
  }
  else
  {
      $('.si_veg2').val(0.5);
  }

  if (input[2].value >= 3.5)
  {
      $('.si_veg3').val(Number(0.125));
  }
  else if (input[2].value >= 2.7)
  {
      $('.si_veg3').val(Number(0.25));
  }
  else if (input[2].value >= 2.3)
  {
      $('.si_veg3').val(Number(0.33));
  }
  else
  {
      $('.si_veg3').val(Number(0.5));
  }

  if (input[3].value >= 3.5)
  {
      $('.si_flow1').val(Number(0.125));
  }
  else if (input[3].value >= 2.7)
  {
      $('.si_flow1').val(Number(0.25));
  }
  else if (input[3].value >= 2.3)
  {
      $('.si_flow1').val(Number(0.33));
  }
  else
  {
      $('.si_flow1').val(Number(0.5));
  }

  if (input[4].value >= 3.5)
  {
      $('.si_flow2').val(Number(0.125));
  }
  else if (input[4].value >= 2.7)
  {
      $('.si_flow2').val(Number(0.25));
  }
  else if (input[4].value >= 2.3)
  {
      $('.si_flow2').val(Number(0.33));
  }
  else
  {
      $('.si_flow2').val(Number(0.5));
  }

  if (input[5].value >= 3.5)
  {
      $('.si_flow3').val(Number(0.125));
  }
  else if (input[5].value >= 2.7)
  {
      $('.si_flow3').val(Number(0.25));
  }
  else if (input[5].value >= 2.3)
  {
      $('.si_flow3').val(Number(0.33));
  }
  else
  {
      $('.si_flow3').val(Number(0.5));
  }

  if (input[6].value >= 3.5)
  {
      $('.si_flow4').val(Number(0.125));
  }
  else if (input[6].value >= 2.7)
  {
      $('.si_flow4').val(Number(0.25));
  }
  else if (input[6].value >= 2.3)
  {
      $('.si_flow4').val(Number(0.33));
  }
  else
  {
      $('.si_flow4').val(Number(0.5));
  }

  if (input[7].value >= 3.5)
  {
      $('.si_flow5').val(Number(0.125));
  }
  else if (input[7].value >= 2.7)
  {
      $('.si_flow5').val(Number(0.25));
  }
  else if (input[7].value >= 2.3)
  {
      $('.si_flow5').val(Number(0.33));
  }
  else
  {
      $('.si_flow5').val(Number(0.5));
  }

  if (input[8].value >= 3.5)
  {
      $('.si_flow6').val(Number(0.125));
  }
  else if (input[8].value >= 2.7)
  {
      $('.si_flow6').val(Number(0.25));
  }
  else if (input[8].value >= 2.3)
  {
      $('.si_flow6').val(Number(0.33));
  }
  else
  {
      $('.si_flow6').val(Number(0.5));
  }

  if (input[9].value >= 3.5)
  {
      $('.si_flow7').val(Number(0.125));
  }
  else if (input[9].value >= 2.7)
  {
      $('.si_flow7').val(Number(0.25));
  }
  else if (input[9].value >= 2.3)
  {
      $('.si_flow7').val(Number(0.33));
  }
  else
  {
      $('.si_flow7').val(Number(0.5));
  }
}

//Print prompt when "Save As PDF" button is pressed
function saveAsPDF(e){
        window.print();
        e.preventDefault();
}

//Slide Table in first time Calculate is pressed
function displayTable(e){
    if($('.table-container').css('display') === 'none'){
        $('.table-container').css('display', 'block');
        $('.save-pdf').css('display', 'block');

        setTimeout(()=>{
            $('.table-container').css('opacity', '1');
            $('.table-container').css('transform', 'none');
            $('.save-pdf').css('opacity', '1');
            $('.save-pdf').css('transform', 'none');
        },100)

    }
    else{
        console.log($('.table-container').css('display'));
    }
}

//Setting the dimensions of the input table to the dimensions of the main table
const setInputTableDimensions = () => {
    const inputs = document.querySelectorAll('.inputs');
    const weeks = document.querySelectorAll('.weeks');
    inputs.forEach((input,index)=>{
        input.style.width = `${weeks[index].offsetWidth + 3}px`;
    })
    document.querySelectorAll('.grayed-out').forEach((gray)=>{
        gray.style.width = `${document.querySelector('.flush').offsetWidth}px`;
    })
    document.querySelector('.ec_target').style.width = `${document.querySelector('.product').offsetWidth + 3}px`;
    document.querySelector('.input-unit').style.width = `${document.querySelector('.units-column').offsetWidth + 3}px`;
}
setInputTableDimensions();
