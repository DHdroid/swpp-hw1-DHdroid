class Form {
    constructor(
      email,
      password,
      password_confirmation,
      phone_number,
      fname,
      lname,
      age,
      birth_month,
      birth_day,
      birth_year) {
      this.email = email;
      this.password = password;
      this.password_confirmation = password_confirmation;
      this.phone_number = phone_number;
      this.fname = fname;
      this.lname = lname;
      this.age = age;
      this.birth_month = birth_month;
      this.birth_day = birth_day;
      this.birth_year = birth_year;
    }
    // TODO: You may fill in functions in the class.
    test_email(){
      var pattern = new RegExp(/^[^@\s]+@[^@\s.]+.[a-zA-Z]{2,3}$/);
      return pattern.test(this.email);
    }
    test_password() {
      var pattern1 = new RegExp(/[a-z]/);
      var pattern2 = new RegExp(/[A-Z]/);
      var pattern3 = new RegExp(/\d/);
      return pattern1.test(this.password) && pattern2.test(this.password) && pattern3.test(this.password) && this.password.length>=8;
    }
    test_passconfirm() {
      return this.password == this.password_confirmation;
    }
    test_phonenum() {
      var pattern = new RegExp(/^\d{3}-\d{4}-\d{4}$/);
      return pattern.test(this.phone_number);
    }
    test_fname() {
      var pattern = new RegExp(/^[A-Z][a-z]+$/);
      return pattern.test(this.fname);
    }
    test_lname() {
      var pattern = new RegExp(/^[A-Z][a-z]+$/);
      return pattern.test(this.lname);
    }
    test_age() {
      var pattern = new RegExp(/^\d{1,3}$/);
      return pattern.test(this.age) && Number(this.age)>=0 && Number(this.age)<=200;
    }
    test_birth_month() {
      var montharr = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
      var well_formed = false;
      for(var i=0; i<12; i++) {
        if(this.birth_month==montharr[i])
          well_formed = true;
      }
      return well_formed;
    }
    test_birth_day() {
      var pattern = new RegExp(/^\d{1,2}$/);
      return pattern.test(this.birth_day);
    }
    test_birth_year() {
      var pattern = new RegExp(/^\d{4}$/);
      return pattern.test(this.birth_year) && Number(this.birth_year) >= 1800 && Number(this.birth_year) <= 2018;
    }
  }

  var but = document.createElement('button');
  but.innerHTML = "Checks";
  but.onclick = function() {
      var email = document.forms["form"]["email"].value;
      var password = document.forms["form"]["password"].value;
      var password_confirmation = document.forms["form"]["password-confirmation"].value;
      var phone_number = document.forms["form"]["phone-number"].value;
      var fname = document.forms["form"]["fname"].value;
      var lname = document.forms["form"]["lname"].value;
      var age = document.forms["form"]["age"].value;
      var birth_month = document.forms["form"]["birth-month"].value;
      var birth_day = document.forms["form"]["birth-day"].value;
      var birth_year = document.forms["form"]["birth-year"].value;
      // TODO: Fill in the rest of the function. Use the Form class defined above
      var form = new Form(email, password, password_confirmation, phone_number, fname, lname, age, birth_month, birth_day, birth_year);
      var email_label = document.getElementById('email-label');
      var password_label = document.getElementById('password-label');
      var password_confirmation_label = document.getElementById('password-confirmation-label');
      var phone_number_label = document.getElementById('phone-number-label');
      var fname_label = document.getElementById('fname-label');
      var lname_label = document.getElementById('lname-label');
      var age_label = document.getElementById('age-label');
      var birth_month_label = document.getElementById('birth-month-label');
      var birth_day_label = document.getElementById('birth-day-label');
      var birth_year_label = document.getElementById('birth-year-label');
      var well_formed = true;
      let alertMessage = '';
      if(!form.test_email()) {
        email_label.innerHTML = "X";
        email_label.title = "characters other than @ or whitespace followed by an @ sign, followed by more characters (not '@', '.', or whitespace: co.kr is not allowed in this case), and then a \".\". After the \".\", you can only write 2 to 3 letters from a to z."
        well_formed = false;
        alertMessage += '\nEmail';
      }
      else {
        email_label.innerHTML = "";
        email_label.title = "";
      }
      if(!form.test_password()) {
        password_label.innerHTML = "X";
        password_label.title = "Must contain at least one number and one uppercase and one lowercase letter, and at least 8 or more characters."
        well_formed = false;
        alertMessage += '\nPassword';
      }
      else {
        password_label.innerHTML = "";
        password_label.title = "";
      }
      if(!form.test_passconfirm()) {
        password_confirmation_label.innerHTML = "X";
        password_confirmation_label.title = "Must match password.";
        well_formed = false;
        alertMessage += '\nPassword Confirmation';
      }
      else {
        password_confirmation_label.innerHTML = "";
        password_confirmation_label.title = "";
      }
      if(!form.test_phonenum()) {
        phone_number_label.innerHTML = "X";
        phone_number_label.title = "nnn-nnnn-nnnn: three numbers, then \" - \", followed by four numbers and a \" -\", then four numbers.";
        well_formed = false;
        alertMessage += '\nPhone number';
      }
      else {
        phone_number_label.innerHTML = "";
        phone_number_label.title = "";
      }
      if (!form.test_fname()) {
        fname_label.innerHTML = "X";
        fname_label.title = "Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)";
        well_formed = false;
        alertMessage += '\nFirst Name';
      }
      else {
        fname_label.innerHTML = "";
        fname_label.title = "";
      }
      if (!form.test_lname()) {
        lname_label.innerHTML = "X";
        lname_label.title = "Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)";
        well_formed = false;
        alertMessage += '\nLast Name';
      }
      else {
        lname_label.innerHTML = "";
        lname_label.title = "";
      }
      if (!form.test_age()) {
        age_label.innerHTML = "X";
        age_label.title = "Must be a number between 0 and 200 (inclusive).";
        well_formed = false;
        alertMessage += '\nAge';
      }
      else {
        age_label.innerHTML = "";
        age_label.title = "";
      }
      if (!form.test_birth_month()) {
        birth_month_label.innerHTML = "X";
        birth_month_label.title = "Must be one of \"January\", \"February\", ..., \"December\"";
        well_formed = false;
        alertMessage += '\nMonth';
      }
      else {
        birth_month_label.innerHTML = "";
        birth_month_label.title = "";
      }
      if (!form.test_birth_day()) {
        birth_day_label.innerHTML = "X";
        birth_day_label.title = "Must be a number of one or two digits.";
        well_formed = false;
        alertMessage += '\nDay';
      }
      else {
        birth_day_label.innerHTML = "";
        birth_day_label.title = "";
      }
      if (!form.test_birth_year()) {
        birth_year_label.innerHTML = "X";
        birth_year_label.title = "Must be a number between 1800 and 2018 (inclusive).";
        well_formed = false;
        alertMessage += '\nYear';
      }
      else {
        birth_year_label.innerHTML = "";
        birth_year_label.title = "";
      }
      if(well_formed)
        alertMessage = "Successfully Submitted!";
      else
        alertMessage = "You must correct:\n"+alertMessage
      // TODO: Fill the alert message according to the validation result by following the form in README.md.
      alert(alertMessage);

      // Hint: you can use the RegExp class for matching a string with the `test` method.
      // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
      // Hint: modify 'title' attribute of each label to display your message
      // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
  };
  document.body.appendChild(but);