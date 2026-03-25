import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendReservationEmail = async (
  to: string,
  subject: string,
  data: {
    name: string;
    tableNumber: number;
    startTime: string;
    reservationId: string;
    type: "paid" | "refunded";
  },
) => {
  try {
    const { name, tableNumber, startTime, reservationId, type } = data;

    const formattedTime = new Date(startTime).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

    const htmlContent =
      type === "paid"
        ? `<h1>Booking Confirmed!</h1>
        <p>Hi ${name}, your table at <strong>Kwadro Billiards</strong> is ready.</p>
        <ul>
            <li><strong>Table:</strong> ${tableNumber}</li>
            <li><strong>Time:</strong> ${formattedTime}</li>
            <li><strong>Ref ID:</strong> ${reservationId}</li>
        </ul>
        <p>See you there!</p>`
        : `<h1>Refund Processed</h1>
        <p>Hi ${name}, your payment for Table ${tableNumber} was received after 30-minute limit.</p>
        <p>Since the table was taken by another player, we have issued a <strong>full refund</strong></p>
        <p>Please try booking a different timeslot!</p>`;

    await resend.emails.send({
      from: "Kwadro Billiards <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html: htmlContent,
    });

    console.log(`Email sent: ${type} to ${to}`);
  } catch (err) {
    console.error("Email failed to send:", err);
  }
};
