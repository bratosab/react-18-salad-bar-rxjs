import { useEffect } from "react";
import { Observable } from "rxjs";

export const useObservable = <T>(
  observable: Observable<T>,
  callback: (result: T) => void
) => {
  useEffect(() => {
    const subscription = observable.subscribe((result) => {
      callback(result);

      return () => subscription.unsubscribe();
    });
  }, [observable, callback]);
};
