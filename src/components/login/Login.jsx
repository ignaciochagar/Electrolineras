import { useState, useEffect } from 'react';
import "../../App.css";
import usersData from "../../Database/Users.json";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');

  useEffect(() => {
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email) && email !== '') {
        setEmailError("El correo electrónico no es válido. Asegúrate de que esté en el formato correcto, como ejemplo@dominio.com.");
      } else {
        setEmailError('');
      }
    };

    const validatePassword = () => {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
      if (!passwordRegex.test(password) && password !== '') {
        setPasswordError("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.");
      } else {
        setPasswordError('');
      }
    };

    const validatePasswordRepeat = () => {
      if (passwordRepeat !== password && passwordRepeat !== '') {
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

  const handleLogin = (event) => {
    event.preventDefault();

    // Buscar el usuario por email
    const user = usersData.find(user => user.Email === email);

    // Verificar si el usuario existe y la contraseña coincide
    if (user && user.Password === password) {
      // Inicio de sesión exitoso
      alert('Inicio de sesión exitoso');
    } else {
      // Credenciales incorrectas
      alert('Credenciales incorrectas');
    }
  };

  return (
    <section>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
  );
}

export default Login;
