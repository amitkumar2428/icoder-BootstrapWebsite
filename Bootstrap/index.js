function SearchFunction() {
    const input = document.getElementById('search').value.toLowerCase();
    const navItems = document.querySelectorAll('.nav-item > a, .dropdown-item');
    const resultsContainer = document.getElementById('searchResults');

    resultsContainer.innerHTML = '';  // Clear previous results

    const addedItems = new Set();  // To keep track of added items

    navItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            if (!addedItems.has(item.textContent)) {
                const clone = item.cloneNode(true); // Clone the matching item
                clone.classList.remove('nav-link'); // Remove the nav-link class to avoid styling issues
                clone.classList.add('search-result'); // Add a class for search results styling
                resultsContainer.appendChild(clone); // Append the cloned item to the results container
                addedItems.add(item.textContent);  // Add the item to the set
            }
        }
    });
}

// Function to handle form submission and prevent default action
/*function handleFormSubmit(event) {
    event.preventDefault();  // Prevent form submission
    SearchFunction();  // Call the search function
}

document.getElementById('search').addEventListener('input', SearchFunction);  // Trigger search on input
document.getElementById('button').addEventListener('click', handleFormSubmit);  // Trigger search on button click*/



function Login() {
    let emailMessage = document.getElementById('emailError');
    let passwordMessage = document.getElementById('passwordError');
    let checkboxMessage = document.getElementById('checkboxError');

    let email = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let checkbox = document.getElementById('exampleCheck1')

    let LoggedIn = true;
    if (email === '') {
        emailMessage.textContent = 'Enter your email above';
        LoggedIn = false;
    }

    if (password.length < 8) {
        passwordMessage.textContent = 'Incorrect password';
        LoggedIn = false;
    }
    if (!checkbox.checked) {
        checkboxMessage.textContent = 'Check the above box';
        LoggedIn = false;
    }
    if (LoggedIn) {
        document.getElementById('LoginMessage').textContent = 'Logging in...';
        emailMessage.textContent = '';
        passwordMessage.textContent = '';
        checkboxMessage.textContent = '';
        let inputs = document.querySelectorAll
            ('#loginModal #exampleInputEmail1, #loginModal #exampleInputPassword1, #loginModal #loginSubmit');
        inputs.forEach(input => input.disabled = true);


        setTimeout(function () {
            alert('You are logged in!');

        }, 2000);

    }
    document.getElementById('loginModal').addEventListener('submit', function (event) {
        event.preventDefault();

    })
    const firstInvalidControl = document.querySelector('.error');
    if (firstInvalidControl) {
        firstInvalidControl.scrollIntoView({
            behavior: 'smooth'
        });
    }

}


function validateForm() {
    let isValid = true;
    $('.error2').text(''); // Clear previous error messages

    if ($('#exampleName').val().trim() === '') {
        $('#nameError').text('Fill the above box');
        isValid = false;
    }
    if ($('#exampleInputEmail2').val().trim() === '') {
        $('#emailError2').text('Fill the above box');
        isValid = false;
    }
    if ($('#exampleInputPassword2').val().trim() === '') {
        $('#passwordError2').text('Fill the above box');
        isValid = false;
    } else if ($('#exampleInputPassword2').val().length < 8) {
        $('#passwordError2').text('Password must be at least 8 characters');
        isValid = false;
    }
    if ($('#exampleInputConfirmPassword1').val().trim() === '') {
        $('#confirmPasswordError').text('Fill the above box');
        isValid = false;
    }
    else if ($('#exampleInputConfirmPassword1').val() !== $('#exampleInputPassword2').val()) {
        $('#confirmPasswordError').text('Passwords do not match');
        isValid = false;
    }

    return isValid;
}

function Signup(event) {
    event.preventDefault();
    if (validateForm()) {
        $('#SignupMessage').text('Creating account...');
        $('#signupModal :input').prop('disabled', true);
        // Simulate form submission
        setTimeout(function () {
            alert('Account created successfully!');
            $('#signupModal :input').prop('disabled', false);
            $('#signupModal')[0].reset();
            $('#SignupMessage').text('');
        }, 2000);
    }
}

$('#signupModal').on('submit', Signup);

function ContactSubmit() {
    let ContactNameMessage = document.getElementById('contactnameError');
    let ContactEmailMessage = document.getElementById('contactemailError');
    let GridCheckMessage = document.getElementById('checkError');


    let contactName = document.getElementById('exampleNameFormControlInput1').value;
    let contactEmail = document.getElementById('exampleEmailFormControlInput1').value;
    let GridCheckMessage1 = document.getElementById('gridcheck1');
    let GridCheckMessage2 = document.getElementById('gridcheck2');

    let submission = true;
    if (contactName === '') {
        ContactNameMessage.textContent = 'Enter your name';
        submission = false;
    }

    if (contactEmail === '') {
        ContactEmailMessage.textContent = 'Enter your email';
        submission = false;
    }

    if (!GridCheckMessage1.checked && !GridCheckMessage2.checked) {
        GridCheckMessage.textContent = 'Choose 1 option above';
        submission = false;
    }

    if (GridCheckMessage1.checked) {
        GridCheckMessage.disabled = true;
    }

    if (GridCheckMessage2.checked) {
        GridCheckMessage.disabled = true;
    }

    if (submission) {
        document.getElementById('contactSubmit').textContent = 'Thank you for contacting us';
        ContactNameMessage.textContent = '';
        ContactEmailMessage.textContent = '';
        GridCheckMessage.textContent = '';
        let inputs3 = document.querySelectorAll
            ('#ContactUs input , #ContactUs textarea, #ContactUs button, #ContactUs select');
        inputs3.forEach(input => input.disabled = true);
    }

    document.getElementById('ContactUs').addEventListener('submit', function (event) {
        event.preventDefault();
    });

    document.getElementById('gridcheck1').addEventListener('change', function () {
        document.getElementById('gridcheck2').disabled = this.checked;
    });

    document.getElementById('gridcheck2').addEventListener('change', function () {
        document.getElementById('gridcheck1').disabled = this.checked;
    });

    const firstInvalidControl3 = document.querySelector('.contactError');
    if (firstInvalidControl3) {
        firstInvalidControl3.scrollIntoView({
            behavior: 'smooth'
        });
    }

}