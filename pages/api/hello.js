// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(res,"jggg");
  res.status(200).json({ name: 'Muskan Ved' })
}
