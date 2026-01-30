import { atom } from 'nanostores';

export const $counter = atom<number>(0);

export function increment() {
    $counter.set($counter.get() + 1)
}