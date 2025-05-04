import { useEffect, useState } from 'react';

function App() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/ads')
      .then(res => res.json())
      .then(data => setAds(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Kleinanzeigen</h1>
      <ul>
        {ads.map(ad => (
          <li key={ad._id}>
            <h2>{ad.title}</h2>
            <p>{ad.description}</p>
            <strong>{ad.price} €</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;