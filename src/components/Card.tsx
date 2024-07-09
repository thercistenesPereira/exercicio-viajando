type CityInfoProps = {
  cityInfo: {
    city: string,
    country: string,
    imageUr: string,
    visited?: boolean,
  }
};

function Card({ cityInfo }: CityInfoProps) {
  const { city, country, imageUr, visited = false } = cityInfo;
  return (
    <div>
      <h2>{ country }</h2>
      <h3>{ city }</h3>
      <img src={ imageUr } alt={ city } />
      {
        visited ? 'Já Fui!' : 'Não Fui.'
      }
    </div>
  );
}

export default Card;
