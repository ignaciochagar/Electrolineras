import { useState, useEffect } from 'react';
import '../../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');

  useEffect(() => {
    // Validar el campo de email
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email) && email !== '') { // Verifica si el email no está vacío antes de mostrar el mensaje de error
        setEmailError("El correo electrónico no es válido. Asegúrate de que esté en el formato correcto, como ejemplo@dominio.com.");
      } else {
        setEmailError('');
      }
    };

    // Validar el campo de contraseña
    const validatePassword = () => {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
      if (!passwordRegex.test(password) && password !== '') { // Verifica si la contraseña no está vacía antes de mostrar el mensaje de error
        setPasswordError("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.");
      } else {
        setPasswordError('');
      }
    };

    // Validar el campo de repetición de contraseña
    const validatePasswordRepeat = () => {
      if (passwordRepeat !== password && passwordRepeat !== '') { // Verifica si la repetición de la contraseña no está vacía antes de mostrar el mensaje de error
        setPasswordRepeatError("Las contraseñas no coinciden");
      } else {
        setPasswordRepeatError('');
      }
    };

    validateEmail();
    validatePassword();
    validatePasswordRepeat();
  }, [email, password, passwordRepeat]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordRepeatChange = (event) => {
    setPasswordRepeat(event.target.value);
  };

  return (
    <section>
      <form>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            id="Email"
            name="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <div>
          <label htmlFor="PasswordRepeat">Password Repeat:</label>
          <input
            type="password"
            id="PasswordRepeat"
            name="PasswordRepeat"
            value={passwordRepeat}
            onChange={handlePasswordRepeatChange}
          />
          {passwordRepeatError && <p style={{ color: 'red' }}>{passwordRepeatError}</p>}
        </div>
      </form>
    </section>
  );
}

export default Login;
