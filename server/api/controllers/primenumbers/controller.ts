import MathService from '../../services/math.service';
import { Request, Response } from 'express';

export class Controller {
  all(_: Request, res: Response): void {
    const num = Number(_.params.inputNumber);
    MathService.getDescendentPrimeNumbers(num).then((r) => res.json(r));
  }
}
export default new Controller();
