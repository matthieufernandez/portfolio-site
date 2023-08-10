import { mailOptions, transporter } from "../../lib/nodemailer"

export async function POST(req: Request, res: Response) {
    const body = await req.json()

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New contact from website",
      text: "This is a test string",
      html: `<h3>You have a new contact email</h3><br /><h3>FROM: ${body.name}</h3><h3>EMAIL: ${body.email}</h3><h3>MESSAGE:</h3><h4>${body.message}</h4>`
    })
    
  } catch (error) {
    console.log(error);
    return new Response("BAD REQUEST");
  }
  
    return new Response(body);
  }