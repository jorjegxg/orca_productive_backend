import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-08-27.basil',
    });
  }

  public getMessage(): string {
    var a = process.env.FRONTEND_URL;
    console.log(a);
    return 'Mesajul meu este.............sadads.......';
  }
  /////////////////////////////////////

  public async retrieveSessionAndItems(sessionId: string) {
    const session = await this.stripe.checkout.sessions.retrieve(sessionId);
    const items = await this.stripe.checkout.sessions.listLineItems(sessionId);

    return {
      amount_total: session.amount_total,
      currency: session.currency,
      line_items: items.data.map((item) => {
        return {
          id: item.id,
          object: item.object,
          price: item.price?.unit_amount,
          currency: item.currency,
          quantity: item.quantity,
          description: item.description,
        };
      }),
    };
  }

  public async createCheckoutSession() {
    return this.stripe.checkout.sessions.create({
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.FRONTEND_URL + '/cancel',
      mode: 'payment',
      line_items: [
        {
          price: process.env.PRICE!,
          quantity: 1,
        },
      ],
    });
  }
}
