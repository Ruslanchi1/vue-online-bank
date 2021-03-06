import { useForm, useField } from 'vee-validate';
import * as yup from 'yup'

export function useRequestForm(fn) {
	const { isSubmitting, handleSubmit } = useForm({
		initialValues: {
			status: 'active'
		}
	})

	const { value: fio, errorMessage: fError, handleBlur: fBlur } = useField(
		'fio',
		yup.string()
			.trim()
			.required('Пожалуйста введите ФИО')
		)
	const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
		'phone',
		yup.string()
			.trim()
			.required('Пожалуйста введите номер')
		)
	const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
		'amount',
		yup.number()
			.required('Пожалуйста введите сумму')
			.min(0, 'Сумма не может быть меньше 0')
		)
	const { value: status } = useField('status')

	const onSubmit = handleSubmit(fn)
	
	return {
		isSubmitting,
		onSubmit,

		fio,
		fError,
		fBlur,

		phone,
		pError,
		pBlur,

		amount,
		aError,
		aBlur,

		status
	}
}