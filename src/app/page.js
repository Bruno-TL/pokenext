import styles from './page.module.css'

async function getStaticProps() {
  const api = 'https://pokeapi.co/api/v2/pokemon'
  const res = await fetch(`${api}/`)
  return res.json()
}

export default async function Home() {
  const data = await getStaticProps();
  data.results.forEach((item, index) => {
    item.id = index + 1
  });
  const pokemons = data.results;
  return (
    <>
      <div>
        <h1>PokeNext</h1>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </div>

    </>
  )
}
