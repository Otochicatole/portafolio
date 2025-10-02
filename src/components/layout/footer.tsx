import styles from './styles/footer.module.css';

export default function Footer() {
    return (
        <div className="w-full h-[600px] z-0 pb-[60px] sm:pb-0 relative overflow-hidden">
            <div className={styles.container} style={{ position: 'absolute', inset: 0 }}></div>
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, #0e0e0e 0%, #0c0c0c 15%, #0a0a0a 25%, #080808 35%, #040404 45%, #000000 55%, rgba(0, 0, 0, 0.85) 65%, rgba(0, 0, 0, 0.65) 75%, rgba(0, 0, 0, 0.4) 85%, rgba(0, 0, 0, 0.15) 95%, transparent 100%)',
                    zIndex: 10
                }}
            ></div>
        </div>
    );
}
