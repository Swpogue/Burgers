// @ts-ignore
import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { FakeDb } from "../db/FakeDb.js"

class BurgersService {
  async deleteBurgerById(burgerId) {
    const burger = await this.getBurgerById(burgerId)
    FakeDb.burgers = FakeDb.burgers.filter(b => b.id != burgerId)

    return burger
  }

  createBurger(newBurger) {
    newBurger.id = ~~(Math.random() * 546456) + 'r'

    FakeDb.burgers.push(newBurger)

    return newBurger

  }



  editBurger(updateBurger) {
    const burger = this.getBurgerById(updateBurger.id)

    // @ts-ignore
    burger.name = updateBurger.name || burger.name
    // @ts-ignore
    burger.picture = updateBurger.picture || burger.picture

    return burger


  }


  getBurgerById(burgerId) {
    const burger = FakeDb.burgers.find(b => b.id == burgerId)

    if (!burgerId) {
      throw new BadRequest('Invalid Burger Id')
    }

    return burger

  }
  getAllBurgers() {
    return FakeDb.burgers
  }

}


export const burgerService = new BurgersService()