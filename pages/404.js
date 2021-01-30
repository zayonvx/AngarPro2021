import React from 'react';
import Link from 'next/link';
import styles from '../src/sass/404.module.scss';

const ErrorPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>Ошибка 404</h1>
        <div className={styles.data_wrapper}>
          <p className={styles.text}>
            Ай, страница, к сожалению, не существует <span className="fal fa-smile-wink" />
          </p>
          <Link href={'/'}>
            <a className={styles.link}>Вернемся на главную страницу?</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
