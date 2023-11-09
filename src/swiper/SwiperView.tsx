import { createSignal, createEffect, For, Show } from "solid-js";

import styles from "./SwiperView.module.css";

const list = Array.from({ length: 5 }, (v, i) => i);

export function SwiperView() {


  return (
    <div class={styles.Wrap}>
      <button>←</button>
      <div class={styles.Content}>
            <For each={list}>
                {(item, index) => (
                    <div style={{width: '150px', 'margin-right': '15px'}} class={styles.Item}>Slide {index()+1}</div>
                )}
            </For>
      </div>
      <button onClick={() => swiper.slideNext()}>→</button>
    </div>
  );
}
