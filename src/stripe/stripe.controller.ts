import { Controller, Get, Post, Query } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private stripeService: StripeService) {}

  @Get()
  functieTest(): string {
    return this.stripeService.getMessage();
  }

  @Get('/checkout-session')
  async getCheckoutSession(@Query('sessionId') sessionId: string) {
    const session = await this.stripeService.retrieveSessionAndItems(sessionId);

    console.log(session);

    return session;
  }

  @Post('/create-checkout-session')
  async createCheckoutSession() {
    let response = await this.stripeService.createCheckoutSession();
    return {
      url: response.url,
    };
  }
}
