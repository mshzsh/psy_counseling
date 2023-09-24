// revalidate api
export default async function handler(req, res) {
  try {
    const { r } = req.query
    if (r) {
      await res.revalidate(r)
      return res.status(200).send(`ok: ${r}`)
    }
    return res.status(400).end()
  } catch (err) {
    return res.status(500).end()
  }
}
// should be called like: api.revalidate({ data: { r: 'blog/post-1' } })

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json({ name: 'John Doe' })
//   } else if (req.method === 'POST') {
//     // Process a POST request
//   } else {
//     // Handle any other HTTP method
//   }
// }
