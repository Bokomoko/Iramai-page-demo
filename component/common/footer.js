import Link from 'next/link'
import styles from './footer.module.css'
import classNames from 'classnames'

function Footer() {
  return (
    <footer className={classNames(styles.footer, styles.section)}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerBottom}>
          <div className={styles.footerLinks}>
            <ul>
              <li><a href="https://www.facebook.com/turingcom/" target="_blank" rel="">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/turingcom/" target="_blank" rel="">Linkedin</a></li>
              <li><a href="https://www.instagram.com/turingcom/" target="_blank" rel="">Instagram</a></li>
              <li><a href="https://twitter.com/turingcom" target="_blank" rel="">Twitter</a></li>
            </ul>
          </div>
          <div className={styles.footerAddress}>
            <span>1900 Embarcadero Road,</span>
            <span>Palo Alto CA 94303</span>
            <span className={styles.copyright}>&copy; 2021 Turing</span>
          </div>
          <div className={styles.footerLinks2}>
            <ul>
              <li><Link href="/tos"><a>Terms of Service</a></Link></li>
              <li><Link href="/policy"><a>Privacy Policy</a></Link></li>
              <li><Link href="/faq"><a>FAQ</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
