import { useState } from "react";


const Form = () => {
    const [hostalname, setHostalname] = useState("");
    const [latitud, setLatitud] = useState("");
    const [longitud, setLongitud] = useState("");
    const [precioNoche, setPrecioNoche] = useState("");
    const [camino, setCamino] = useState("");
    const [provincia, setProvincia] = useState("");

    const [error,setError] = useState("");

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
        const user = usersData.find(user => user.email === email);
    
        // Verificar si el usuario existe y la contraseña coincide
        if (user && user.password === password) {
          // Inicio de sesión exitoso
          alert('Inicio de sesión exitoso');
        } else {
          // Credenciales incorrectas
          alert('Credenciales incorrectas');
        }
      };
    

 return (
    <section>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="hostalName">Nombre del alojamiento:</label>
            <input
              type="text"
              id="hostalName"
              name="hostalName"
              value={hostalName}
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
          <button type="submit">Registrarse</button>
          <button type="button" onClick={handleToggleMode}>¿Ya tienes una cuenta? Inicia sesión aquí</button>
        </form>
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
          <button type="submit">Iniciar sesión</button>
          <button type="button" onClick={handleToggleMode}>¿No tienes una cuenta? Regístrate aquí</button>
        </form>
    </section>
  );
}

export default Form;
