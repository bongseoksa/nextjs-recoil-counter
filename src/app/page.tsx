'use client';
import styles from './page.module.css';
import { ReactEventHandler, useState } from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from 'recoil';

// recoil 상태관리
const countState = atom({ key: 'countRecoil', default: 10 });

export default function Home() {
  /* ----- Counter 컴포넌트 내장 데이터를 외부 컴포넌트에 공유할 수 없기 때문에 부모 컴포넌트(Home)에서 값 관리 ----- */
  const [count, setCount] = useState<number>(10);

  return (
    <main className={styles.container}>
      {/* Recoil 전역상태 적용 root 설정 */}
      <RecoilRoot>
        <p>By Props</p>
        <Counter count={count} onUp={() => setCount(count + 1)} />
        <DisplayCounter count={count} />
        <br />
        <br />

        <p>By Recoil</p>
        <CounterRecoil />
        <DisplayCounterRecoil />
      </RecoilRoot>
    </main>
  );
}

// 값을 증가시키는 컴포넌트. Counter 컴포넌트 내장 데이터를 외부 컴포넌트에 공유할 수 없기 때문에 부모 컴포넌트(Home)에서 값 관리
export const Counter = (props: {
  count: number;
  onUp: ReactEventHandler<any>;
}) => {
  return (
    <div className={styles.container}>
      <h1>Counter - Props</h1>
      <button onClick={props.onUp}>+</button>
      {props.count}
    </div>
  );
};

//값을 표현하는 컴포넌트. props를 통해 전달받은 값 표시
export const DisplayCounter = (props) => {
  return <div className={styles.container}>{props.count}</div>;
};

/* ----- Recoil Component ----- */
// 값을 증가시키는 컴포넌트.
export const CounterRecoil = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    // recoil 상태관리를 사용할 root 컴포넌트 설정
    <div className={styles.container}>
      <h1>Counter - Recoil</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count}
    </div>
  );
};

//값을 표현하는 컴포넌트.
export const DisplayCounterRecoil = () => {
  const count = useRecoilValue(countState);
  return <div className={styles.container}>{count}</div>;
};
