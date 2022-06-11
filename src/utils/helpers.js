module.exports = {
    validateForm: (values) => {
        const errors = {};
        const phoneMinLength = 11;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!values.phone) {
            errors.phone = 'Пожалуйста, введите номер телефона';
        } else if (values.phone.length < phoneMinLength) {
            errors.phone = 'Некорректный номер телефона';
        }

        // email is not required
        if (values.email && !emailRegex.test(values.email)) {
            errors.email = 'Неверный формат почты';
        }


        return errors;
    },
};
