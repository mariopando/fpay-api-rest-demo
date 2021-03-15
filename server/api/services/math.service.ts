import L from '../../common/logger';

interface Prime {
  data: number[];
  payload: string;
}

export class MathService {
  getDescendentPrimeNumbers(inputNumber: number): Promise<Prime> {
    const minCount = 0;
    const primes = [];
    let currentNumber = inputNumber;

    const isPrime = (n: number) => {
      if (n % 1 || n < 2) return false;

      const q = Math.sqrt(n);

      for (let i = 2; i <= q; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    };

    while (currentNumber >= minCount) {
      if (isPrime(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber = currentNumber - 1;
    }

    L.info(primes, 'get all data');
    return Promise.resolve({ data: primes, payload: primes.join(',') });
  }
}

export default new MathService();
