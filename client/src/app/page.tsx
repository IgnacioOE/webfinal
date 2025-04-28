'use client'
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [studentData, setStudentData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    if (!user || !password) {
      alert('Usuario y contraseña son requeridos');
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/?usuario=${user}&contrasena=${password}`);
      const data = await response.json();
      setStudentData(data);
      alert(`¡Bienvenido, ${studentData?.nombre || 'Usuario'}! Disfruta de tu lectura. Tu libro favorito es "${studentData?.libroFav}".`);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error al iniciar sesión');
    } finally{
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={user || ''}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contraseña"
        value={password || ''}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}



