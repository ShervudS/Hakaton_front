module.exports = {
    validateForm: (values) => {
        const errors = {};
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!values.pass) {
            errors.pass = 'Пожалуйста, введите пароль';
        } else if (values.pass.length < 8) {
            errors.pass = 'Слишком короткий пароль';
        }

        if (!values.email) {
            errors.phone = 'Пожалуйста, введите почту';
        } else if (values.email && !emailRegex.test(values.email)) {
            errors.email = 'Неверный формат почты';
        }

        return errors;
    },
};
