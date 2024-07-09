type CityInfoProps = {
  cityInfo: {
    city: string,
    country: string,
    imageUrl: string,
    visited?: boolean,
  }
};

function Card({ cityInfo }: CityInfoProps) {
  const { city, country, imageUrl, visited = false } = cityInfo;
  return (
    <div className="card">
      <h2>{ country }</h2>
      <h3>{ city }</h3>
      <img src={ imageUrl } alt={ city } />
      {
        visited ? <p>Já Fui!</p> : <p>Não Fui.</p>
      }
    </div>
  );
}

export default Card;
