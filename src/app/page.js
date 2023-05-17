import Image from 'next/image';
import styles from './home.module.css'

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
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="poke bola" />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </>
  )
}
