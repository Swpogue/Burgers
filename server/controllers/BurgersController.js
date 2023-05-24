import { burgerService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')

    this.router
      .get('', this.getBurgers)
      .get('/:burgerId', this.getBurger)
      .put('/:burgerId', this.editBurger)
      .post('', this.createBurger)
      .delete('/:burgerId', this.deleteBurger)

  }

  async deleteBurger(req, res, next) {
    try {
      const burger = await burgerService.deleteBurgerById(req.params.burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }



  async createBurger(req, res, next) {
    try {
      const burger = await burgerService.createBurger(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async editBurger(req, res, next) {
    try {
      const burger = await burgerService.editBurger(req.body)
      res.send(burger)

    } catch (error) {
      next(error)
    }
  }

  async getBurger(req, res, next) {
    try {
      const burger = await burgerService.getBurgerById(req.params.burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgerService.getAllBurgers()

      res.send(burgers)

    } catch (error) {
      next(error)
    }
  }

}