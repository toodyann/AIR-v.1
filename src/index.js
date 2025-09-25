import {buttonsClick, btnClick} from './feature/buttons.js';

buttonsClick();

const submitBtn = document.getElementById('form-submit-btn');
submitBtn.addEventListener('click', btnClick);