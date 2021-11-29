const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}
export default {
  name: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur'
    }
  ],
  password: [{ validator: validatePass, trigger: 'blur' }]
}
