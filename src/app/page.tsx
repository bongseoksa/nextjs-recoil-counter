'use client';
import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState<number>(10);

  return (
    <main className={styles.container}>
      <Counter count={count} onUp={() => setCount(count + 1)} />
      <DisplayCounter count={count} />
    </main>
  );
}

// 값을 증가시키는 컴포넌트
export const Counter = (props) => {
  return (
    <div className={styles.container}>
      <h1>Counter</h1>
      <button onClick={props.onUp}>+</button>
      {props.count}
    </div>
  );
};

//값을 표현하는 컴포넌트
export const DisplayCounter = (props) => {
  return <div className={styles.container}>{props.count}</div>;
};
