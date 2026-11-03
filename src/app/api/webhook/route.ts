import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = 
      req.headers.get('x-transfi-hmac-hash') || 
      req.headers.get('x-transfi-signature') || '';

    const secret = process.env.TRANSFI_WEBHOOK_SECRET || '1wF6SrkSmS1U76';

    if (secret && signature) {
      const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(rawBody)
        .digest('hex');

      const sigBuf = Buffer.from(signature.trim().toLowerCase(), 'utf8');
      const expBuf = Buffer.from(expectedSignature.trim().toLowerCase(), 'utf8');

      if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
        console.warn('Invalid signature on Topup Webhook');
        return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
      }
    }

    const payload = JSON.parse(rawBody || '{}');
    console.log('TopUp Platform Webhook received successfully:', payload);

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('Webhook error in topup-web:', err);
    return NextResponse.json({ message: 'Internal error' }, { status: 500 });
  }
}

