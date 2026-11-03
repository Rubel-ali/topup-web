import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amountBdt, packageId, packageName, gameTitle, playerId, paymentMethod, userPhone } = body;

    if (!amountBdt || amountBdt < 50) {
      return NextResponse.json({ message: 'Invalid order amount' }, { status: 400 });
    }

    const partnerOrderId = `TOPUP_${Date.now()}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const apiUrl = process.env.TRANSFI_API_URL || 'https://api-sandbox.transfi.com';
    const mid = process.env.TRANSFI_MID || 'SBTSBZ_NA_NA';
    const username = process.env.TRANSFI_USERNAME || 'sunbet365';
    const password = process.env.TRANSFI_PASSWORD || 'CkaB1IR0nfkJgW';
    const payoutWallet = process.env.ADMIN_PAYOUT_WALLET_ADDRESS || '0x380B3096586af5a68C9cAd348c2621Fe3BA99e76';

    const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

    const origin = req.headers.get('origin') || (req.headers.get('host') ? `http://${req.headers.get('host')}` : 'https://apextopupbd.com');
    const redirectUrl = `${origin}/checkout/success?orderId=${partnerOrderId}`;

    const payload = {
      mid,
      partnerOrderId,
      fiatCurrency: 'BDT',
      fiatAmount: Number(amountBdt),
      cryptoCurrency: 'USDT',
      network: 'BSC',
      walletAddress: payoutWallet,
      redirectUrl,
    };

    try {
      const response = await fetch(`${apiUrl}/v1/order/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader,
          'mid': mid,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      const checkoutUrl = data.checkoutUrl || data.payUrl || data.url || data.redirectUrl;

      if (response.ok && checkoutUrl) {
        return NextResponse.json({
          success: true,
          orderId: partnerOrderId,
          checkoutUrl,
        });
      }
    } catch (apiErr) {
      console.warn('TransFi API direct create fallback:', apiErr);
    }

    // Hosted Widget Fallback URL
    const widgetBase = apiUrl.includes('sandbox') 
      ? 'https://sandbox-buy.transfi.com' 
      : 'https://buy.transfi.com';
    
    const fallbackUrl = `${widgetBase}/?apiKey=${encodeURIComponent(username)}&walletAddress=${encodeURIComponent(payoutWallet)}&fiatCurrency=BDT&cryptoCurrency=USDT&fiatAmount=${amountBdt}&partnerOrderId=${encodeURIComponent(partnerOrderId)}&redirectUrl=${encodeURIComponent(redirectUrl)}`;

    return NextResponse.json({
      success: true,
      orderId: partnerOrderId,
      checkoutUrl: fallbackUrl,
    });
  } catch (err: any) {
    console.error('Error creating topup order:', err);
    return NextResponse.json({ message: err.message || 'Internal server error' }, { status: 500 });
  }
}

