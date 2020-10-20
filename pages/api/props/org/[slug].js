export default async function(req, res) {
  try {
    const { ref } = req.query

    const response = await fetch("https://reqres.in/api/unknown/2")
    const object = await response.json()
    
    return res.status(200).json(object)
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end({ error: error.message })
  }
}