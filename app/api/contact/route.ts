import { mailOptions, transporter } from "../../lib/nodemailer"

export async function POST(req: Request, res: Response) {
    const body = await req.json()

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New contact from website",
      text: "This is a test string",
      html: `<h2>YOU GOT A NEW EMAIL</h2><br /><h2>FROM: </h2><h3>${body.name}</h3><h2>EMAIL: ${body.email}</h2><br />h3>MESSAGE:</h3><br /><p>${body.message}</p>`
    })
    
  } catch (error) {
    console.log(error);
    return new Response("BAD REQUEST");
  }
  
    return new Response(body);
  }