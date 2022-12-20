// recebe uma tipagem original e outra generica
export type Replace<T, R> = Omit<T, keyof R> & R;
