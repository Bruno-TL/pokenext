import styles from '@/styles/about.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>SOBRE O PROJETO</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam mollitia autem blanditiis, ex non exercitationem error, eaque nostrum voluptatem similique reprehenderit consequuntur laborum tenetur odio praesentium sit in deleniti quo.</p>
      <Image src="/images/charizard.png" width="300" height="300" alt="charizard"/>
    </div>
  )
}