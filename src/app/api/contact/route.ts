export async function POST(request: Request) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("[v0] N8N webhook URL not configured");
      return Response.json(
        { error: "Webhook URL not configured" },
        { status: 500 }
      );
    }

    console.log("[v0] Sending to webhook URL:", webhookUrl);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("[v0] Webhook response status:", response.status);

    if (!response.ok) {
      console.error("[v0] N8N webhook error:", response.status);
      console.error("[v0] Webhook response:", await response.text());
      return Response.json(
        { error: "Failed to submit form" },
        { status: response.status }
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[v0] API route error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
