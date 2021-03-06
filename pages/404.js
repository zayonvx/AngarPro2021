import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <main className={'wrapper404'}>
      <div className={'container404'}>
        <h1 className={'header404'}>Ошибка 404</h1>
        <div className={'data-wrapper404'}>
          <p className={'text404'}>
            Ай, страница, к сожалению, не существует <span className="fal fa-smile-wink" />
          </p>
          <Link href={'/'}>
            <a className={'link404'}>Вернемся на главную страницу?</a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
