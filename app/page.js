'use client'

import dynamic from 'next/dynamic'
import styles from './page.module.css'

// Dynamic import to avoid SSR issues with Three.js
const Scene3D = dynamic(() => import('../components/Scene3D'), {
    ssr: false,
    loading: () => (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a855f7'
        }}>
            Loading 3D Scene...
        </div>
    )
})

export default function Home() {
    return (
        <main className={styles.main}>
            <Scene3D />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={`${styles.content} fade-in-up`}>
                    <h1 className={styles.title}>
                        Welcome to the <span className="gradient-text">Future</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Experience the next generation of web design with stunning 3D animations
                    </p>
                    <div className={styles.buttonGroup}>
                        <button className="btn btn-primary">Get Started</button>
                        <button className={`btn ${styles.btnSecondary}`}>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.featuresGrid}>
                    <div className={`glass ${styles.featureCard} fade-in-up`} style={{ animationDelay: '0.1s' }}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>🚀</span>
                        </div>
                        <h3>Lightning Fast</h3>
                        <p>Optimized performance with cutting-edge technology</p>
                    </div>

                    <div className={`glass ${styles.featureCard} fade-in-up`} style={{ animationDelay: '0.2s' }}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>✨</span>
                        </div>
                        <h3>Beautiful Design</h3>
                        <p>Stunning visuals that captivate your audience</p>
                    </div>

                    <div className={`glass ${styles.featureCard} fade-in-up`} style={{ animationDelay: '0.3s' }}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>🎯</span>
                        </div>
                        <h3>Interactive</h3>
                        <p>Engaging 3D experiences that users love</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={`glass ${styles.ctaCard} fade-in-up`}>
                    <h2>Ready to Transform Your Web Experience?</h2>
                    <p>Join thousands of satisfied users who have elevated their digital presence</p>
                    <button className="btn btn-primary" style={{ marginTop: '24px' }}>
                        Start Your Journey
                    </button>
                </div>
            </section>
        </main>
    )
}
