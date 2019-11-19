export default {
  name: [
    {
      label: 'First name:',
      placeholder: 'Glenn *',
      model: 'name',
      required: true,
      maxlength: 30,
      issue: '',
      validator: false,
    },
    {
      label: 'Last name:',
      placeholder: 'Ingvars *',
      model: 'lastName',
      required: true,
      maxlength: 30,
      issue: '',
      validator: false,
    },
  ],
  personalNr: [
    {
      label: 'Personal Nr:',
      placeholder: 'YYYYMMDDXXXX *',
      model: 'personalNr',
      required: true,
      maxlength: 12,
      issue: 'Please insert only numbers like YYYYMMDDXXXX',
      validator: 'isNumeric',
    },
    {
      label: 'Positions:',
      model: 'positions',
      options: [
        {
          value: null,
          // text: 'Multi-select with Ctrl',
          text: 'Select at least one',
          disabled: true
        },
        {
          text: 'Waiter',
          value: 'Waiter',
        },
        {
          text: 'Chef',
          value: 'Chef',
        },
        {
          text: 'Kitchen Assistant',
          value: 'Kitchen Assistant',
        },
        {
          text: 'Dishwasher',
          value: 'Dishwasher',
        },
        {
          text: 'Bartender',
          value: 'Bartender',
        },
        {
          text: 'Restaurant Assistant',
          value: 'Restaurant Assistant',
        }
      ],
      multiple: true,
      required: false,
      issue: '',
      validator: false,
    },
  ],
  contact: [
    {
      label: 'Email:',
      placeholder: 'glenn@example.com *',
      model: 'email',
      required: true,
      maxlength: 50,
      issue: 'Email must contain an @ and a valid end (ex: .com)',
      validator: 'isEmail',
    },
    {
      label: 'Phone Nr:',
      placeholder: '0707123456 *',
      model: 'phoneNr',
      required: true,
      maxlength: 12,
      issue: 'The number is not valid. +46 is a valid country specification',
      validator: 'isMobilePhone',
    },
  ],
  country: [
    {
      label: 'Country:',
      placeholder: 'Sweden *',
      model: 'country',
      required: true,
      maxlength: 50,
      issue: '',
      validator: false,
    },
  ],
  adress: [
    {
      label: 'Street Adress:',
      placeholder: 'Glenns Gata 11 *',
      model: 'adress',
      required: true,
      maxlength: 30,
      issue: '',
      validator: false,
    },
    {
      label: 'Second Street Adress:',
      placeholder: 'Glenns Gata 12',
      model: 'adress2',
      required: false,
      maxlength: 30,
      issue: '',
      validator: false,
    },
    {
      label: 'City:',
      placeholder: 'Glennstad *',
      model: 'city',
      required: true,
      maxlength: 30,
      issue: '',
      validator: false,
    },
  ],
  bank: [
    {
      label: 'Bank:',
      placeholder: 'Glenns Bank *',
      model: 'bank',
      required: true,
      maxlength: 30,
      issue: '',
      validator: false,
    },
  ],
  bankNr: [
    {
      label: 'Bank Nr:',
      placeholder: '234567 *',
      model: 'bankNr',
      required: true,
      maxlength: 40,
      issue: '',
      validator: false,
    },
    {
      label: 'Clearing Nr:',
      placeholder: '1234 *',
      model: 'clrNr',
      required: true,
      maxlength: 10,
      issue: '',
      validator: false,
    },
  ],
  salary: [
    {
      label: 'Salary per hour:',
      placeholder: '123',
      model: 'salary',
      required: false,
      issue: 'Please only insert numbers',
      validator: 'isNumeric',
    },
  ],
  admin: [
    {
      label: 'fortnox Nr:',
      placeholder: 'Fortnox Nr',
      model: 'fortnoxNr',
      required: false,
      issue: '',
      validator: false,
    },
  ],
};
