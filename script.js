function btnRoll_OnClick() {
    with (document.test) {
      Clr1Value = Math.ceil(Math.random() * 3);
      if (Clr1Value == 1) {
        Col1Value = "Red";
      } else {
        if (Clr1Value == 2) {
          Col1Value = "Green";
        } else {
          Col1Value = "Blue";
        }
      }
      Clr2Value = Math.ceil(Math.random() * 3);
      if (Clr2Value == 1) {
        Col2Value = "Red";
      } else {
        if (Clr2Value == 2) {
          Col2Value = "Green";
        } else {
          Col2Value = "Blue";
        }
      }
      Clr3Value = Math.ceil(Math.random() * 3);
      if (Clr3Value == 1) {
        Col3Value = "Red";
      } else {
        if (Clr3Value == 2) {
          Col3Value = "Green";
        } else {
          Col3Value = "Blue";
        }
      }
      Clr4Value = Math.ceil(Math.random() * 3);
      if (Clr4Value == 1) {
        Col4Value = "Red";
      } else {
        if (Clr4Value == 2) {
          Col4Value = "Green";
        } else {
          Col4Value = "Blue";
        }
      }
      Clr5Value = Math.ceil(Math.random() * 3);
      if (Clr5Value == 1) {
        Col5Value = "Red";
      } else {
        if (Clr5Value == 2) {
          Col5Value = "Green";
        } else {
          Col5Value = "Blue";
        }
      }
      Die1Value = Math.ceil(Math.random() * 6);
      Die2Value = Math.ceil(Math.random() * 6);
      Die3Value = Math.ceil(Math.random() * 6);
      Die4Value = Math.ceil(Math.random() * 6);
      Die5Value = Math.ceil(Math.random() * 6);
      die1image.src = "http://illuminations.nctm.org/Tools/Petals/" + Col1Value + Die1Value + ".jpg";
      die2image.src = "http://illuminations.nctm.org/Tools/Petals/" + Col2Value + Die2Value + ".jpg";
      die3image.src = "http://illuminations.nctm.org/Tools/Petals/" + Col3Value + Die3Value + ".jpg";
      die4image.src = "http://illuminations.nctm.org/Tools/Petals/" + Col4Value + Die4Value + ".jpg";
      die5image.src = "http://illuminations.nctm.org/Tools/Petals/" + Col5Value + Die5Value + ".jpg";

      petalsbox.value = "";
      Petals = 0;
      if (Die1Value == 3) {
        Petals = Petals + 2;
      }
      else {
        if (Die1Value == 5) {
          Petals = Petals + 4;
        }
      }
      if (Die2Value == 3) {
        Petals = Petals + 2;
      }
      else {
        if (Die2Value == 5) {
          Petals = Petals + 4;
        }
      }
      if (Die3Value == 3) {
        Petals = Petals + 2;
      }
      else {
        if (Die3Value == 5) {
          Petals = Petals + 4;
        }
      }
      if (Die4Value == 3) {
        Petals = Petals + 2;
      }
      else {
        if (Die4Value == 5) {
          Petals = Petals + 4;
        }
      }
      if (Die5Value == 3) {
        Petals = Petals + 2;
      }
      else {
        if (Die5Value == 5) {
          Petals = Petals + 4;
        }
      }
      strPetals = Petals;
      petalsbox.value = strPetals;
    }
  } // end btnRoll_OnClick
  document.test.die1image.src = "http://illuminations.nctm.org/Tools/Petals/Blue1.jpg";
  document.test.die2image.src = "http://illuminations.nctm.org/Tools/Petals/Red6.jpg";
  document.test.die3image.src = "http://illuminations.nctm.org/Tools/Petals/Green3.jpg";
  document.test.die4image.src = "http://illuminations.nctm.org/Tools/Petals/Blue5.jpg";
  document.test.die5image.src = "http://illuminations.nctm.org/Tools/Petals/Green2.jpg";
  Petals = 6;
  document.test.petalsbox.value = Petals;