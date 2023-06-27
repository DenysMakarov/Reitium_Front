import React, {useEffect, useId, useState} from 'react'

const REGEX_PATTERN = {
    regexMobileNumber: /^[1-9]{1}[0-9]{9}$/,
}

function AddEditUser({ formData, setFormData, onCancelEdit, onAddEditUser }) {
    const [validationError, setValidationError] = useState(false);

    const validateForm = () => {
        if (!formData.firstName || !formData.lastName || !formData.phone) {
            setValidationError(true);
            return false;
        }
        if (!REGEX_PATTERN.regexMobileNumber.test(formData.phone)) {
            setValidationError(true);
            return false;
        }
        setValidationError(false);
        return true;
    };

    const submitForm = (event) => {
        event.preventDefault();
        if (validateForm()) {
            onAddEditUser(formData);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const cancel = () => {
        onCancelEdit();
        setValidationError(false);
    };

    return (
        <section>
            <div className="pa-30">
                <form onSubmit={submitForm} noValidate="noValidate">
                    <div className="layout-column mb-15">
                        <label htmlFor="firstName" className="mb-3">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter first name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            data-testid="firstNameInput"
                        />
                    </div>
                    <div className="layout-column mb-15">
                        <label htmlFor="lastName" className="mb-3">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            data-testid="lastNameInput"
                        />
                    </div>
                    <div className="layout-column mb-15">
                        <label htmlFor="phone" className="mb-3">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            data-testid="phoneInput"
                        />
                    </div>
                    {validationError && (
                        <div className="alert error mb-30" data-testid="validationAlert">
                            Error: All fields are mandatory. Phone number should be 10 digits.
                        </div>
                    )}
                    <div className="layout-row justify-content-end">
                        <button type="button" className="" data-testid="cancelEditUserButton" onClick={cancel}>
                            Cancel
                        </button>
                        <button type="submit" className="mx-0" data-testid="addEditButton">
                            Add/Edit User
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default AddEditUser;