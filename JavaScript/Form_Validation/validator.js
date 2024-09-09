function Validator(options) {
    var formElement = document.querySelector(options.form);

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
        }
        element = element.parentElement
    };

    var selectorRules = {};

    function validate(inputElement, rule) {
        var errorMessage;
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);

        var rules = selectorRules[rule.selector];
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                    var checkedRadio = formElement.querySelector(rule.selector + ':checked');
                    errorMessage = rules[i](checkedRadio ? checkedRadio.value : null);
                    break
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;  // neu co loi thi ket thuc validate
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = [];                                    
                                    return values;
                                } 

                                if (!Array.isArray(values[input.name]) ) {
                                    values[input.name] = [];
                                }
                                
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            // case 'date':
                            
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});  
                    options.onSubmit(formValues);
                } 
                else {
                    formElement.submit();
                }
            } 
        }


        // lap qua moi rule va xu ly (lang nghe su kien blur, input,...)
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            // luu lai cac rule cho moi input        
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);
            
            Array.from(inputElements).forEach(function (inputElement) {
                // xu ly truong hop blur khoi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // xu ly khi nguoi dung nhap input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message');
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            })

            if (inputElement) {
                
            }
         })
    }
}

// nguyen tac: khi co loi -> tra message loi / hop le -> khong tra ve gi (undefined)

Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập email hợp lệ';
        }
    };
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    };
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}