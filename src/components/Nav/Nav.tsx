import { Container } from '@mantine/core'
import styles from './Nav.module.scss'
import { Image } from '@mantine/core'
const Nav = (): JSXNode => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Container className={styles.navContainer}>
          <div className={styles.companyLogo}>
            <Image src="/img/company_logo.png" alt="company logo" />
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Nav
