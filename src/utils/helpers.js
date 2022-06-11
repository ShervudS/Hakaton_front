module.exports = {
    validateForm: (values) => {
        const errors = {};
        const phoneMinLength = 11;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!values.name) {
            errors.name = 'Пожалуйста, введите имя';
        }

        if (!values.phone) {
            errors.phone = 'Пожалуйста, введите номер телефона';
        } else if (values.phone.length < phoneMinLength) {
            errors.phone = 'Некорректный номер телефона';
        }

        // email is not required
        if (values.email && !emailRegex.test(values.email)) {
            errors.email = 'Неверный формат почты';
        }

        if (!values.terms) {
            errors.terms = 'Подтвердите согласие на обработку';
        }

        return errors;
    },
};
