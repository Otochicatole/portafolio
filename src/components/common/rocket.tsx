import styles from '../ui/styles/rocket.module.css';

export default function Rocket() {
    return (
        <div className={styles.rocket}>
            <div className={styles.rocketBody}>
                <div className={styles.body}></div>
                <div className={`${styles.fin} ${styles.finLeft}`}></div>
                <div className={`${styles.fin} ${styles.finRight}`}></div>
                <div className={styles.window}></div>
            </div>
            <div className={styles.exhaustFlame}></div>
            <ul className={styles.exhaustFumes}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul className={styles.star}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

